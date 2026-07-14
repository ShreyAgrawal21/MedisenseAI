<p align="center">
  <img src="docs/banner.png" alt="MediSense AI Banner" />
</p>
<div align="center">

<img src="docs/logo.png" width="120"/>

# 🩺 MediSense AI

### AI-Powered Medical Report Interpreter & Healthcare Intelligence Platform

Analyze medical reports using Artificial Intelligence, generate health scores, visualize health trends, detect abnormalities, and receive personalized healthcare insights.

<p align="center">

![Python](https://img.shields.io/badge/Python-3.13-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-orange?style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-red?style=for-the-badge)

</p>

</div>

---

# 📖 Overview

**MediSense AI** is an AI-powered healthcare web application that transforms complex pathology and laboratory reports into simple, understandable health insights.

Instead of manually interpreting medical terminology, users can upload their reports and instantly receive:

- 🤖 AI-generated summaries
- ❤️ Overall health score
- ⚠️ Abnormal findings
- ✅ Normal findings
- 💡 Personalized recommendations
- 📈 Health trends
- 📅 Health timeline
- 📊 Interactive dashboard

The platform is built with a modern full-stack architecture using **Next.js**, **FastAPI**, **Google Gemini AI**, and **MySQL**.

---

# ✨ Key Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Session Management

---

## 📄 Medical Report Management

- Upload PDF Reports
- OCR/Text Extraction
- Report History
- Laboratory Results
- Report Comparison (In Progress)

---

## 🤖 AI Medical Analysis

- AI Summary
- Overall Health Score
- Abnormal Findings Detection
- Normal Findings Detection
- Personalized Recommendations
- Medical Interpretation
- Health Insights

---

## 📊 Dashboard

- Health Statistics
- Reports Uploaded
- Recent Activity
- Health Timeline
- Health Trends
- Quick Actions

---

## 👤 User Module

- User Profile
- Account Settings
- Password Management
- Notification Settings
- Appearance Settings

---

## 💬 AI Chat

- Medical AI Chat Assistant
- Report Discussion
- Health-related Questions

---

# 📸 Application Screenshots

## 🏠 Landing Page

![Landing Page](docs/landing.png)

---

## 🔐 Login Page

![Login](docs/login.png)

---

## 📊 Dashboard

![Dashboard](docs/dashboard.png)

---

## 📈 Health Trends

![Health Trends](docs/health-trends.png)

---

## 📅 Health Timeline

![Timeline](docs/timeline.png)

---

## 🤖 AI Report Overview

![Overview](docs/analysis-overview.png)

---

## 📝 AI Summary

![Summary](docs/analysis-summary.png)

---

## ⚠️ Findings

![Findings](docs/findings.png)

---

## 💡 Recommendations

![Recommendations](docs/recommendations.png)

---

# 🏗️ System Architecture

```text
                 Next.js Frontend
                        │
                        ▼
                 FastAPI Backend
                        │
      ┌─────────────────┼──────────────────┐
      ▼                 ▼                  ▼
 Authentication    Report Engine      Dashboard
                        │
                        ▼
                 Medical Parser
                        │
                        ▼
                   Gemini AI
                        │
                        ▼
                  MySQL Database
```

---

# 🧠 AI Processing Pipeline

```text
Upload PDF Report
        │
        ▼
Extract Text (OCR)
        │
        ▼
Medical Parser
        │
        ▼
Gemini AI Analysis
        │
        ▼
Structured JSON Output
        │
        ▼
Health Score
        │
 ┌──────┼────────────┐
 ▼      ▼            ▼
Summary Findings Recommendations
        │
        ▼
 Dashboard & History
```

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Backend | FastAPI |
| ORM | SQLAlchemy |
| Database | MySQL |
| AI | Google Gemini AI |
| Authentication | JWT |
| Charts | Recharts |
| API Testing | Swagger UI |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
MediSenseAI
│
├── backend
│   ├── app
│   ├── migrations
│   ├── tests
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── docs
│   ├── logo.png
│   ├── landing.png
│   ├── login.png
│   ├── dashboard.png
│   ├── health-trends.png
│   ├── timeline.png
│   ├── analysis-overview.png
│   ├── analysis-summary.png
│   ├── findings.png
│   └── recommendations.png
│
└── README.md
```

---

# ⚙️ Installation Guide

## Prerequisites

Make sure the following software is installed on your system:

- Python 3.13+
- Node.js 20+
- npm
- MySQL 8+
- Git

---

# 📥 Clone the Repository

```bash
git clone https://github.com/ShreyAgrawal21/MedisenseAI.git

cd MedisenseAI
```

---

# 🖥 Backend Setup (FastAPI)

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install all dependencies

```bash
pip install -r requirements.txt
```

Run Alembic migrations

```bash
alembic upgrade head
```

Start the backend server

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://localhost:8000
```

Swagger Documentation

```
http://localhost:8000/docs
```

---

# 💻 Frontend Setup (Next.js)

Open another terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs at

```
http://localhost:3000
```

---

# 🌐 Environment Variables

## Backend (.env)

```env
DATABASE_URL=mysql+pymysql://username:password@localhost/medisense_ai

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60

GEMINI_API_KEY=your_gemini_api_key
```

---

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

# 🔌 API Overview

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login user |
| GET | `/api/v1/auth/me` | Current user |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/dashboard` |

---

## Reports

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/reports/upload` |
| GET | `/api/v1/reports` |
| DELETE | `/api/v1/reports/{id}` |

---

## AI Analysis

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/analysis/{report_id}` |

---

## Timeline

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/timeline` |

---

## Comparison

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/comparison` |

---

## Profile

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/profile` |
| PATCH | `/api/v1/profile` |

---

## Settings

| Method | Endpoint |
|---------|----------|
| PATCH | `/api/v1/settings` |

---

# 📊 Database

Main tables used in the application:

- users
- reports
- report_analysis
- dashboard_data
- timeline_events

Database ORM:

- SQLAlchemy

Migration Tool:

- Alembic

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- Environment Variables
- Secure API Design

---

# 📈 Current Progress

## ✅ Completed

- User Authentication
- Login & Registration
- JWT Security
- Dashboard
- Health Statistics
- Health Timeline
- AI Report Analysis
- Health Score
- Laboratory Results
- Abnormal Findings
- Normal Findings
- AI Recommendations
- User Profile
- Settings Module
- Medical AI Chat
- REST APIs
- Responsive Dashboard

---

# 🚀 Upcoming Features

- Forgot Password
- Reset Password via Email
- Download AI Report as PDF
- Avatar Upload
- Email Verification
- Dark Mode
- Report Sharing
- Notification Center
- Docker Support
- CI/CD Pipeline
- Production Deployment

---

# 🚀 Deployment

## Frontend

Recommended Platform

- Vercel

Deploy using

```bash
vercel
```

---

## Backend

Recommended Platform

- Render

Start Command

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

---

## Database

Recommended

- MySQL
- Railway MySQL
- PlanetScale
- Azure Database for MySQL

---

# 🧪 Future Scope

Planned enhancements include:

- Doctor Dashboard
- Hospital Dashboard
- Multi-language Support
- Voice Assistant
- Appointment Booking
- Wearable Device Integration
- Health Risk Prediction
- AI Nutrition Suggestions
- Prescription Analysis
- Medical Image Analysis
- Smart Notification System

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push your branch

```bash
git push origin feature/feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

## Shrey Agrawal

**B.Tech – Artificial Intelligence & Data Science**

Jabalpur Engineering College

📍 Jabalpur, Madhya Pradesh, India

### Connect

GitHub

https://github.com/ShreyAgrawal21

Repository

https://github.com/ShreyAgrawal21/MedisenseAI

LinkedIn

(Add your LinkedIn profile URL here)

---

# 🙏 Acknowledgements

Special thanks to the open-source community and the developers behind:

- FastAPI
- Next.js
- Tailwind CSS
- SQLAlchemy
- Alembic
- Google Gemini AI
- Recharts
- MySQL

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

# ⚠️ Medical Disclaimer

MediSense AI is intended for educational and informational purposes only.

The AI-generated interpretations, recommendations, and health scores should **not** be considered professional medical advice.

Always consult a qualified healthcare professional before making medical decisions.

---

<div align="center">

## ⭐ If you found this project helpful, consider giving it a Star!

### Thank you for visiting MediSense AI ❤️

</div>