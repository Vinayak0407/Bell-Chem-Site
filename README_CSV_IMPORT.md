# CSV Import Guide - Quick Start

## 🚀 3 Simple Steps to Import All Products

### Step 1: Export Excel to CSV
1. Open `Master.xlsx` in Microsoft Excel
2. Click **File** → **Save As** (or press **F12**)
3. In the "Save as type" dropdown, select **"CSV (Comma delimited) (*.csv)"**
4. Save as `products.csv` in the project root folder (same folder as Master.xlsx)
5. Click **Save**
6. If Excel warns about formatting, click **Yes** to continue

### Step 2: Run Conversion Script
Open terminal/command prompt in the project folder and run:
```bash
node scripts/convert-csv-to-products.js
```

This will:
- ✅ Read your CSV file
- ✅ Convert all 600+ products to the correct format
- ✅ Assign categories automatically
- ✅ Create product slugs for URLs
- ✅ Generate `src/data/products-generated.ts`

### Step 3: Restart Development Server
If your dev server is running, restart it:
```bash
npm run dev
```

**That's it!** All your products will now be:
- ✅ Searchable on the Products page
- ✅ Filterable by category
- ✅ Accessible via individual product pages
- ✅ Displayed on the homepage (top 6)

---

## 📊 What Happens During Conversion

The script will:
1. **Read your CSV** and detect column names
2. **Find product name column** (looks for "name", "product", or "item" in header)
3. **Find description column** (looks for "description", "detail", or "about")
4. **Auto-categorize products** based on name and description keywords:
   - **Dyes** - Contains "dye", "color", "pigment"
   - **Dyes Intermediates** - Contains "intermediate"
   - **Textile Auxiliaries** - Contains "auxiliar"
   - **Processing Chemicals** - Contains "processing" or "chemical"
   - **Speciality Chemicals** - Contains "special"
   - **Solvents** - Contains "solvent"
   - **Minerals / Salts** - Contains "salt", "mineral", "sulfate", "chloride"
5. **Create URL slugs** from product names (e.g., "Reactive Blue 220" → "reactive-blue-220")
6. **Generate TypeScript file** with all products

---

## 🔍 Verification

After running the script, check:
1. Look for output like:
   ```
   ✅ Converted 600+ products
   📊 Categories distribution:
      Dyes: 200 products
      Textile Auxiliaries: 150 products
      ...
   ```
2. Open `src/data/products-generated.ts` - should contain all products
3. Start your dev server and visit the Products page
4. Try searching for products
5. Check category filters work

---

## ⚠️ Troubleshooting

### Script says "products.csv not found"
- Make sure CSV file is in the project root folder
- Check the filename is exactly `products.csv` (not `products.csv.csv`)

### Products show 0 results
- Check `src/data/products-generated.ts` exists
- Verify it contains product data
- Restart your dev server

### Wrong categories assigned
- Categories are auto-assigned based on keywords
- You can manually edit `src/data/products-generated.ts` after generation
- Categories must exactly match: "Dyes", "Dyes Intermediates", "Textile Auxiliaries", etc.

### CSV encoding issues
- Open CSV in Notepad
- File → Save As → Encoding: **UTF-8**
- Save as `products.csv`

---

## 📝 CSV Format Requirements

Your CSV should have:
- **First row**: Column headers (e.g., "Product Name", "Description", "Category")
- **Subsequent rows**: Product data
- **Required columns**: Product Name (or similar)
- **Optional columns**: Description, Category

Example:
```csv
Product Name,Description,Category
Reactive Blue 220,High-quality reactive dye,Dyes
Guar Gum,Natural thickening agent,Textile Auxiliaries
```

---

## 🎯 Next Steps After Import

1. **Review categories** - Check if auto-categorization is correct
2. **Mark popular products** - Edit `src/data/products-generated.ts` and add `popular: true` to top 6 products
3. **Test search** - Try searching for various products
4. **Test filters** - Click category filters to verify
5. **Check product pages** - Click on products to view detail pages

---

## 💡 Tips

- **Top products**: First 6 products are automatically marked as popular for homepage
- **Categories**: You can manually adjust categories in the generated file
- **Slugs**: Product slugs are auto-generated from names (URL-friendly)
- **Re-running**: If you update CSV, just run the conversion script again

---

Need help? Check `EXPORT_TO_CSV_INSTRUCTIONS.md` for detailed Excel export instructions.

