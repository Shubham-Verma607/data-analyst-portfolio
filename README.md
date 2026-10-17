# Shubham Verma — Premium Data Analyst & BI Specialist Portfolio

A production-ready, highly interactive personal portfolio website and data storytelling platform engineered for **Shubham Verma** (Data Analyst & Business Intelligence Specialist).

Built with **React 19 + Vite + Tailwind CSS v4** on the frontend and an isolated **Python Flask** service on the backend for secure message processing, rate limiting, and analytics telemetry.

---

## Architecture & Features

1. **Recruiter-Focused 30-Second Snapshot**: Instant executive scan summarizing target roles, verified core competencies, key metrics, and education/certifications.
2. **Interactive Hero Visual**: Floating analytics cockpit with live KPI cards, time-series sparklines, and channel filters.
3. **Categorized Evidence-Based Skills**: Real project usage context with executable DAX, SQL PIVOT, and Pandas code samples.
4. **Verified Case Studies**: Deep-dives into **Retail Sales Intelligence Dashboard** (Power BI star-schema dimensional model) and **Blinkit Quick-Commerce Analytics** (SQL data cleansing and PIVOT matrix).
5. **Analytics Playground**: Live interactive KPI simulator (adjust footfall, conversion, AOV, margin) and a real-time SQL Query Runner.
6. **Command Palette (`Ctrl + K` / `Cmd + K`)**: Instant keyboard search and navigation across all sections, projects, and actions.
7. **Verified Certifications**: Modal inspection for Skill India & NSDC Power BI, Skill Course Power BI, Kaggle Advanced SQL, Skill Course SQL, and TCS iON AI Foundation.
8. **Interactive Resume Dossier**: In-browser viewer with one-click PDF download and plain-text copy.
9. **Dark / Light / System Theme**: Fully responsive with custom desktop cursor and reduced-motion support.

---

## Local Development Setup (Strictly Local — No Global Dependencies)

This project strictly adheres to **local dependency isolation**. Nothing is installed globally.

### 1. Frontend Setup (Node.js)

```powershell
# Install project-local dependencies
npm install

# Start Vite local development server
npm run dev
```

The frontend will be available at `http://localhost:5173`.

### 2. Backend Setup (Python Virtual Environment)

A dedicated virtual environment is configured at `.venv`:

```powershell
# In PowerShell:
.\.venv\Scripts\Activate.ps1

# (Or Command Prompt: .venv\Scripts\activate.bat)

# Run the Flask backend API:
python server.py
```

The backend API will start on `http://127.0.0.1:5000` with the following endpoints:

* `GET /api/health` — Health check and storage status
* `POST /api/contact` — Secure contact form handler with rate limiting
* `GET /api/analytics/kpis` — Live portfolio analytics telemetry

### 3. Environment Configuration

Copy `.env.example` to `.env` to customize backend settings if needed:

```powershell
cp .env.example .env
```

---

## Production Build

```powershell
npm run build
```

Production static assets will be compiled to `dist/`.

---

## Clean Environment Verification

* **Python Interpreter**: `D:\Downloads\portfolio\.venv\Scripts\python.exe`
* **Python Pip**: `D:\Downloads\portfolio\.venv\Lib\site-packages\pip`
* **Global Python packages**: No project packages installed globally.
* **Global npm packages**: No project packages installed globally.
