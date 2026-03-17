# GigShield AI

### AI-Powered Parametric Income Insurance for Gig Workers

---

## Overview

GigShield AI is a parametric insurance platform designed to protect gig workers from **income loss caused by external disruptions** such as weather, pollution, and social restrictions.

The system enables **automated, zero-touch payouts** using real-time data monitoring and AI-driven decision making, aligned with the **weekly earning cycle** of delivery partners.

---

## Problem Statement

Gig workers (Swiggy, Zomato, Amazon, Zepto delivery partners) rely on daily earnings. External disruptions such as:

* Heavy rainfall / floods
* Extreme heat
* High pollution (AQI)
* Curfews / road closures

can reduce working hours and cause **20–30% income loss**.

⚠️ This solution focuses strictly on **income protection only** (no health, vehicle, or life coverage).

---

## Persona & Scenario

A delivery partner earns ₹500/day.
Due to heavy rainfall, they cannot work → lose ₹1000 in 2 days.

👉 GigShield AI:

* Detects disruption via API
* Automatically triggers claim
* Processes payout instantly

---

## System Workflow

1. User registers (location, work hours, income details)
2. AI-based risk profiling
3. Weekly premium calculation
4. Continuous monitoring via APIs + schedulers
5. On disruption:

   * Parametric trigger activated
   * Claim auto-initiated
   * Fraud detection applied
   * Instant payout processed

---

## Weekly Premium Model

**Formula:**
Weekly Premium = Base Price + (Risk Score × Factor)

**Example:**

* Base Price = ₹50
* Risk Score = 3

👉 Premium = ₹110/week

---

## Parametric Triggers

* Rainfall > 50mm
* Temperature > 40°C
* AQI > 300
* Traffic disruptions / road closures
* Curfew / restricted zones

✔ Fully automated → No manual claims

---

## AI/ML Integration

### Risk Prediction

* Based on location, historical data, work patterns
* Generates dynamic risk score for pricing

### Fraud Detection

* Anomaly detection
* GPS/location validation
* Duplicate claim detection
* Behavioral pattern analysis

---

## Platform Choice

**Web Application**

### Why:

* Easy accessibility (no install)
* Faster deployment
* Cross-platform usage

---

## Tech Stack

### Frontend

* React.js
* Chart.js (Analytics Dashboard)

### Backend

* Node.js / Flask
* REST APIs

### AI/ML

* Python (Scikit-learn, Pandas)

### Database

* MongoDB

### Integrations

* Weather API (OpenWeather)
* Pollution API
* Traffic API (Mock supported)

The system integrates external data sources such as weather, pollution, and traffic APIs to enable real-time parametric trigger evaluation.

### Automation

* Cron Jobs / Scheduler (real-time monitoring)

### Payments

* Razorpay (test mode) / Mock Payment API

---

## Automation & Claims

* Continuous monitoring using scheduled jobs
* Automatic trigger detection
* Zero-touch claim initiation
* Instant payout simulation

Claims are triggered automatically without any user request, ensuring a seamless zero-touch insurance experience.

---

## Fraud Prevention

* GPS-based validation
* Time/activity verification
* Duplicate claim detection
* AI-based anomaly detection

---

## Dashboard

### Worker

* Coverage status
* Protected earnings
* Claim history

### Admin

* Risk analytics
* Fraud alerts
* Claim trends

---

## Unique Features

* Zero-touch insurance claims
* Real-time disruption detection
* AI-powered fraud prevention
* Weekly pricing tailored for gig workers
* Fully parametric automation

---

## Development Plan

### Phase 1 : Ideation & Foundation

* Persona definition
* Workflow design
* README + GitHub setup
* 2-minute concept video

### Phase 2 : Core Development

* User registration & onboarding
* Policy management system
* Dynamic premium calculation
* API integration (weather, pollution, traffic)
* Automated claim triggering

### Phase 3 : Optimization & Scale

* Fraud detection system (AI-based)
* Payout simulation integration
* Analytics dashboard
* Final demo & pitch preparation

---

## Impact

GigShield AI provides a reliable financial safety net for gig workers by ensuring income continuity through automated, real-time insurance protection.

---

**Protecting every working hour, ensuring no gig goes unpaid.**
