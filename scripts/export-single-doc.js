const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const outputBase = path.resolve(__dirname, '../static/pdfs');

function sanitizeForFs(p) {
    return p
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\-\\/]/g, '_');
}

async function exportToPdf(docPath) {
    const urlPath = '/docs/' + docPath.replace(/\\/g, '/');
    const sanitizedPath = sanitizeForFs(docPath);
    const outputFile = path.join(outputBase, sanitizedPath + '.pdf');

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });

    const fullUrl = `${BASE_URL}${urlPath}`;
    console.log(`\n📄 Exportando documento MDX a PDF`);
    console.log(`   URL: ${fullUrl}`);
    console.log(`   Salida: ${outputFile}\n`);

    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage'] });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 1600 });
        await page.emulateMediaType('screen');
        await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 60000 });
        await new Promise(resolve => setTimeout(resolve, 3000));

        await page.evaluate(() => {
            return new Promise((resolve) => {
                const checkMermaid = setInterval(() => {
                    const loadingDivs = document.querySelectorAll('.mermaid:not(:has(svg))');
                    if (loadingDivs.length === 0) { clearInterval(checkMermaid); resolve(); }
                }, 200);
                setTimeout(() => { clearInterval(checkMermaid); resolve(); }, 10000);
            });
        });

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
                if (img.getAttribute('loading') === 'lazy') img.removeAttribute('loading');
                if (img.dataset.src && !img.src) img.src = img.dataset.src;
                img.style.display = 'block';
                img.style.visibility = 'visible';
                img.style.opacity = '1';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                img.style.pageBreakInside = 'avoid';
            });
        });

        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.evaluate(async () => {
            const images = Array.from(document.querySelectorAll('img'));
            await Promise.all(images.map(img => {
                if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
                return new Promise(resolve => {
                    const timeout = setTimeout(resolve, 10000);
                    img.onload = () => { clearTimeout(timeout); resolve(); };
                    img.onerror = () => { clearTimeout(timeout); resolve(); };
                });
            }));
        });

        await page.evaluate(() => {
            return new Promise((resolve) => {
                const katexElements = document.querySelectorAll('.katex');
                if (katexElements.length > 0) setTimeout(resolve, 1500); else resolve();
            });
        });

        await page.addStyleTag({ path: path.resolve(__dirname, '../static/print.css') });

        await page.evaluate(() => {
            const elementsToHide = ['nav','.navbar','.navbar__inner','aside','.theme-doc-sidebar-container','.theme-doc-toc-desktop','.theme-doc-toc-mobile','.theme-doc-breadcrumbs','.theme-doc-footer','.theme-edit-this-page','.pagination-nav','footer','.footer','.table-of-contents','.theme-back-to-top-button','[class*="tocCollapsible"]','[class*="sidebar"]','[class*="breadcrumb"]'];
            elementsToHide.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => { el.style.display = 'none'; el.style.visibility = 'hidden'; });
            });
            const mainContainer = document.querySelector('main') || document.querySelector('article') || document.querySelector('.theme-doc-markdown');
            if (mainContainer) { mainContainer.style.maxWidth = '100%'; mainContainer.style.padding = '0'; mainContainer.style.margin = '0'; }
            document.body.style.background = '#ffffff';
            document.documentElement.style.background = '#ffffff';
            document.querySelectorAll('div, section, main, article').forEach(el => { el.style.background = 'transparent'; el.style.backgroundColor = 'transparent'; });
            document.querySelectorAll('*').forEach(el => { if (el.childNodes.length > 0) { el.style.color = '#000000'; el.style.visibility = 'visible'; el.style.opacity = '1'; } });
            document.querySelectorAll('p, li, span, div, td, th, h1, h2, h3, h4, h5, h6, a, strong, em, code').forEach(el => { el.style.color = '#000000'; el.style.visibility = 'visible'; el.style.opacity = '1'; });
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        await page.pdf({ path: outputFile, format: 'A4', printBackground: true, preferCSSPageSize: false, displayHeaderFooter: false, margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }, omitBackground: false });
        console.log(`\n✅ PDF generado exitosamente: ${outputFile}\n`);
    } catch (err) {
        console.error(`\n❌ Error exportando ${fullUrl}:`, err.message);
        throw err;
    } finally {
        await browser.close();
    }
}

const docPath = process.argv[2];
if (!docPath) { console.error('❌ Error: Debes proporcionar la ruta del documento'); console.log('\nUso:'); console.log('  node scripts/export-single-doc.js <ruta-relativa-doc>'); process.exit(1); }

exportToPdf(docPath).then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1); });
