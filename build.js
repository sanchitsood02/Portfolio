const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

try {
  console.log('Building Next.js application...');
  
  // Run the Next.js build command
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Next.js build completed successfully!');
  
  // Create .nojekyll file for GitHub Pages
  if (!fs.existsSync('out')) {
    console.error('Error: out directory not found after build');
    process.exit(1);
  }
  
  fs.writeFileSync(path.join('out', '.nojekyll'), '');
  console.log('Created .nojekyll file');
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}