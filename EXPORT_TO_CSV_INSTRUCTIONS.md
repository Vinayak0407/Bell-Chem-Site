# Export Excel to CSV Instructions

## Quick Steps

1. **Open Master.xlsx** in Microsoft Excel
2. **Click File** → **Save As** (or press F12)
3. **Choose location**: Save in the project root (same folder as Master.xlsx)
4. **Select format**: Choose "CSV (Comma delimited) (*.csv)"
5. **File name**: Type `products.csv`
6. **Click Save**
7. **If prompted about formatting**: Click "Yes" to save as CSV

## After Exporting

Run the conversion script:
```bash
node scripts/convert-csv-to-products.js
```

This will:
- Read the CSV file
- Convert all products to the correct format
- Generate `src/data/products-generated.ts`
- All products will be automatically available in the search

## Troubleshooting

### If Excel doesn't show CSV option:
- Try: File → Save As → Change file type to "CSV UTF-8 (Comma delimited)"
- Or use Google Sheets: Upload Excel, then File → Download → CSV

### If CSV has encoding issues:
- Open CSV in Notepad
- File → Save As → Encoding: UTF-8
- Save as `products.csv`

### Manual CSV Creation:
If needed, you can manually create a CSV with these columns:
```
Product Name,Description,Category
```

First row = headers
Each subsequent row = one product

