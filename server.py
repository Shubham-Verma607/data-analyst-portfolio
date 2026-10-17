"""
Portfolio Backend API Service
Candidate: Shubham Verma (Data Analyst & BI Specialist)

Features:
- Secure contact form submission with sanitization and validation
- Sliding-window in-memory rate limiting to prevent spam
- Local persistent storage of inquiries in data/contact_messages.json
- Health check and telemetry endpoints
"""

import os
import json
import re
import html
import time
from datetime import datetime, timezone
from collections import defaultdict
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load local environment configuration
load_dotenv()

app = Flask(__name__)

# Configure CORS
allowed_origins = os.getenv("CORS_ORIGINS", "*").split(",")
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

# Configuration
STORAGE_FILE = os.path.join(os.path.dirname(__file__), "data", "contact_messages.json")
MAX_REQUESTS_PER_MINUTE = int(os.getenv("MAX_REQUESTS_PER_MINUTE", 10))
RATE_LIMIT_STORE = defaultdict(list)

# Ensure data directory exists
os.makedirs(os.path.dirname(STORAGE_FILE), exist_ok=True)
if not os.path.exists(STORAGE_FILE):
    with open(STORAGE_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)


def is_rate_limited(ip_address: str) -> bool:
    """Simple sliding-window in-memory rate limiter."""
    now = time.time()
    window = now - 60.0
    timestamps = [t for t in RATE_LIMIT_STORE[ip_address] if t > window]
    RATE_LIMIT_STORE[ip_address] = timestamps

    if len(timestamps) >= MAX_REQUESTS_PER_MINUTE:
        return True

    RATE_LIMIT_STORE[ip_address].append(now)
    return False


@app.route("/", methods=["GET"])
def index():
    return jsonify({
        "service": "Shubham Verma Portfolio API",
        "status": "operational",
        "version": "1.0.0",
        "documentation": {
            "GET /api/health": "Health and telemetry status",
            "POST /api/contact": "Submit verified contact message",
            "GET /api/analytics/kpis": "Real-time portfolio metrics rollup"
        }
    }), 200


@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "storage": "connected" if os.path.exists(STORAGE_FILE) else "missing",
        "environment": os.getenv("FLASK_ENV", "production")
    }), 200


@app.route("/api/contact", methods=["POST"])
def submit_contact():
    client_ip = request.remote_addr or "127.0.0.1"

    # Rate limiting check
    if is_rate_limited(client_ip):
        return jsonify({
            "error": "Too Many Requests",
            "message": "Submission rate limit exceeded. Please wait a minute before retrying."
        }), 429

    payload = request.get_json(silent=True)
    if not payload:
        return jsonify({
            "error": "Bad Request",
            "message": "Invalid or missing JSON payload"
        }), 400

    # Extract fields
    name = (payload.get("name") or "").strip()
    email = (payload.get("email") or "").strip().lower()
    subject = (payload.get("subject") or "").strip()
    message = (payload.get("message") or "").strip()
    company = (payload.get("company") or "").strip()
    role = (payload.get("role") or "").strip()

    # Validation
    errors = {}
    if not name:
        errors["name"] = "Full name is required"
    elif len(name) > 100:
        errors["name"] = "Name cannot exceed 100 characters"

    if not email:
        errors["email"] = "Email address is required"
    elif not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email):
        errors["email"] = "A valid email address is required"

    if not subject:
        errors["subject"] = "Subject line is required"
    elif len(subject) > 150:
        errors["subject"] = "Subject cannot exceed 150 characters"

    if not message:
        errors["message"] = "Message body cannot be empty"
    elif len(message) < 15:
        errors["message"] = "Message must be at least 15 characters"
    elif len(message) > 4000:
        errors["message"] = "Message cannot exceed 4000 characters"

    if errors:
        return jsonify({
            "error": "Validation Failed",
            "validationErrors": errors
        }), 422

    # Sanitize inputs
    sanitized_entry = {
        "id": f"msg_{int(time.time() * 1000)}",
        "name": html.escape(name),
        "email": html.escape(email),
        "subject": html.escape(subject),
        "message": html.escape(message),
        "company": html.escape(company),
        "role": html.escape(role),
        "client_ip": client_ip,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    # Persist message locally in json store
    try:
        with open(STORAGE_FILE, "r+", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError:
                data = []
            data.append(sanitized_entry)
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
    except Exception as e:
        app.logger.error(f"Failed to save contact message: {e}")
        return jsonify({
            "error": "Storage Error",
            "message": "Internal storage failure while saving message"
        }), 500

    return jsonify({
        "success": True,
        "message": "Thank you! Your message has been safely received. Shubham will respond promptly.",
        "entryId": sanitized_entry["id"],
        "receivedAt": sanitized_entry["timestamp"]
    }), 201


@app.route("/api/analytics/kpis", methods=["GET"])
def analytics_kpis():
    """Returns rollup metrics for the live analytics playground."""
    return jsonify({
        "totalAnalyzedVolume": 1200000.0,
        "cleanedRecords": 8523,
        "starSchemaDimensions": 4,
        "daxMeasuresEngineered": 12,
        "dataAccuracyScore": 0.998,
        "categories": [
            {"name": "Snack Foods & Groceries", "revenue": 423000, "margin": 0.245},
            {"name": "Fresh Produce & Dairy", "revenue": 354800, "margin": 0.192},
            {"name": "Household & Personal", "revenue": 272900, "margin": 0.321},
            {"name": "Frozen Foods", "revenue": 191000, "margin": 0.284}
        ]
    }), 200


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_DEBUG", "True").lower() in ("true", "1")
    print(f"Starting Portfolio Python Backend on http://127.0.0.1:{port}")
    app.run(host="127.0.0.1", port=port, debug=debug)
