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
  
  if (!content.includes('รายละเอียดสินค้า')) continue;

  // Skip the one we already manually updated
  if (content.includes('animate-bounce') && content.includes('window.scrollBy')) continue;
  if (content.includes('animate-bounce') && content.includes('scrollIntoView')) continue;

  const regex1 = /<div className="absolute -top-6 inset-x-0 flex justify-center z-10 whitespace-nowrap[^"]*"(.*?)>\s*<div className="rounded-xl bg-white px-([68]) py-2 text-xl font-black[^"]*">\s*รายละเอียดสินค้า\s*<\/div>\s*<\/div>/s;
  const regex2 = /<div className="absolute -top-6 left-1\/2 z-10 -translate-x-1\/2 whitespace-nowrap[^"]*"(.*?)>\s*<div className="rounded-xl bg-white px-([68]) py-2 text-xl font-black[^"]*">\s*รายละเอียดสินค้า\s*<\/div>\s*<\/div>/s;

  let match1 = content.match(regex1);
  let match2 = content.match(regex2);

  let match = match1 || match2;
  let usedRegex = match1 ? regex1 : regex2;
  let typeClass = match1 ? "inset-x-0 flex justify-center" : "left-1/2 -translate-x-1/2";

  if (match) {
    const extraStyle = match[1] || "";
    const pxValue = match[2];

    const replacement = `<button 
                onClick={() => {
                  window.scrollBy({ top: 500, behavior: "smooth" });
                }}
                className="absolute -top-6 ${typeClass} z-10 whitespace-nowrap group transition-all duration-300 hover:scale-110 active:scale-95"${extraStyle}
              >
                <div className="flex items-center gap-2 rounded-xl bg-white px-${pxValue} py-2 text-xl font-black shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-[#af0000]/20 group-hover:bg-zinc-50 transition-colors">
                  รายละเอียดสินค้า
                  <svg 
                    className="w-5 h-5 text-[#af0000] animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>`;
    
    content = content.replace(usedRegex, replacement);

    if (!content.includes("'use client'") && !content.includes('"use client"')) {
      content = "'use client';\n\n" + content;
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  } else {
      console.log(`Could not match badge pattern in: ${file}`);
  }
}
