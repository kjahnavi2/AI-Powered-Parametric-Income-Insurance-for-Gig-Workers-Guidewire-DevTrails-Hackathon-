# GigShield AI

AI-Powered Parametric Income Insurance for Gig Workers

---

## Overview

GigShield AI is a parametric insurance platform designed to protect gig workers from income loss caused by external disruptions such as weather, pollution, and social restrictions.

The system enables automated, zero-touch payouts using real-time data monitoring and AI-driven decision making, aligned with the weekly earning cycle of delivery partners.

---

## Problem Statement

Gig workers (Swiggy, Zomato, Amazon, Zepto delivery partners) rely on daily earnings. External disruptions such as:

1. Heavy rainfall or floods
2. Extreme heat
3. High pollution (AQI)
4. Curfews or road closures

can reduce working hours and cause 20–30% income loss.

Note: This solution focuses strictly on income protection only (no health, vehicle, or life coverage).

---

## Persona and Scenario

A delivery partner earns Rs.500 per day.
Due to heavy rainfall, they cannot work and lose Rs.1000 in 2 days.

GigShield AI:

* Detects disruption using APIs
* Automatically triggers claim
* Processes payout instantly

---

## System Workflow

1. User registers with location, work hours, and income details
2. AI-based risk profiling is performed
3. Weekly premium is calculated
4. External conditions are monitored using APIs and schedulers
5. If disruption occurs:

   * Parametric trigger is activated
   * Claim is automatically initiated
   * Fraud detection is applied
   * Payout is processed

---

## Weekly Premium Model

Formula:
Weekly Premium = Base Price + (Risk Score x Factor)

Example:
Base Price = Rs.50
Risk Score = 3

Premium = Rs.110 per week

---

## Parametric Triggers

* Rainfall greater than 50mm
* Temperature greater than 40°C
* AQI greater than 300
* Traffic disruptions or road closures
* Curfew or restricted zones

Note: Fully automated system with no manual claims.

---

## AI and Machine Learning Integration

Risk Prediction:

* Based on location, historical data, and work patterns
* Generates dynamic risk score

Fraud Detection:

* Anomaly detection
* GPS or location validation
* Duplicate claim detection
* Behavioral pattern analysis

---

## Platform Choice

Web Application

Reason:

* Easy accessibility without installation
* Faster deployment
* Works across devices

---

## Tech Stack

Frontend:

* React.js
* Chart.js for analytics dashboard

Backend:

* Node.js or Flask
* REST APIs

AI/ML:

* Python with Scikit-learn and Pandas

Database:

* MongoDB

Integrations:

* Weather API (OpenWeather)
* Pollution API
* Traffic API (mock supported)

The system integrates external data sources such as weather, pollution, and traffic APIs to enable real-time parametric trigger evaluation.

Automation:

* Cron jobs or scheduler for continuous monitoring

Payments:

* Razorpay test mode or mock payment API

---

## Automation and Claims

* Continuous monitoring using scheduled jobs
* Automatic trigger detection
* Zero-touch claim initiation
* Instant payout simulation

Claims are triggered automatically without user intervention, ensuring a seamless experience.

---

## Fraud Prevention

* GPS-based validation
* Time and activity verification
* Duplicate claim detection
* AI-based anomaly detection

---

## Dashboard

Worker:

* Coverage status
* Protected earnings
* Claim history

Admin:

* Risk analytics
* Fraud alerts
* Claim trends

---

## Unique Features

* Zero-touch insurance claims
* Real-time disruption detection
* AI-based fraud prevention
* Weekly pricing model
* Fully automated parametric system

---

## Development Plan

Phase 1 (Weeks 1–2):

* Persona definition
* Workflow design
* README creation
* GitHub setup
* 2-minute video

Phase 2 (Weeks 3–4):

* User registration
* Policy management
* Premium calculation
* API integration
* Automated claims

Phase 3 (Weeks 5–6):

* Fraud detection system
* Payment simulation
* Dashboard development
* Final demo

---

## Impact

GigShield AI provides a reliable financial safety net for gig workers by ensuring income continuity through automated and real-time insurance protection.

---

Protecting every working hour, ensuring no gig goes unpaid.

