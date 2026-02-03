<h1 align="center">🧪 Automation Framework</h1>
<p align="center">
  Playwright-based UI, API, and performance test automation
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-Testing-green" />
  <img src="https://img.shields.io/badge/JavaScript-Node.js-yellow" />
  <img src="https://img.shields.io/badge/CI-GitHub_Actions-blue" />
  <img src="https://img.shields.io/badge/Performance-K6-orange" />
</p>

## Overview

This repository contains a **test automation framework** built using **Playwright (JavaScript)**.  
It is designed to support **real-world automation needs** with clean architecture, modular components, and CI readiness.

The framework focuses on:
- Maintainability
- Scalability
- Easy onboarding
- Real project–like structure

## Application Under Test
**ORangeHRM**

Automated coverage includes the **complete employee lifecycle**:
- Authentication
- Employee creation
- Role-based validation
- Employee update
- API-level verification
- Employee deletion

## Features

- Page Object Model (POM) architecture
- UI & API automation support
- Performance testing capability
- Environment-based configuration
- GitHub Actions CI integration
- Playwright HTML reporting

## Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **GitHub Actions**
- **K6**
- **dotenv**
- **Allure Report**

## Project Structure

```text
.
├── .github/workflows/        # CI/CD pipelines
├── api/                     # API helpers
├── helpers/                 # Utilities & common helpers
├── page-objects/            # Page Object Models
├── performance/             # Performance test scripts
├── tests/                   # Test cases
├── .env.dev                 # Development environment config
├── .env.staging             # Staging environment config
├── .env.prod                # Production environment config
├── playwright.config.js     # Playwright configuration
├── package.json             # Dependencies & scripts
└── README.md

```

## Installation
# Prerequisites
- Node.js ( v18+ recommendation )
- npm

# Setup

```
git clone
git clone https://github.com/fakhrezasusilos/Automation.git
cd Automation
npm install
npx playwright install
```
## Running Test

Run all tests: 
```
npm playwright test
```

Run tests in specific environment:
```
npm playwright test:prod
npm playwright test:staging
npm playwright test:dev
```
Run a specific test:
```
npm playwright test tests/example.spec.js
```
Generates Allure Reports :
```
npm playwright allure:generate
```
Open Allure Reports :
```
npm playwright allure:open
```

## Environment Configuration

This Project support multiple environment using multiple ```.env``` files
```
BASE_URL = https://example.com
USERNAME = adminusername
PASSWORD = adminpassword

ESS_USERNAME = essusername
ESS_PASSWORD = esspassword
```
Switch environment can be done by updating the config or environment variables

## CI/CD

Automated tests executed via **Github Actions** on
- push events
- daily running using cron

Pipeline step: 
- Install dependencies
- Install Playwright Browsers
- Execute Automated tests
- Generate HTML Reports using **Allure Report**
- Upload Artifacts
- Deploy reports on github pages
- Support Parallel execution in CI

workflow is located under:
```
.github/workflows/

```

## Test Stability& Reliability

The framework includes:

- Retry logic for flaky scenarios
- Smart waiting mechanisms (auto-wait & explicit waits)
- Screenshots & videos on failure
- Test isolation & cleanup

# Flaky Test Strategy

- Identify flaky tests via retries and CI history
- Remove hard waits
- Use deterministic locators
- Validate via API where applicable

## Reporting
- Allure HTML Reports
- Screenshots on Failure
- Video Recording on Failure
- Tag based execution
- Environment based runs
