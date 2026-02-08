#!/bin/bash
# Simple local server for testing the site
# Works on Mac/Linux

echo ""
echo "========================================"
echo " Ricardo's Personal Site - Local Server"
echo "========================================"
echo ""
echo "Starting server at http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3 first, fall back to Python 2
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python not found!"
    echo ""
    echo "Please install Python or use another method:"
    echo "  - VS Code Live Server extension"
    echo "  - PHP: php -S localhost:8000"
    echo ""
    exit 1
fi
