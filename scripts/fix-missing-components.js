#!/usr/bin/env node

/**
 * Fix missing components in the Services page
 * Run this script with: node scripts/fix-missing-components.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix Services page
function fixServicesPage() {
  const filePath = path.join(process.cwd(), 'src/pages/Services/index.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add missing components - insert them right before the Services component definition
  const missingComponents = `
// Missing business components
const BusinessContent = styled.div\`
  padding: 2rem 0;
\`;

const BusinessHeader = styled.div\`
  text-align: center;
  margin-bottom: 3rem;
\`;

const BusinessTabsContainer = styled.div\`
  margin: 2rem 0 3rem;
\`;

const TabsWrapper = styled.div\`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
\`;

const TabButton = styled.button<{ isActive: boolean }>\`
  background: \${props => props.isActive ? theme.colors.primary : 'white'};
  color: \${props => props.isActive ? 'white' : theme.colors.primary};
  border: 2px solid \${theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
\`;

const TabContent = styled.div\`
  background: white;
  border-radius: 16px;
  padding: 3rem;
\`;

const TabContentGrid = styled.div\`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
\`;

const TabContentImageWrapper = styled.div\`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
\`;

const TabContentInfo = styled.div\`
  // Content info styles
\`;

const BenefitsList = styled.ul\`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
\`;

const BenefitItem = styled.li\`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
\`;

// Translation components
const TranslationServiceBlock = styled(ServiceBlock)\`
  background: white;
\`;

const TranslationGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
\`;

const TranslationCard = styled.div\`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
\`;

// Immigration components
const ImmigrationButton = styled.div\`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
  padding-left: 2.5rem;
\`;

// Replace DetailContent if it's missing
const DetailContent = styled.div\`
  padding: 1.8rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  max-width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.5rem;
    color: \${theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    color: \${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.2rem;
    margin-bottom: 1.2rem;
  }
  
  .detail-icon {
    font-size: 2.2rem;
    color: \${theme.colors.secondary};
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }
  
  .detail-cta {
    margin-top: 1rem;
    display: inline-block;
    align-self: flex-start;
  }
\`;
`;

  // Find the Services component definition
  const servicesComponentRegex = /const Services = \(\) => \{/;
  if (servicesComponentRegex.test(content)) {
    // Insert the missing components right before the Services component definition
    content = content.replace(servicesComponentRegex, `${missingComponents}\n\nconst Services = () => {`);
  }
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed missing components in Services page');
}

// Main function
function fixAll() {
  console.log('🔧 Adding missing components...');
  
  fixServicesPage();
  
  console.log('✨ All components added! Try building again.');
}

// Run the function
fixAll(); 