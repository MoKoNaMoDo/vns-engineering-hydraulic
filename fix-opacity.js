const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const files = [];
walkDir('e:/GGGithub/vns-engineering-hydraulic/components/products', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    files.push(filePath);
  }
});

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // We look for the button class and the style attribute together.
  // We'll just replace the button className ending with active:scale-95" with active:scale-95 animate-fade-scale"
  // IF the style block has opacity: 0
  
  if (content.includes('style={{ animationDelay: \'0.4s\', opacity: 0 }}') || content.includes('style={{ animationDelay: "0.4s", opacity: 0 }}')) {
      if (content.includes('active:scale-95" style={{ animationDelay: \'0.4s\', opacity: 0 }}')) {
          content = content.replace('active:scale-95" style={{ animationDelay: \'0.4s\', opacity: 0 }}', 'active:scale-95 animate-fade-scale" style={{ animationDelay: \'0.4s\', opacity: 0 }}');
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Fixed opacity bug in: ${file}`);
      } else if (content.includes('active:scale-95" style={{ animationDelay: "0.4s", opacity: 0 }}')) {
          content = content.replace('active:scale-95" style={{ animationDelay: "0.4s", opacity: 0 }}', 'active:scale-95 animate-fade-scale" style={{ animationDelay: "0.4s", opacity: 0 }}');
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Fixed opacity bug in: ${file}`);
      } else if (content.includes('opacity: 0')) {
          console.log(`Needs manual review: ${file}`);
      }
  }
}
