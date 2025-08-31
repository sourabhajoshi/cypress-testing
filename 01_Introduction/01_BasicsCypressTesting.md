# Basics Cypress Testing

Cypress is a JS based end-to-end testing framework built specifically for modern web applications (means supports React or Vue or Angular) and API's.

Cypress widely used by developers and testers. We can perform end to end testing, component testing, unit testing etc

Cypress is a JavaScript testing framework that runs in the browser to test web apps. It’s best at:
- End-to-End (E2E) tests: simulate real user flows (login → dashboard → CRUD).
- Component tests: mount a single Vue component and assert behavior/DOM.

Think of Cypress as a robot that opens your web app in a browser and pretends to be a real user:
- It clicks buttons
- It types into forms
- It checks that the right things show up

Example : Go to my login page, type email & password, click Login, and check that I end up on the Dashboard.

### **Why use Cypress**

Without Cypress, you have to check your app by hand every time you make changes. With Cypress, you can write tests once, and it will repeat those checks automatically.

### **Advantages Cypress**

- Easy to use – Simple setup and user-friendly interface.
- Speed – Executes tests faster compared to many other tools.
- Open source – Free to use and backed by strong community support.
- Time travel – While running the test, you can see the time taken for each step (Step 1: execution time, Step 2: execution time, and so on) and capture screenshots at each step.
- Debuggability – Provides more readable error messages and detailed statistical information.
- Automatic waiting – No need to add explicit waits; Cypress automatically waits for elements and commands.
- Screenshot and video – Automatically captures screenshots and videos of test runs.

### **Disadvantages Cypress**

- Can not use more than one browser
- Does not provide support for multi tabs
- Support for JS programming language only
- Doed not support mobile and desktop app testing
- Not support Opera and safari browser
- XPath required external plugin

### **Diff b/w Cypress vs Selenium**

| S.No. | Cypress | Selenium |
|-------|---------|----------|
| 1 | This is a framework that is robust in nature. | It is a library that needs a unit testing framework to process. |
| 2 | To set up Cypress is easier as compared to Selenium. | Its setup is quite complex. |
| 3 | It supports JavaScript only. | It supports different programming languages like Java, Python. |
| 4 | It supports only one browser i.e. Chrome. | It can support various browsers. |
| 5 | To perform tasks, it uses DOM manipulation techniques. | It does not use DOM manipulation techniques. |
| 6 | It is robust in nature. | It is not robust in nature. |
| 7 | There is no support for multiple tabs. | There is support for multiple tabs. |
| 8 | Limited support for OS. | Many OS can be used to process tasks. |

### **Types of Testing in Cypress**

1. End-to-End (E2E) Testing
- Scope: Full user journeys across pages.
- Goal: Ensure the app works as a whole, like a real user would use it.
- Example: User logs in → navigates to dashboard → creates a post → logs out.

2. Component Testing
- Scope: Isolated UI components (React, Vue, Angular, etc.).
- Goal: Validate component logic, rendering, and behavior.
- Example: Test a <Button /> renders with correct label and triggers a callback on click.

3. Integration Testing (supported indirectly)
- Scope: How parts of the app (like multiple components or API + UI) work together.
- Goal: Catch bugs where components/modules interact.
- Example: Test a “LoginForm” calls the login API and updates UI with user data.

4. API Testing
- Scope: Backend endpoints using cy.request() or cy.intercept().
- Goal: Ensure APIs return correct status codes, headers, and body.
- Example: Test POST /login returns 200 with a token.

5. Visual & Accessibility Testing (via plugins)
- Scope: Looks & usability.
- Goal: Catch visual regressions or accessibility issues.
- Example: Compare screenshots of pages across versions; check if all buttons have accessible labels.

---

# Install & setup

### **Step 1: Prerequisites**
Before installing Cypress, make sure you have : 
- Node.js (latest LTS recommended, e.g. 18+).
- npm (comes with Node).
- A project folder (can be an existing app or a new empty project).
```
node -v
npm -v
```

### **Step 2: Create a Project (if new)**
If you don’t already have a project, create one:
```
mkdir cypress-demo
cd cypress-demo
npm init -y

<!-- This creates a package.json file (Cypress will be added here as a dependency). -->
```

### **Step 3: Install Cypress**
Install Cypress as a dev dependency:

```
npm install cypress --save-dev
```
- --save-dev means it’s only needed for development/testing, not production.
- This downloads Cypress into your project’s node_modules folder.
- After install, you’ll see Cypress in devDependencies of package.json.

### **Step 4: Open Cypress Test Runner**
```
npx cypress open
```

npx runs binaries from node_modules/.bin. This will launch the Cypress Test Runner app (a GUI). On first run, Cypress auto-creates a default structure in your project.
```
cypress/
  e2e/          # place your tests here
  fixtures/     # test data (e.g., JSON files)
  support/      # reusable functions, setup code
cypress.config.js   # main Cypress config
```

### **Step 5: Run First Test**
Inside the GUI, Cypress gives you example tests. You can click one, and it will open a browser window that runs live tests.

You can also create your own test file: cypress/e2e/firstTest.cy.js
```
describe('My First Test', () => {
  it('Visits Google and checks the title', () => {
    cy.visit('https://google.com')
    cy.title().should('include', 'Google')
  })
})
```
---

# Cypress Project Structure

When you run npx cypress open for the first time, Cypress generates some folders/files
```
cypress/
  e2e/
  fixtures/
  support/
cypress.config.js
```

### **1. cypress/e2e/ → End-to-End test files**

This is where you write your test specs (the actual .cy.js or .cy.ts files). Cypress will auto-detect any test file placed here.

Naming convention:
- *.cy.js → test files (e.g. login.cy.js, dashboard.cy.js).
```
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  it('logs in with valid credentials', () => {
    cy.visit('/login')
    cy.get('#username').type('admin')
    cy.get('#password').type('secret')
    cy.get('button[type=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

### **2. cypress/fixtures/ → Test data (mocks)**

Holds static data you want to use inside tests. Useful for mock responses, sample users, JSON payloads, etc.

Example: cypress/fixtures/user.json
```
{
  "username": "joshi",
  "password": "123456"
}
```
```
cy.fixture('user').then((user) => {
  cy.get('#username').type(user.username)
  cy.get('#password').type(user.password)
})
```

### **3. cypress/support/ → Helpers & global setup**

Contains reusable code and global config.

By default, it has:
- commands.js → write custom Cypress commands.
```
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button[type=submit]').click()
})
```
Now in tests:
```
cy.login('admin', 'secret')
```

### **4. cypress.config.js → Main configuration file**
Controls Cypress behavior: base URL, test file patterns, timeouts, etc.
```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // plugins go here
    },
  },
});

```
Now instead of writing cy.visit('http://localhost:3000/login'),
you can just write:
```
cy.visit('/login')
```
---

# Building Blocks of a Cypress Test

**describe()** : Groups tests together.
- Think of it like a folder with a name. Example: "Login Tests".

**it()** : A single test case.
- Think of it like a file inside that folder. Example: "should log in with valid user".

**Cypress commands (cy)**
- These are the actions Cypress does in the browser.
```
cy.visit() : open a webpage
cy.get()   : find an element
.click()/.type() : interact with it
.should()  : check something
```
