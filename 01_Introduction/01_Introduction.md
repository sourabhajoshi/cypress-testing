# cypress-testing

Cypress is a open/paid automation front-end testing tool designed for modern web applications(means supports React or Vue or Angular) and APS's.

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
