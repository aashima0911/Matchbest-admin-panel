const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const textExtensions = ['.js', '.jsx', '.mdx', '.json', '.txt', '.md', '.mjs', '.ts', '.tsx'];

const allFiles = getAllFiles('.');

allFiles.forEach(file => {
  const ext = path.extname(file);
  if (textExtensions.includes(ext)) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const words = content.trim().split(/\s+/);
      const wordCount = words.length;
      if (wordCount < 10) {
        console.log(`${file}: ${wordCount}`);
      }
    } catch (err) {
      // Skip files that can't be read
    }
  }
});
