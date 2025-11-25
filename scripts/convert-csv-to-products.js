// Script to convert CSV file to products.ts format
// Run: node scripts/convert-csv-to-products.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read CSV file
const csvPath = path.join(__dirname, '../products.csv');

if (!fs.existsSync(csvPath)) {
  console.error('❌ Error: products.csv not found');
  console.log('\n💡 Please export your Excel file to CSV format:');
  console.log('   1. Open Master.xlsx in Excel');
  console.log('   2. File → Save As → CSV (Comma delimited) (*.csv)');
  console.log('   3. Save as products.csv in the project root');
  console.log('   4. Run this script again\n');
  process.exit(1);
}

console.log('\n📊 Reading CSV file...');

try {
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    throw new Error('CSV file is empty');
  }
  
  // Parse CSV (simple parser - assumes comma-separated, quoted strings)
  const headers = parseCSVLine(lines[0]);
  console.log(`\nColumn names found:`);
  headers.forEach((col, idx) => {
    console.log(`  ${idx + 1}. ${col}`);
  });
  
  // Find column indices
  const nameColIdx = headers.findIndex(col => 
    col.toLowerCase().includes('name') || 
    col.toLowerCase().includes('product') ||
    col.toLowerCase().includes('item')
  ) || 0;
  
  const descriptionColIdx = headers.findIndex(col => 
    col.toLowerCase().includes('description') || 
    col.toLowerCase().includes('detail') ||
    col.toLowerCase().includes('about')
  ) || (headers.length > 1 ? 1 : 0);
  
  const categoryColIdx = headers.findIndex(col => 
    col.toLowerCase().includes('category') || 
    col.toLowerCase().includes('type') ||
    col.toLowerCase().includes('group')
  );
  
  console.log(`\n📝 Using columns:`);
  console.log(`  Product Name: ${headers[nameColIdx]}`);
  console.log(`  Description: ${headers[descriptionColIdx]}`);
  if (categoryColIdx >= 0) {
    console.log(`  Category: ${headers[categoryColIdx]}`);
  }
  
  // Parse data rows
  const products = [];
  const categoryCounts = {};
  
  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVLine(lines[i]);
    
    if (row.length === 0 || !row[nameColIdx] || row[nameColIdx].trim() === '') {
      continue; // Skip empty rows
    }
    
    const productName = row[nameColIdx].trim();
    const description = (row[descriptionColIdx] || '').trim() || productName;
    const category = categoryColIdx >= 0 && row[categoryColIdx] 
      ? getCategory(row[categoryColIdx], productName)
      : getCategory('', productName);
    
    const slug = createSlug(productName);
    const id = slug || `product-${i}`;
    
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    
    products.push({
      id,
      name: productName,
      slug,
      category,
      description
    });
  }
  
  console.log(`\n✅ Converted ${products.length} products`);
  console.log(`\n📊 Categories distribution:`);
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count} products`);
  });
  
  // Generate TypeScript file
  const tsContent = `// Product data imported from products.csv
// Auto-generated on ${new Date().toISOString()}
// Total products: ${products.length}

import type { Product, ProductCategory } from './product-types';

export const allProducts: Product[] = ${JSON.stringify(products, null, 2)};

// Popular products for homepage (first 6)
export const popularProducts: Product[] = allProducts.slice(0, 6).map(p => ({
  ...p,
  popular: true
}));

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};
`;
  
  // Write to file
  const outputPath = path.join(__dirname, '../src/data/products-generated.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  
  console.log(`\n✅ Generated TypeScript file: ${outputPath}`);
  console.log(`\n⚠️  Next steps:`);
  console.log(`   1. Review src/data/products-generated.ts`);
  console.log(`   2. Update product categories if needed`);
  console.log(`   3. Mark your top products with popular: true`);
  console.log(`   4. The file will be automatically imported in products.ts`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

// Simple CSV line parser
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  
  return result;
}

// Function to create slug from product name
function createSlug(name) {
  if (!name || typeof name !== 'string') return '';
  return name
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Function to determine category
function getCategory(categoryName, productName) {
  const searchText = ((categoryName || '') + ' ' + (productName || '')).toLowerCase();
  
  // Map to one of the 7 categories
  if (searchText.includes('intermediate')) {
    return 'Dyes Intermediates';
  }
  if (searchText.includes('auxiliar')) {
    return 'Textile Auxiliaries';
  }
  if (searchText.includes('processing') || (searchText.includes('chemical') && !searchText.includes('special'))) {
    return 'Processing Chemicals';
  }
  if (searchText.includes('special')) {
    return 'Speciality Chemicals';
  }
  if (searchText.includes('solvent')) {
    return 'Solvents';
  }
  if (searchText.includes('salt') || searchText.includes('mineral') || searchText.includes('sulfate') || searchText.includes('chloride')) {
    return 'Minerals / Salts';
  }
  if (searchText.includes('dye') || searchText.includes('color') || searchText.includes('pigment')) {
    return 'Dyes';
  }
  
  // Default category
  return 'Dyes';
}

