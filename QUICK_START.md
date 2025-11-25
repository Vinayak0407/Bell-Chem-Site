# 🚀 Quick Start - Import Products from Excel

## Export Excel to CSV (1 minute)

1. Open `Master.xlsx` in Excel
2. **File** → **Save As**
3. Choose **CSV (Comma delimited) (*.csv)**
4. Save as `products.csv` in project root
5. Click **Save** → **Yes** (if asked about formatting)

## Convert CSV to Products (30 seconds)

Run this command in terminal:
```bash
node scripts/convert-csv-to-products.js
```

You should see:
```
✅ Converted 600+ products
📊 Categories distribution:
   Dyes: 200 products
   ...
```

## Enable Products in Code (10 seconds)

Open `src/data/products.ts` and:

**Find this section (around line 67-77):**
```typescript
// Temporary empty arrays - will be replaced after CSV conversion
export const popularProducts: Product[] = [];
export const allProducts: Product[] = [];
```

**Replace with:**
```typescript
import { allProducts as generatedProducts, popularProducts as generatedPopularProducts } from './products-generated';
export const allProducts: Product[] = generatedProducts;
export const popularProducts: Product[] = generatedPopularProducts;
```

## Done! ✅

All 600+ products are now:
- ✅ Searchable
- ✅ Filterable by category
- ✅ Visible on product pages
- ✅ Available on homepage (top 6)

**Restart your dev server** if it's running, then visit the Products page!

