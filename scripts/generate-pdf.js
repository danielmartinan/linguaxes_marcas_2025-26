const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

// Rutas base
const docsDir = path.resolve(__dirname, '../docs');
const outputDir = path.resolve(__dirname, '../static/pdfs');

// 🔄 Crear carpeta de salida limpia
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

// 🧹 Sanitiza una parte del path (solo carpetas y archivos dentro del proyecto)
function cleanPath(p) {
  return p
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')    // Elimina tildes
    .replace(/[^\w\-\/\\]/g, '_')       // Reemplaza caracteres no válidos por "_"
    .replace(/ /g, '_');                // Reemplaza espacios por "_"
}


// 📄 Convertir un archivo markdown a PDF
async function convertMarkdownToPdf(inputPath, relativePath = '') {
  const stat = fs.statSync(inputPath);

  if (stat.isDirectory()) {
    const files = fs.readdirSync(inputPath);
    for (const file of files) {
      await convertMarkdownToPdf(
        path.join(inputPath, file),
        path.join(relativePath, file)
      );
    }
  } else if (/\.(md|mdx)$/.test(inputPath)) {
    const ext = path.extname(relativePath);
    const relativeWithoutExt = relativePath.slice(0, -ext.length);

    const cleanRelativePath = cleanPath(relativeWithoutExt);
    const outputFile = path.resolve(outputDir, cleanRelativePath + '.pdf');
    const outputFolder = path.dirname(outputFile);

    fs.mkdirSync(outputFolder, { recursive: true });

    console.log(`📄 Exportando: ${relativePath} → ${outputFile}`);

    const markdownContent = fs.readFileSync(inputPath, 'utf-8');
    const cleanedContent = markdownContent
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, '')        // quita tildes combinadas
      .replace(/[\u00A0-\uFFFF]/g, '')        // quita todos los caracteres no ASCII
      .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '') // elimina invisibles, emojis, etc.

    await mdToPdf(
      {
        content: cleanedContent,
        baseDir: path.dirname(inputPath),
      },
      {
        dest: outputFile,
      }
    );
  }
}

// 🚀 Ejecutar
convertMarkdownToPdf(docsDir)
  .then(() => console.log('\n✅ ¡PDFs generados con éxito!\n'))
  .catch(err => console.error('❌ Error generando PDFs:', err));
