const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'http://localhost:3000/docs/contornos-desenvolvemento/UD1%20-%20Introducci%C3%B3n%20al%20desarrollo%20de%20software/ud1_2_lenguajes_programacion_algoritmos';

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'static/pdfs/ud1_2_lenguajes_programacion_algoritmos_full.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
})();
