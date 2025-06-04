const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'getnames');
const exts = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

const files = fs.readdirSync(dir)
  .filter(file => exts.includes(path.extname(file).toLowerCase()));

console.log('const gotnames = [');
files.forEach(f => {
  console.log(`  "ui_images/${f}",`);
});
console.log('];');