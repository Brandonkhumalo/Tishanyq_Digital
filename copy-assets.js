#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the client first
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

// Check if the source directory exists
const sourceDir = path.resolve('dist', 'public');
const targetDir = path.resolve('server', 'public');

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

// Remove target directory if it exists
if (fs.existsSync(targetDir)) {
  console.log('Removing existing server/public directory...');
  fs.rmSync(targetDir, { recursive: true, force: true });
}

// Copy the built files to the server directory
console.log('Copying built assets to server/public...');
fs.cpSync(sourceDir, targetDir, { recursive: true });

console.log('✅ Static assets successfully copied to server/public');

// Build the server
console.log('Building server...');
execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('✅ Build completed successfully!');