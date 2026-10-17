@echo off
echo ========================================================
echo   Starting Shubham Verma Data Analyst Portfolio Website
echo ========================================================
echo.

echo Starting Python Backend API in background...
start "Portfolio Backend" cmd /k ".\.venv\Scripts\activate.bat && python server.py"

echo Starting Vite Frontend...
start "Portfolio Frontend" cmd /k "npm run dev"

echo.
echo ========================================================
echo   Application URLs:
echo   - Frontend: http://localhost:5173
echo   - Backend:  http://127.0.0.1:5000/api/health
echo ========================================================
echo.
pause
