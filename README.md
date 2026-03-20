Project Title

GigShield: AI-Powered Parametric Insurance for Gig Delivery Workers

Problem Overview

Platform-based delivery workers form the backbone of India’s on-demand economy. However, their earnings are highly vulnerable to external disruptions such as heavy rainfall, extreme heat, pollution spikes, and unexpected curfews. These events can reduce working hours significantly, often leading to a 20–30% loss in weekly income.

Currently, there is no structured mechanism to compensate this income loss. Workers bear the full financial impact of conditions beyond their control.

GigShield addresses this gap by introducing a parametric insurance platform that automatically protects income during such disruptions.

Persona and Real-World Context

Ravi is a 26-year-old food delivery partner working with Swiggy in Hyderabad. He typically works 9 hours a day and earns around ₹700 daily. During monsoon weeks, heavy rain reduces his working hours drastically, sometimes cutting his earnings in half.

Ravi cannot predict such disruptions, nor does he have any financial backup for these losses. Missing even a few working days impacts his ability to cover rent and daily expenses.

GigShield is designed for workers like Ravi. It provides a simple weekly insurance plan that ensures he receives compensation automatically whenever external disruptions prevent him from working.

Solution Approach

GigShield is an AI-enabled parametric insurance system that eliminates manual claims. Instead of requiring users to file claims, the platform continuously monitors external conditions and triggers payouts automatically when predefined thresholds are met.

The system focuses strictly on income protection and does not include coverage for health, accidents, or vehicle-related damages, ensuring full compliance with the problem constraints.

System Workflow

User Onboarding Delivery partner registers with basic details and location.

Policy Selection User selects a weekly insurance plan based on suggested risk level.

Risk Assessment (AI-Based) The system evaluates:

Historical weather patterns

Location-based risk factors

Worker activity trends

Based on this, a dynamic weekly premium is assigned.

Real-Time Monitoring The platform continuously tracks:

Weather conditions (via APIs or simulated data)

Environmental indicators such as AQI

Regional disruption signals

Parametric Trigger Activation

When a predefined condition is met (e.g., rainfall exceeds threshold), the system:

Automatically validates the event

Initiates a claim without user input

Automated Claim Processing

The claim is verified through system checks such as:

Location validation

Activity consistency

Instant Payout (Simulated) The approved payout is credited to the user via a simulated payment system.

Weekly Premium Model

The pricing model is designed to align with the weekly earning cycle of gig workers.

Risk Category Weekly Premium Coverage Amount Low Risk ₹20 ₹300 Medium Risk ₹40 ₹500 High Risk ₹60 ₹800

Premiums are dynamically adjusted based on AI-driven risk evaluation of the worker’s operating zone.

Parametric Triggers

The system defines clear, measurable triggers to eliminate ambiguity in claims:

Rainfall exceeding a defined threshold

Temperature crossing extreme limits

AQI levels entering hazardous range

Official curfew or zone shutdown

Once triggered, these conditions directly initiate claim processing.

AI/ML Integration

The platform incorporates AI components in the following areas:

Risk Modeling Predicts likelihood of disruptions using historical environmental and regional data.

Dynamic Premium Calculation Adjusts weekly pricing based on risk exposure of the worker’s location.

Fraud Detection Detects anomalies such as:

Location inconsistencies

Repeated or duplicate claims

Mismatch between reported and actual conditions

Integration Strategy

To simulate real-world functionality, the platform integrates or mocks the following:

Weather data APIs (for environmental triggers)

Traffic or regional disruption signals (mocked if needed)

Platform activity data (simulated delivery logs)

Payment gateway (sandbox or mock environment)

Technology Stack

The system will be designed using a scalable and modular architecture:

Frontend: React.js

Backend: Node.js with Express

Database: MongoDB

AI/ML Layer: Python (Scikit-learn for predictive modeling)

External Integrations: Weather APIs, simulated platform and payment services

This stack supports real-time data processing, AI-driven decisions, and seamless user interaction.

Development Plan

Phase 1 (Ideation and Design)

Define persona and use-case scenarios

Design system workflow and triggers

Outline AI models and pricing strategy

Phase 2 (Core Implementation)

Build onboarding and policy management

Implement dynamic premium calculation

Integrate trigger-based claim system

Phase 3 (Optimization and Scale)

Enhance fraud detection mechanisms

Simulate instant payouts

Develop analytics dashboard for users and administrators

Expected Impact

GigShield provides a practical safety net for gig workers by ensuring income continuity during unavoidable disruptions. By automating claims and payouts, it removes friction from the insurance process and builds trust among users who rely on consistent daily earnings.