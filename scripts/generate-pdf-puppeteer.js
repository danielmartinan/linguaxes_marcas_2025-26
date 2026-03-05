const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const docsDir = path.resolve(__dirname, '../docs');
const outputBase = path.resolve(__dirname, '../static/pdfs');

// Permitir pasar un directorio específico como argumento
const dirArg = process.argv[2];
const targetDir = dirArg 
    ? path.resolve(__dirname, '../docs', dirArg) 
    : docsDir;

function sanitizeForFs(p) {
    return p
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita tildes
        .replace(/[^\w\-\\/]/g, '_'); // reemplaza todo lo demás
}

// Recorrer recursivamente los archivos .md y .mdx dentro de "docs/"
function getAllMarkdownFiles(dir, baseDir = dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        // Ignorar archivos y directorios que comiencen con guion bajo
        if (file.startsWith('_')) {
            console.log(`⏭️  Ignorando: ${file} (comienza con _)`);
            continue;
        }
        
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllMarkdownFiles(filePath, baseDir));
        } else if (/\.(md|mdx)$/.test(file)) {
            const relativePath = path.relative(baseDir, filePath);
            results.push(relativePath);
        }
    }
    return results;
}

// Obtener lista de archivos a procesar desde argumentos de línea de comandos
function getFilesToProcess() {
    const args = process.argv.slice(2);
    const filesArg = args.find(arg => arg.startsWith('--files='));
    
    if (!filesArg) {
        // Si no se especifican archivos, procesar todos
        return getAllMarkdownFiles(docsDir);
    }
    
    try {
        const jsonStr = filesArg.substring('--files='.length).trim();
        let changedFiles = [];

        try {
            const parsed = JSON.parse(jsonStr);
            changedFiles = Array.isArray(parsed) ? parsed : [parsed];
        } catch {
            // Fallback tolerante para PowerShell: acepta path simple o lista separada por comas
            changedFiles = jsonStr
                .replace(/^\[|\]$/g, '')
                .split(',')
                .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
                .filter(Boolean);
        }
        
        // Filtrar archivos válidos (que existan y no comiencen con _)
        const validFiles = changedFiles.filter(file => {
            // Ignorar solo si algún directorio en la ruta empieza por "_"
            const parts = file.replace(/\\/g, '/').split('/').filter(Boolean);
            const hasPrivateDir = parts.slice(0, -1).some(part => part.startsWith('_'));
            if (hasPrivateDir) {
                console.log(`⏭️  Ignorando: ${file} (directorio privado)`);
                return false;
            }
            
            const fullPath = path.join(docsDir, file);
            if (!fs.existsSync(fullPath)) {
                console.log(`⚠️  Archivo no encontrado: ${file}`);
                return false;
            }
            
            return true;
        });
        
        if (validFiles.length === 0) {
            console.log('⚠️  No hay archivos válidos para procesar. Procesando todos...');
            return getAllMarkdownFiles(docsDir);
        }
        
        return validFiles;
    } catch (error) {
        console.error('Error al parsear archivos JSON:', error.message);
        console.log('Procesando todos los archivos...');
        return getAllMarkdownFiles(docsDir);
    }
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    await page.emulateMediaType('screen');

    const files = getFilesToProcess();
    console.log(`\n📚 Encontrados ${files.length} archivos para exportar\n`);
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const withoutExt = file.replace(/\.(md|mdx)$/, '');
        const urlPath = '/docs/' + withoutExt.replace(/\\/g, '/');
        const sanitizedPath = sanitizeForFs(withoutExt);
        const outputFile = path.join(outputBase, sanitizedPath + '.pdf');

        fs.mkdirSync(path.dirname(outputFile), { recursive: true });

        const fullUrl = `${BASE_URL}${urlPath}`;
        console.log(`\n[${i + 1}/${files.length}] 📄 Exportando: ${file}`);

        try {
            await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 60000 });

            // Esperar a que React renderice completamente
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Esperar a que Mermaid termine de renderizar todos los diagramas
            await page.evaluate(() => {
                return new Promise((resolve) => {
                    const checkMermaid = setInterval(() => {
                        const loadingDivs = document.querySelectorAll('.mermaid:not(:has(svg))');
                        if (loadingDivs.length === 0) {
                            clearInterval(checkMermaid);
                            resolve();
                        }
                    }, 200);
                    setTimeout(() => {
                        clearInterval(checkMermaid);
                        resolve();
                    }, 10000);
                });
            });

            // Cargar imágenes con scroll gradual
            await page.evaluate(async () => {
                const scrollStep = 500;
                const documentHeight = document.body.scrollHeight;
                
                for (let i = 0; i < documentHeight; i += scrollStep) {
                    window.scrollTo(0, i);
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                
                window.scrollTo(0, documentHeight);
                await new Promise(resolve => setTimeout(resolve, 500));
                window.scrollTo(0, 0);
                await new Promise(resolve => setTimeout(resolve, 500));
                
                const images = Array.from(document.querySelectorAll('img, picture img, figure img, [class*="image"] img'));
                
                images.forEach(img => {
                    img.loading = 'eager';
                    if (img.getAttribute('loading') === 'lazy') {
                        img.removeAttribute('loading');
                    }
                    if (img.dataset.src && !img.src) {
                        img.src = img.dataset.src;
                    }
                    img.style.display = 'block';
                    img.style.visibility = 'visible';
                    img.style.opacity = '1';
                    img.style.maxWidth = '100%';
                    img.style.height = 'auto';
                    img.style.pageBreakInside = 'avoid';
                });
            });
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            await page.evaluate(async () => {
                const images = Array.from(document.querySelectorAll('img'));
                await Promise.all(images.map(img => {
                    if (img.complete && img.naturalHeight !== 0) {
                        return Promise.resolve();
                    }
                    return new Promise(resolve => {
                        const timeout = setTimeout(resolve, 8000);
                        img.onload = () => {
                            clearTimeout(timeout);
                            resolve();
                        };
                        img.onerror = () => {
                            clearTimeout(timeout);
                            resolve();
                        };
                    });
                }));
            });

            // Esperar a que KaTeX renderice las fórmulas
            await page.evaluate(() => {
                return new Promise((resolve) => {
                    const katexElements = document.querySelectorAll('.katex');
                    if (katexElements.length > 0) {
                        setTimeout(resolve, 1500);
                    } else {
                        resolve();
                    }
                });
            });

            // Forzar apertura de secciones colapsables en markdown (<details>)
            await page.evaluate(() => {
                document.querySelectorAll('details').forEach((detailsEl) => {
                    detailsEl.open = true;
                    detailsEl.setAttribute('open', '');
                });
            });

            await new Promise(resolve => setTimeout(resolve, 300));

            await page.addStyleTag({ path: path.resolve(__dirname, '../static/print.css') });

            // Inyectar estilos adicionales para forzar tamaños de fuente
            await page.addStyleTag({
                content: `
                    h1 { font-size: 18pt !important; }
                    h2 { font-size: 15pt !important; }
                    h3, h4, h5, h6 { font-size: 13pt !important; }
                    body, p, li, span, div, td, th, a, code { font-size: 11pt !important; }
                    pre { font-size: 9pt !important; }

                    /* Forzar contenido de <details> siempre visible en PDF */
                    details { display: block !important; }
                    details > summary { display: list-item !important; }
                    details > :not(summary) { display: block !important; }
                    details > summary ~ * {
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        max-height: none !important;
                        height: auto !important;
                        overflow: visible !important;
                    }
                    details:not([open]) > :not(summary) { display: block !important; }
                `
            });

            // Forzar visibilidad y ocultar navegación
            await page.evaluate(() => {
                const elementsToHide = [
                    'nav', '.navbar', '.navbar__inner', 'aside',
                    '.theme-doc-sidebar-container', '.theme-doc-toc-desktop',
                    '.theme-doc-toc-mobile', '.theme-doc-breadcrumbs',
                    '.theme-doc-footer', '.theme-edit-this-page',
                    '.pagination-nav', 'footer', '.footer',
                    '.table-of-contents', '.theme-back-to-top-button',
                    '[class*="tocCollapsible"]', '[class*="sidebar"]',
                    '[class*="breadcrumb"]', '[class*="tableOfContents"]',
                    '[class*="toc"]', '[class*="docSidebarContainer"]',
                    '[class*="docToc"]'
                ];
                
                elementsToHide.forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => {
                        el.style.display = 'none';
                        el.style.visibility = 'hidden';
                    });
                });

                const mainContainer = document.querySelector('main') || 
                                     document.querySelector('article') || 
                                     document.querySelector('.theme-doc-markdown');
                
                if (mainContainer) {
                    mainContainer.style.maxWidth = '100%';
                    mainContainer.style.padding = '0';
                    mainContainer.style.margin = '0';
                }

                document.body.style.background = '#ffffff';
                document.documentElement.style.background = '#ffffff';
                
                const allContainers = document.querySelectorAll('div, section, main, article');
                allContainers.forEach(el => {
                    el.style.background = 'transparent';
                    el.style.backgroundColor = 'transparent';
                });
                
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    if (el.childNodes.length > 0) {
                        el.style.color = '#000000';
                        el.style.visibility = 'visible';
                        el.style.opacity = '1';
                    }
                });
                
                document.querySelectorAll('p, li, span, div, td, th, h1, h2, h3, h4, h5, h6, a, strong, em, code').forEach(el => {
                    el.style.color = '#000000';
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                });
            });

            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reforzar apertura justo antes de imprimir (evita re-colapsado por hidratación)
            const detailsState = await page.evaluate(async () => {
                const forceOpen = () => {
                    document.querySelectorAll('details').forEach((detailsEl) => {
                        const summaryEl = detailsEl.querySelector(':scope > summary');
                        if (!detailsEl.open && summaryEl) {
                            summaryEl.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
                        }

                        detailsEl.open = true;
                        detailsEl.setAttribute('open', '');

                        if (detailsEl instanceof HTMLElement) {
                            detailsEl.style.display = 'block';
                            detailsEl.style.visibility = 'visible';
                            detailsEl.style.opacity = '1';
                            detailsEl.style.maxHeight = 'none';
                            detailsEl.style.height = 'auto';
                            detailsEl.style.overflow = 'visible';

                            Array.from(detailsEl.children).forEach((child) => {
                                if (child instanceof HTMLElement && child.tagName.toLowerCase() !== 'summary') {
                                    child.style.display = 'block';
                                    child.style.visibility = 'visible';
                                    child.style.opacity = '1';
                                    child.style.maxHeight = 'none';
                                    child.style.height = 'auto';
                                    child.style.overflow = 'visible';
                                }
                            });

                            detailsEl.querySelectorAll('[hidden], [aria-hidden="true"]').forEach((el) => {
                                if (el instanceof HTMLElement) {
                                    el.removeAttribute('hidden');
                                    el.setAttribute('aria-hidden', 'false');
                                }
                            });
                        }
                    });
                };

                forceOpen();
                await new Promise(resolve => setTimeout(resolve, 150));
                forceOpen();

                const total = document.querySelectorAll('details').length;
                const open = document.querySelectorAll('details[open]').length;
                return { total, open };
            });

            if (detailsState.total > 0) {
                console.log(`   ℹ️  Details abiertos: ${detailsState.open}/${detailsState.total}`);
            }

            await page.pdf({
                path: outputFile,
                format: 'A4',
                printBackground: true,
                preferCSSPageSize: false,
                displayHeaderFooter: false,
                omitBackground: false,
                margin: {
                    top: '16mm',
                    bottom: '16mm',
                    left: '14mm',
                    right: '14mm'
                },
            });
            
            console.log(`   ✅ Generado: ${outputFile}`);
        } catch (err) {
            console.error(`   ❌ Error: ${err.message}`);
        }
    }

    await browser.close();
    console.log('\n✅ ¡Exportación masiva completada!\n');
})();
