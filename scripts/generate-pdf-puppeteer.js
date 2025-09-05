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

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    const files = getAllMarkdownFiles(docsDir);
    for (const file of files) {
        const withoutExt = file.replace(/\.(md|mdx)$/, '');
        const urlPath = '/docs/' + withoutExt.replace(/\\/g, '/');
        const sanitizedPath = sanitizeForFs(withoutExt);
        const outputFile = path.join(outputBase, sanitizedPath + '.pdf');

        fs.mkdirSync(path.dirname(outputFile), { recursive: true });

        const fullUrl = `${BASE_URL}${urlPath}`;
        console.log(`📄 Exportando: ${fullUrl} → ${outputFile}`);

        try {
            await page.goto(fullUrl, { waitUntil: 'networkidle0', timeout: 30000 });

            // Espera a que todas las imágenes estén completamente cargadas
            await page.evaluate(async () => {
                const images = Array.from(document.images);
                await Promise.all(images.map(img => {
                    if (img.complete) return Promise.resolve();
                    return new Promise(resolve => {
                        const timeout = setTimeout(resolve, 3000); // Máximo 3s por imagen
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


            await page.addStyleTag({ path: path.resolve(__dirname, '../static/print.css') });

            await page.pdf({
                path: outputFile,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '20mm',
                    bottom: '20mm',
                    left: '15mm',
                    right: '15mm'
                },
            });
        } catch (err) {
            console.error(`❌ Error exportando ${fullUrl}:`, err.message);
        }
    }

    await browser.close();
    console.log('\n✅ ¡PDFs generados con éxito para todos los documentos!\n');
})();
