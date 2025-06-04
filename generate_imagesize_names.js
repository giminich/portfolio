const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'getnames');
const exts = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function hasDimensionPrefix(filename) {
  return /^\d{1,4}x\d{1,4}/.test(filename);
}

async function processAndRenameImages() {
  const files = fs.readdirSync(dir)
    .filter(file => exts.includes(path.extname(file).toLowerCase()));

  const output = [];

  for (const file of files) {
    const oldPath = path.join(dir, file);

    if (hasDimensionPrefix(file)) {
      output.push(`ui_images/${file}`);
      continue;
    }

    try {
      const { width, height } = await sharp(oldPath).metadata();
      const newName = `${width}x${height} ${file}`;
      const newPath = path.join(dir, newName);

      // Rename the file on disk
      fs.renameSync(oldPath, newPath);

      output.push(`ui_images/${newName}`);
    } catch (err) {
      console.error(`Error processing "${file}":`, err);
    }
  }

  return output;
}

processAndRenameImages().then(imageList => {
  console.log('const pixelImages = [');
  imageList.forEach(f => console.log(`  "${f}",`));
  console.log('];');
});