@echo off
REM Simple local server for testing the site
REM Requires Python 3 (comes with Windows 10+)

echo.
echo ========================================
echo  Ricardo's Personal Site - Local Server
echo ========================================
echo.
echo Starting server at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul

REM If Python 3 failed, try Python 2
if errorlevel 1 (
    python -m SimpleHTTPServer 8000
)

REM If both failed
if errorlevel 1 (
    echo Error: Python not found!
    echo.
    echo Please install Python from https://www.python.org/downloads/
    echo Or use VS Code's Live Server extension instead.
    echo.
    pause
)
