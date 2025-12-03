# Cypress Testing Roadmap   

This guide covers **Cypress testing topics** from **beginner to advanced**.  
Follow this step-by-step to master Cypress for end-to-end (E2E), integration, and API testing.

---

## Table of Contents
1. [Basics (Getting Started)](#1-basics-getting-started)
2. [Core Cypress Commands](#2-core-cypress-commands)
3. [Test Organization](#3-test-organization)
4. [Assertions](#4-assertions)
5. [Handling Scenarios](#5-handling-scenarios)
6. [Authentication Testing](#6-authentication-testing)
7. [API Testing with Cypress](#7-api-testing-with-cypress)
8. [Advanced Cypress](#8-advanced-cypress)
9. [Best Practices](#9-best-practices)
10. [Reporting & CI/CD](#10-reporting--cicd)
11. [Plugins & Ecosystem](#11-plugins--ecosystem)
12. [Capstone Project](#12-capstone-project)

---

## 1. Basics (Getting Started)
- What is Cypress & how it works vs Selenium
- Install & setup (`npm install cypress --save-dev`)
- Open Cypress Test Runner (`npx cypress open`)
- Project structure (`cypress/e2e`, `fixtures`, `support`)
- First test with `describe`, `it`, and Cypress commands

**Practice:**  
Write a test that visits a webpage and checks the title.

---

## 2. Core Cypress Commands
- **Navigation:** `cy.visit()`, `cy.url()`, `cy.go()`
- **Locating elements:** `cy.get()`, `cy.contains()`, `cy.find()`
- **Actions:** `.click()`, `.type()`, `.select()`, `.check()`
- **Assertions:** `.should()`, `.expect()`, `.and()`
- **Waiting:** automatic retry, `cy.wait()`

**Practice:**  
Build a login form test.

---

## 3. Test Organization
- Test suites (`describe`) and test cases (`it`)
- **Hooks:** `before`, `beforeEach`, `after`, `afterEach`
- Reusing code with **Custom Commands**
- Test data with **Fixtures**
- Page Object Model (POM) basics
- Data-driven testing (loop through test data)

**Practice:**  
Reuse login logic with a custom command.

---

## 4. Assertions
- Implicit vs Explicit assertions
- Common checks: `.should('have.text')`, `.should('be.visible')`
- Using **Chai, Sinon, jQuery** assertions
- Negative checks: `.should('not.exist')`

**Practice:**  
Write tests for element visibility, attributes, styles.

---

## 5. Handling Scenarios
- Alerts, popups, and modals
- File upload & download
- Working with **iframes**
- Dropdowns, checkboxes, radio buttons
- Keyboard actions (`.type('{enter}')`)

**Practice:**  
Automate form submission with file upload.

---

## 6. Authentication Testing
- UI login vs API login
- Preserving sessions (`cy.session()`)
- Handling **JWT, cookies, localStorage**
- Bypassing login with API tokens

**Practice:**  
Write tests for login success, invalid password, and session persistence.

---

## 7. API Testing with Cypress
- Test REST APIs with `cy.request()`
- Assert API response (status, headers, body)
- Mock APIs with `cy.intercept()`
- Test frontend + backend integration

**Practice:**  
Mock API login success/failure and test UI behavior.

---

## 8. Advanced Cypress
- Network stubbing & spying with `cy.intercept()`
- Time control: `cy.clock()`, `cy.tick()`
- Environment Variables (`cypress.config.js`)
- Parallel execution & retries
- Cross-browser testing (Chrome, Edge, Firefox)
- Visual regression testing (plugins)

**Practice:**  
Mock API response and test UI error handling.

---

## 9. Best Practices
- Use **Page Object Model (POM)**
- DRY principle with reusable commands
- Fixtures + dynamic test data
- Test only **critical paths**
- Keep tests **independent** (don’t rely on order)
- Use stable selectors (`data-testid`)
- Run in headless mode (`npx cypress run`)
- Organize tests for CI/CD

---

## 10. Reporting & CI/CD
- Cypress Dashboard Service
- Reports with **Mochawesome** / **Allure**
- Integrate with **Jenkins / GitHub Actions / GitLab CI**
- Run Cypress in **Docker**
- Parallelization & retries in CI

---

## 11. Plugins & Ecosystem
- **cypress-axe** → accessibility testing
- **cypress-real-events** → real interactions
- **cypress-file-upload** → file handling
- **cypress-image-snapshot** → visual regression
- **cypress-grep** → run tests by tags

---

## 12. Capstone Project
Choose a small app (e.g., Todo app, Shopping Cart). Write Cypress tests for:
1. **Login & Authentication** (UI + API)
2. **CRUD Operations** (Add/Edit/Delete items)
3. **API Mocking** (Simulate failures/successes)
4. **Form Submissions** (with validations & file upload)
5. **Checkout flow** (multi-step process)


**Goal:**  
End-to-end test coverage of a real app, integrated into CI/CD.

---

## Outcome
By the end of this roadmap, you’ll be able to:
- Write stable Cypress tests for any web app  
- Automate APIs, authentication, and UI flows  
- Run tests in CI/CD pipelines  
- Apply Cypress best practices like a QA Automation Engineer  
