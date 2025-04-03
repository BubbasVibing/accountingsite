#!/usr/bin/env node

/**
 * Fix TypeScript errors by removing unused imports and declarations
 * Run this script with: node scripts/fix-ts-errors.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to fix
const filesToFix = [
  'src/pages/About/index.tsx',
  'src/pages/Services/index.tsx',
  'src/pages/ClientPortal/index.tsx'
];

// Function to fix About page
function fixAboutPage() {
  const filePath = path.join(process.cwd(), 'src/pages/About/index.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update imports to include only necessary icons
  content = content.replace(
    /import \{\s*[^}]*?\} from '@fortawesome\/free-solid-svg-icons';/s,
    `import { 
  faBuilding, 
  faHandshake, 
  faAward, 
  faClock,
  faQuoteLeft,
  faStar,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';`
  );
  
  // Remove unused animations if they exist
  content = content.replace(/const fadeIn = keyframes`[\s\S]*?`;/g, '');
  content = content.replace(/const pulse = keyframes`[\s\S]*?`;/g, '');
  content = content.replace(/const shimmer = keyframes`[\s\S]*?`;/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed About page');
}

// Function to fix Services page
function fixServicesPage() {
  const filePath = path.join(process.cwd(), 'src/pages/Services/index.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unused imports
  content = content.replace(/faArrowRight,\s*/g, '');
  
  // Remove unused animations
  content = content.replace(/const fadeIn = keyframes`[\s\S]*?`;/g, '');
  content = content.replace(/const rotateIn = keyframes`[\s\S]*?`;/g, '');
  content = content.replace(/const fadeInUp = keyframes`[\s\S]*?`;/g, '');
  content = content.replace(/const pulse = keyframes`[\s\S]*?`;/g, '');
  
  // Replace problematic commented blocks with simple stub components
  const expertiseComponentsStub = `
// Unused components defined as empty stubs
const ExpertiseCard = styled.div\`
  /* Removed unused component */
  display: none;
\`;

const ExpertiseGrid = styled.div\`
  /* Removed unused component */
  display: none;
\`;

const ExpertiseItem = styled.div\`
  /* Removed unused component */
  display: none;
\`;`;

  // Find and replace the commented out sections
  content = content.replace(/\/\*[\s\S]*?ExpertiseItem[\s\S]*?\*\//g, expertiseComponentsStub);
  
  // Fix the CSS-in-JS at the end of the file if it has syntax issues
  const cssFixRegex = /<style>[\s\S]*?<\/style>/;
  if (cssFixRegex.test(content)) {
    content = content.replace(cssFixRegex, `<style>{\`
          .animate-on-scroll {
            opacity: 0;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .animate-on-scroll.visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .business-card {
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.5s ease;
          }
          
          .business-card.visible {
            transform: translateY(0);
            opacity: 1;
          }
          
          .business-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }
        \`}</style>`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed Services page');
}

// Function to fix ClientPortal page
function fixClientPortalPage() {
  const filePath = path.join(process.cwd(), 'src/pages/ClientPortal/index.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unused icon import
  content = content.replace(/faUserCircle,\s*/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed ClientPortal page');
}

// Main function to fix all files
function fixAllFiles() {
  console.log('🔧 Fixing TypeScript errors...');
  
  fixAboutPage();
  fixServicesPage();
  fixClientPortalPage();
  
  console.log('✨ All errors fixed! Try building again.');
}

// Run the function
fixAllFiles(); 