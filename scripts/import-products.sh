#!/bin/bash
# Complete import script - exports Excel to CSV and converts to products
# Run: bash scripts/import-products.sh

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
EXCEL_FILE="$PROJECT_ROOT/Master.xlsx"
CSV_FILE="$PROJECT_ROOT/products.csv"

echo "📊 Starting product import process..."
echo ""

# Step 1: Export Excel to CSV
if [ -f "$EXCEL_FILE" ]; then
    echo "Step 1: Exporting Excel to CSV..."
    
    # Try using Python with openpyxl or xlrd
    if command -v python3 &> /dev/null; then
        python3 -c "
import sys
try:
    import pandas as pd
    df = pd.read_excel('$EXCEL_FILE')
    df.to_csv('$CSV_FILE', index=False)
    print('✅ Exported to CSV successfully')
except ImportError:
    print('❌ pandas not installed. Install with: pip install pandas openpyxl')
    sys.exit(1)
except Exception as e:
    print(f'❌ Error: {e}')
    sys.exit(1)
"
    else
        echo "❌ Python not found. Please export manually:"
        echo "   1. Open Master.xlsx in Excel/Google Sheets"
        echo "   2. File → Save As → CSV"
        echo "   3. Save as products.csv"
        exit 1
    fi
else
    echo "❌ Master.xlsx not found at $EXCEL_FILE"
    exit 1
fi

# Step 2: Convert CSV to products
if [ -f "$CSV_FILE" ]; then
    echo ""
    echo "Step 2: Converting CSV to products..."
    node "$SCRIPT_DIR/convert-csv-to-products.js"
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Import complete!"
        echo ""
        echo "Next: Update src/data/products.ts to import from products-generated.ts"
        echo "See QUICK_START.md for instructions"
    else
        echo "❌ Conversion failed"
        exit 1
    fi
else
    echo "❌ products.csv not found"
    exit 1
fi

