# Next.js Deployment Guide for GitHub Pages

[![Deploy Next.js site to Pages](https://github.com/sanchitsood02/Portfolio/actions/workflows/nextjs.yml/badge.svg)](https://github.com/sanchitsood02/Portfolio/actions/workflows/nextjs.yml)

This guide provides step-by-step instructions for deploying a Next.js project on GitHub Pages using GitHub Actions, based on the implementation in this portfolio project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Project Setup](#step-1-project-setup)
- [Step 2: Configuration](#step-2-configuration)
- [Step 3: GitHub Actions Setup](#step-3-github-actions-setup)
- [Step 4: Monitoring Deployment](#step-4-monitoring-deployment)
- [Step 5: Verification](#step-5-verification)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- A Next.js project
- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Project Setup

1. Create a new GitHub repository for your Next.js project
2. Initialize your local project with Git (if not already done)
3. Connect your local repository to the GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Step 2: Configuration

### Next.js Configuration

1. Create or update your `next.config.js` or `next.config.ts` file with the following settings:

```javascript
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/your-repo-name', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
```

### Package.json Scripts

Update your `package.json` to include a GitHub Pages build script:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "build:github": "node build.js"
}
```

### Cross-Platform Build Script

Create a `build.js` file in your project root to handle the build process:

```javascript
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { copySync, ensureDirSync } = require('fs-extra');

// Create the out directory if it doesn't exist
ensureDirSync('out');

// Copy public directory to out using cross-platform method
if (fs.existsSync('public')) {
  try {
    // Use fs-extra's copySync for cross-platform copying
    copySync('public', 'out', { overwrite: true });
    console.log('Copied public directory to out');
  } catch (err) {
    console.error('Error copying public directory:', err);
  }
}

// Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
fs.writeFileSync(path.join('out', '.nojekyll'), '');
console.log('Created .nojekyll file');

console.log('Build completed successfully!');
```

Install the required dependency:

```bash
npm install fs-extra --save-dev
```

## Step 3: GitHub Actions Setup

1. Create a `.github/workflows` directory in your project if it doesn't exist
2. Create a file named `nextjs.yml` in this directory with the following content:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build:github
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Commit and push these changes to your GitHub repository:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

## Step 4: Monitoring Deployment

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see your workflow running or completed
4. Click on the workflow to see detailed logs and progress

## Step 5: Verification

1. Once the workflow completes successfully, go to the "Settings" tab of your repository
2. Scroll down to the "GitHub Pages" section
3. You should see a message indicating your site is published
4. Click on the provided URL to view your deployed Next.js application

## Cross-Platform Build Script

To ensure the build script works on both Windows and Linux environments (including GitHub Actions runners), we use `fs-extra` instead of platform-specific commands like `xcopy`:

1. Install fs-extra:

```bash
npm install fs-extra --save-dev
npm install @types/fs-extra --save-dev  # If using TypeScript
```

2. Update your build script (build.js) to use fs-extra for file operations:

```javascript
const { execSync } = require('child_process');
const fs = require('fs-extra');  // Use fs-extra instead of fs
const path = require('path');

// Create the out directory if it doesn't exist
if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

// Copy public directory to out using fs-extra's cross-platform method
if (fs.existsSync('public')) {
  fs.copySync('public', 'out', { overwrite: true });
  console.log('Copied public directory to out');
}

// Rest of your build script...
```

This approach ensures your build process works consistently across different operating systems.

## Troubleshooting

### 404 Errors

If you encounter 404 errors:

1. Ensure your `basePath` in `next.config.js` matches your repository name
2. Check that the `.nojekyll` file is being created in the `out` directory
3. Verify that your GitHub Pages settings are pointing to the correct branch and directory

### Build Errors

If the build fails:

1. Check the GitHub Actions logs for specific error messages
2. Ensure all dependencies are properly installed
3. Verify that your `build.js` script is compatible with the GitHub Actions environment

### Cross-Platform Issues

If you encounter issues with file paths or commands:

1. Use cross-platform libraries like `fs-extra` instead of OS-specific commands
2. Use `path.join()` for file paths to ensure compatibility across operating systems

---

This guide is based on the implementation in this portfolio project. Feel free to adapt it to your specific needs.