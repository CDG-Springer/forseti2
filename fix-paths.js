const fs = require('fs');
const path = require('path');

function fixPathsInFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Arquivo não encontrado: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Substituir caminhos absolutos por relativos
  content = content.replace(/href="\//g, 'href="./');
  content = content.replace(/src="\//g, 'src="./');
  
  // Corrigir também caminhos em scripts e outros atributos
  content = content.replace(/url\(\//g, 'url(./');
  content = content.replace(/url\("\/\//g, 'url("./');
  content = content.replace(/url\('\/\//g, "url('./");
  
  // Corrigir caminhos em JavaScript inline
  content = content.replace(/\/_next\//g, './_next/');
  content = content.replace(/\/imagens\//g, './imagens/');
  content = content.replace(/\/parallax\//g, './parallax/');
  content = content.replace(/\/catalogo\//g, './catalogo/');
  content = content.replace(/\/logo\.png/g, './logo.png');
  content = content.replace(/\/favicon\.ico/g, './favicon.ico');
  
  // Corrigir caminhos que começam com ../
  content = content.replace(/\.\.\/_next\//g, './_next/');
  content = content.replace(/\.\.\/imagens\//g, './imagens/');
  content = content.replace(/\.\.\/parallax\//g, './parallax/');
  content = content.replace(/\.\.\/catalogo\//g, './catalogo/');
  content = content.replace(/\.\.\/logo\.png/g, './logo.png');
  content = content.replace(/\.\.\/favicon\.ico/g, './favicon.ico');
  
  // Corrigir todos os caminhos que começam com ../
  content = content.replace(/\.\.\//g, './');
  
  fs.writeFileSync(filePath, content);
  console.log(`Caminhos corrigidos em: ${path.basename(filePath)}`);
}

// Corrigir index.html
fixPathsInFile(path.join(__dirname, 'out', 'index.html'));

// Corrigir 404.html
fixPathsInFile(path.join(__dirname, 'out', '404.html'));

// Corrigir arquivos CSS se existirem
const cssDir = path.join(__dirname, 'out', '_next', 'static', 'css');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir);
  cssFiles.forEach(file => {
    if (file.endsWith('.css')) {
      fixPathsInFile(path.join(cssDir, file));
    }
  });
}

console.log('Correção de caminhos concluída!');
