const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create the out directory if it doesn't exist
if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

// Copy public directory to out
if (fs.existsSync('public')) {
  execSync('xcopy public out /E /I /H /Y');
  console.log('Copied public directory to out');
}

// Create a simple index.html in the out directory
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sanchit Sood - Portfolio</title>
  <meta name="description" content="Sanchit Sood's portfolio showcasing projects in software engineering, data science, AI and machine learning.">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #0f172a;
      color: #e2e8f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      max-width: 600px;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .message {
      background-color: #1e293b;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .links {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
    .links a {
      color: #3b82f6;
      text-decoration: none;
    }
    .links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Sanchit Sood</h1>
  <div class="message">
    <p>Portfolio site is being deployed. Please check back soon!</p>
    <p>I'm always open to discussing software engineering, data science projects, hackathon collaborations, or opportunities in the field of AI and machine learning.</p>
  </div>
  <div class="links">
    <a href="https://github.com/sanchitsood02" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/sanchit-sood-a3b2a0201/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join('out', 'index.html'), indexHtml);
console.log('Created index.html in out directory');

// Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
fs.writeFileSync(path.join('out', '.nojekyll'), '');
console.log('Created .nojekyll file');

console.log('Build completed successfully!');