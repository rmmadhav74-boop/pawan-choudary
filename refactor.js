const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const homeDir = path.join(componentsDir, 'Home');
const sharedDir = path.join(componentsDir, 'Shared');

// Create directories
if (!fs.existsSync(homeDir)) fs.mkdirSync(homeDir);
if (!fs.existsSync(sharedDir)) fs.mkdirSync(sharedDir);

const homeComponents = [
  'About', 'Campaign', 'Contact', 'Gallery', 'Hero', 'JanSamsya',
  'MediaCoverage', 'News', 'PhotoStory', 'Publications',
  'SocialImpact', 'Testimonials', 'Timeline', 'Video'
];

const sharedComponents = [
  'Navbar', 'Footer', 'UI', 'Creative'
];

// Move directories
homeComponents.forEach(c => {
  const p = path.join(componentsDir, c);
  if (fs.existsSync(p)) execSync(`mv "${p}" "${homeDir}/"`);
});

sharedComponents.forEach(c => {
  const p = path.join(componentsDir, c);
  if (fs.existsSync(p)) execSync(`mv "${p}" "${sharedDir}/"`);
});

// Update imports
function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content;
  for (const [search, replace] of replacements) {
    newContent = newContent.split(search).join(replace);
  }
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}

// 1. Pages
const pages = fs.readdirSync(path.join(srcDir, 'pages')).map(f => path.join(srcDir, 'pages', f));
pages.forEach(page => {
  replaceInFile(page, [
    ...homeComponents.map(c => [`../components/${c}/`, `../components/Home/${c}/`]),
    ...sharedComponents.map(c => [`../components/${c}/`, `../components/Shared/${c}/`]),
    [`../components/UI`, `../components/Shared/UI`]
  ]);
});

// 2. App.tsx
replaceInFile(path.join(srcDir, 'App.tsx'), [
  ...sharedComponents.map(c => [`./components/${c}/`, `./components/Shared/${c}/`])
]);

// 3. Components inside Home/ updating their relative paths to Shared/UI and images
function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      replaceInFile(p, [
        [`'../UI'`, `'../../Shared/UI'`],
        [`'../../assets`, `'../../../assets`],
        [`'../../data`, `'../../../data`]
      ]);
    }
  }
}

processDir(homeDir);

// Navbar updating image paths
replaceInFile(path.join(sharedDir, 'Navbar', 'Navbar.tsx'), [
  [`'../../assets`, `'../../../assets`],
  [`'../../data`, `'../../../data`]
]);
