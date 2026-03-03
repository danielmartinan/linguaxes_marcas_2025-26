const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'http://localhost:3000';
const docsDir = path.resolve(__dirname, '../docs');
const outputBase = path.resolve(__dirname, '../static/pdfs');

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
        const jsonStr = filesArg.substring('--files='.length);
        const changedFiles = JSON.parse(jsonStr);
        
        // Filtrar archivos válidos (que existan y no comiencen con _)
        const validFiles = changedFiles.filter(file => {
            // Ignorar archivos de directorios que comiencen con _
            if (file.includes('_examenes') || file.includes('_tarea') || 
                file.includes('_cuestionarios') || file.includes('_practica') ||
                file.includes('_ejercicios_resueltos') || file.includes('_apuntes_distancia')) {
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

            await page.addStyleTag({ path: path.resolve(__dirname, '../static/print.css') });

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
                    '[class*="breadcrumb"]'
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

            await page.pdf({
                path: outputFile,
                format: 'A4',
                printBackground: true,
                preferCSSPageSize: false,
                displayHeaderFooter: false,
                omitBackground: false,
                margin: {
                    top: '20mm',
                    bottom: '20mm',
                    left: '15mm',
                    right: '15mm'
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
