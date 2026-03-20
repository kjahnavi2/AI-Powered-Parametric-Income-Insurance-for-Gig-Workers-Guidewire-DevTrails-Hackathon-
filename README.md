🚀 GigShield: AI-Powered Parametric Income Insurance for Gig Workers
🔗 Live Prototype

👉 https://kjahnavi2.github.io/AI-Powered-Parametric-Income-Insurance-for-Gig-Workers-Guidewire-DevTrails-Hackathon-/

📌 Problem Statement

Gig delivery workers are critical to India’s on-demand economy, yet their income is highly unstable. External disruptions such as:

Heavy rainfall

Extreme heat

High pollution (AQI spikes)

Government-imposed curfews

can reduce working hours and lead to 20–30% weekly income loss.

Currently, there is no structured, automated system to compensate for this loss. Workers bear the full financial burden of unpredictable external conditions.

👤 Target Users (Clearly Defined)

GigShield is designed for:

Urban gig delivery workers (Swiggy, Zomato, Blinkit, Zepto)

Daily earnings: ₹500–₹1000

Work duration: 8–10 hours/day

Operate in weather-sensitive, high-density urban zones

Have no formal insurance or financial buffer

🧍 Persona: Real-World Context

Ravi, a 26-year-old Swiggy delivery partner in Hyderabad:

Earns ~₹700/day

Works ~9 hours/day

During monsoon weeks, earnings drop by up to 50%

Ravi cannot predict disruptions and lacks financial protection. Missing even a few days affects his ability to pay rent and daily expenses.

👉 GigShield ensures Ravi gets compensated automatically when such disruptions occur.

💡 Solution Overview

GigShield is an AI-powered parametric insurance platform that:

Eliminates manual claims

Monitors external conditions in real-time

Automatically triggers payouts when predefined thresholds are met

✅ No paperwork
✅ No claim requests
✅ Instant compensation

⚙️ System Workflow

User Onboarding

Register with location and basic details

Policy Selection

Choose a weekly plan (Low / Medium / High risk)

AI-Based Risk Assessment

Calculates personalized risk score

Real-Time Monitoring

Tracks weather, AQI, and disruptions

Trigger Activation

If thresholds are exceeded → automatic claim

Claim Processing

System validates event and user activity

Instant Payout (Simulated)

Compensation credited automatically

🤖 AI/ML Implementation (Clear & Concrete)
1. Risk Modeling

Goal: Predict likelihood of income disruption

Inputs (Features):

Rainfall (mm)

Temperature (°C)

AQI levels

Historical disruption frequency

Location risk index

Model Used:

Logistic Regression / Decision Tree (Scikit-learn)

Output:

Risk Score (0 to 1)

2. Dynamic Premium Calculation

Premium is calculated using:

Premium = Base Price × Risk Score × Location Factor

Example:

Low Risk → ₹20

Medium Risk → ₹40

High Risk → ₹60

3. Fraud Detection

Hybrid approach:

Rule-Based Checks:

GPS location mismatch

Duplicate claims

Unrealistic activity gaps

Anomaly Detection:

Repeated claims from same user

Abnormal trigger patterns

🌧️ Parametric Triggers

Clear, objective triggers eliminate disputes:

Rainfall exceeds threshold (e.g., >50mm/day)

Temperature crosses extreme limits

AQI enters hazardous range

Official curfew / zone shutdown

👉 Once triggered → automatic payout

💰 Weekly Insurance Plans
Risk Level	Premium	Coverage
Low Risk	₹20	₹300
Medium Risk	₹40	₹500
High Risk	₹60	₹800
🏗️ System Architecture
Frontend (React.js)
        ↓
Backend API (Node.js + Express)
        ↓
AI Service (Python - Flask/FastAPI)
        ↓
Database (MongoDB)
        ↓
External APIs (Weather, AQI)
Key Design Decisions:

Node.js handles API + business logic

Python service handles ML predictions

Communication via REST APIs

Real-time monitoring via scheduled jobs (cron)

🔌 Integration Strategy

Weather APIs (or simulated data)

AQI data sources

Mock delivery activity logs

Simulated payment gateway

📉 Market Crash Handling (Critical for Sustainability)

GigShield ensures financial stability even during mass disruptions:

1. Payout Caps

Limits total payout per region per week

2. Dynamic Premium Adjustment

Premiums increase in high-risk periods

3. Risk Pooling (Simulated Reinsurance)

Distributes financial exposure across users

4. Trigger Throttling

Prevents multiple payouts from same event cluster

👉 Ensures system remains scalable and financially viable

🛠️ Technology Stack

Frontend: React.js, HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB

AI/ML: Python, Scikit-learn

APIs: Weather, AQI (real or simulated)

🚧 Development Roadmap
Phase 1: Design

Persona definition

Workflow and trigger design

AI model planning

Phase 2: Implementation

User onboarding

Premium calculation

Trigger-based claims

Phase 3: Optimization

Fraud detection improvements

Payout simulation

Analytics dashboard

🌍 Expected Impact

GigShield provides:

Income stability for gig workers

Zero-friction insurance experience

Trust through automation and transparency

By removing manual claims and ensuring instant payouts, GigShield transforms insurance into a reliable safety net for India’s gig economy.

🏁 Final Note

GigShield is not just an insurance product—it is a data-driven financial protection system designed for workers who need stability the most.