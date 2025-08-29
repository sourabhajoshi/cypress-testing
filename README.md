# 🌐 Cypress Testing Roadmap

This guide covers **Cypress testing topics** from **beginner to advanced**.  
Follow this step-by-step to master Cypress for end-to-end, integration, and API testing.

---

## 1. Basics (Getting Started)
- What is Cypress & how it works vs Selenium
- Install & setup (`npm install cypress`)
- Open Cypress Test Runner (`npx cypress open`)
- Project structure (`cypress/e2e`, `fixtures`, `support`)
- First test with `describe`, `it`, and Cypress commands

**Practice:** Write a test that visits a webpage and checks the title.

---

## 2. Core Cypress Commands
- **Navigation:** `cy.visit()`, `cy.url()`, `cy.go()`
- **Locating elements:** `cy.get()`, `cy.contains()`, `cy.find()`
- **Actions:** `.click()`, `.type()`, `.select()`, `.check()`
- **Assertions:** `should()`, `expect()`, `.and()`
- **Waiting:** automatic retry, `cy.wait()`

**Practice:** Build a login form test.

---

## 3. Test Organization
- Test suites (`describe`) and test cases (`it`)
- **Hooks:** `before`, `beforeEach`, `after`, `afterEach`
- Reusing code with **Custom Commands**
- Test data with **Fixtures**
- Page Object Model (POM) basics

**Practice:** Reuse login logic with a custom command.

---

## 4. Assertions
- Implicit vs Explicit assertions
- Common checks: `.should('have.text')`, `.should('be.visible')`
- Using Chai, Sinon, jQuery assertions
- Negative checks: `.should('not.exist')`

**Practice:** Write tests for element visibility, attributes, styles.

---

## 5. Handling Scenarios
- Alerts, popups, and modals
- File upload & download
- Working with **iframes**
- Dropdowns, checkboxes, radio buttons
- Keyboard actions (`.type('{enter}')`)

**Practice:** Automate form submission with file upload.

---

## 6. API Testing with Cypress
- Test REST APIs with `cy.request()`
- Assert API response (status, headers, body)
- Mock APIs with `cy.intercept()`
- Test frontend + backend integration

**Practice:** Mock API login success/failure.

---

## 7. Advanced Cypress
- Network stubbing & spying with `cy.intercept()`
- Time control: `cy.clock()`, `cy.tick()`
- Environment Variables (`cypress.config.js`)
- Parallel execution & retries
- Cross-browser testing (Chrome, Edge, Firefox, WebKit)
- Visual regression testing (plugins)

**Practice:** Mock API response and test UI error handling.

---

## 8. Best Practices
- Use Page Object Model (POM)
- DRY principle with reusable commands
- Fixtures + dynamic test data
- Run in headless mode (`npx cypress run`)
- Organize tests for CI/CD

---

## 9. Reporting & CI/CD
- Cypress Dashboard Service
- Reports with Mochawesome / Allure
- Integrate with Jenkins / GitHub Actions / GitLab CI
- Run Cypress in Docker

---

## 10. Plugins & Ecosystem
- **cypress-axe** → accessibility testing
- **cypress-real-events** → real interactions
- **cypress-file-upload** → file handling
- **cypress-image-snapshot** → visual regression

---

## Resources
- [Cypress Docs](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Awesome Cypress (GitHub)](https://github.com/cypress-io/awesome-cypress)

