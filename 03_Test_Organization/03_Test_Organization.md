# Test Organization

## **Test Suite (describe)**

A container for grouping related test cases. Makes tests easier to organize (like chapters in a book). You can nest multiple describe() blocks. Usually written with a title string + a callback function.
```
describe('Login Page Tests', () => {
  // test cases will go inside here
})
```
Imagine describe is like a folder labeled “Login Page Tests.” Inside that folder, you keep multiple test files (it blocks).

## **Test Case (it)**

A single test (checks one thing). Always inside a describe() (or top level). Should be small, independent, and clear. Each it() is like one exam question.
```
describe('Login Page Tests', () => {
  it('should show login form', () => {
    cy.visit('/login')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
  })

  it('should log in with valid credentials', () => {
    cy.visit('/login')
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    cy.get('#login-btn').click()
    cy.url().should('include', '/dashboard')
  })
})
```
Each it is like a task inside the folder. For example:
- Task 1: Check login form is visible
- Task 2: Check login works with valid credentials

## **Nesting & Structure**

You can have multiple describes nested
```
describe('E-commerce App', () => {
  describe('Product Page', () => {
    it('should show product list', () => {
      cy.visit('/products')
      cy.get('.product').should('have.length.greaterThan', 0)
    })
  })

  describe('Cart Page', () => {
    it('should allow adding items to cart', () => {
      cy.visit('/products')
      cy.get('.add-to-cart').first().click()
      cy.get('#cart-count').should('contain', '1')
    })
  })
})
```
---

## **Hooks in Cypress**

Hooks are special functions you put inside a describe block to control what happens before/after your tests.

**1. before()**

Runs once before all tests in the suite. (ex : Like unlocking the exam hall before all students enter)

```
describe('User Tests', () => {
  before(() => {
    // runs ONCE before all tests
    cy.log('Setup database with test users')
    cy.request('POST', '/api/reset-db')
  })

  it('should login user', () => {
    // test code
  })

  it('should update profile', () => {
    // test code
  })
})
```

**2. beforeEach()**

Runs before every single test. (Like checking each student’s ID before they start their exam.)
```
describe('Dashboard Tests', () => {
  beforeEach(() => {
    // runs BEFORE every test
    cy.visit('/dashboard')
  })

  it('should show user profile', () => {
    cy.contains('Profile').should('be.visible')
  })

  it('should show recent activity', () => {
    cy.contains('Recent Activity').should('be.visible')
  })
})
```

**3. afterEach()**

Runs after every single test. (Ex : Like collecting each student’s answer sheet after their exam)
```
describe('Cart Tests', () => {
  afterEach(() => {
    // cleanup after each test
    cy.log('Clearing cart after test')
    cy.request('POST', '/api/clear-cart')
  })

  it('should add item to cart', () => {
    // test add item
  })

  it('should remove item from cart', () => {
    // test remove item
  })
})
```

**4. after()**

Runs once after all tests in the suite. ( Ex : Like locking the exam hall after all students finish)
```
describe('Report Tests', () => {
  after(() => {
    // runs ONCE after all tests
    cy.log('Generating final test report')
  })

  it('should create report', () => {
    // test
  })

  it('should download report', () => {
    // test
  })
})
```

NOTE : 

before() → beforeEach() → it() → afterEach() → after()
```
+-----------+
| before()  |     → runs once before all tests
+-----------+
    |
    v
+--------------+
| beforeEach() |  → before Test 1
+--------------+
       |
       v
+---------+
| it("1") |       → Test case 1
+---------+
       |
       v
+--------------+
| afterEach()  |  → after Test 1
+--------------+
    |
    v
+--------------+
| beforeEach() |  → before Test 2
+--------------+
       |
       v
+---------+
| it("2") |       → Test case 2
+---------+
       |
       v
+--------------+
| afterEach()  |  → after Test 2
+--------------+
    |
    v
+----------+
| after()  |      → runs once after all tests
+----------+
```
---

## **Reusing Code with Custom Commands**

Cypress allows you to add your own commands using ```Cypress.Commands.add('commandName', callbackFn)```. These custom commands can then be reused across all your tests.

Why use Custom Commands?
- Remove repeated code
- Keep tests clean & readable
- Centralize logic (change in one place, affects all tests)
- Make tests feel like natural language

**Example 1: Login (Most Common)**

Imagine you need to log in before many tests, without custom command:
```
it('should login user', () => {
  cy.visit('/login')
  cy.get('#username').type('john')
  cy.get('#password').type('123456')
  cy.get('button[type="submit"]').click()
})
```
If you repeat this in 10 test cases, it’s messy

With Custom Command : Create in cypress/support/commands.js
```
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login')
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button[type="submit"]').click()
})
```

Now use the above code in test file
```
it('should login user', () => {
  cy.login('john', '123456')   // reusable
})
```

**Example 2: Add to Cart**

Instead of repeating steps for adding product:
```
cy.get('.product-card').first().click()
cy.get('button.add-to-cart').click()
```


With Custom Command : Create in cypress/support/commands.js
```
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains('.product-card', productName).within(() => {
    cy.get('button.add-to-cart').click()
  })
})
```

Use in test:
```
it('should add multiple products to cart', () => {
  cy.addToCart('Laptop')
  cy.addToCart('Headphones')
})
```

Example 3: API Reuse

Custom command for resetting DB
```
Cypress.Commands.add('resetDB', () => {
  cy.request('POST', '/api/reset-db')
})
```

Usage in test
```
beforeEach(() => {
  cy.resetDB()
})

```

**Visual block diagram of flow**
```
Test File (it)
      |
      v
+------------------+
| cy.login('john') |   <-- you call custom command
+------------------+
      |
      v
+----------------------------------------------------+
| Cypress goes to commands.js and runs this code:    |
| visit /login → type username → type password → click|
+----------------------------------------------------+
```
---

## **Fixtures in Cypress**

Fixtures, files where you store test data (like users, products, settings). These are usually JSON files kept in the cypress/fixtures folder. Instead of hardcoding values inside your test, you reuse clean data from fixtures.

Think of cy.fixture() like asking Cypress:

"Hey, please go to the fixtures folder, pick the file called user.json, and give me its content as an object so I can use it."

So the connection happens because:

Cypress knows by default that cy.fixture('file') looks into cypress/fixtures/.

The .json is automatically converted into a JavaScript object.

Why use Fixtures?
- Centralized test data (easy to update)
- Cleaner & shorter test files
- Can reuse same data across multiple tests
- Useful for login details, product info, mock API responses

Example 1: User Login with Fixture

Step 1: Create fixture file : cypress/fixtures/user.json
```
{
  "username": "john_doe",
  "password": "123456"
}
```

Step 2: Use fixture in test
```
describe('Login Test', () => {
  it('logs in with fixture data', () => {
    cy.fixture('user').then((user) => {   // loads user.json
      cy.visit('/login')
      cy.get('#username').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('button[type="submit"]').click()
    })
  })
})

```
- cy.fixture('user') → Cypress looks inside cypress/fixtures/ folder. Finds user.json file.
- Loads the JSON as a JavaScript object. Gives it to you inside (user) => { ... }.

**Block diagram**
```
cypress/fixtures/user.json
      |
      v
+-----------------------------+
| {                           |
|   "username": "john_doe",   |
|   "password": "123456"      |
| }                           |
+-----------------------------+
      |
      v
cy.fixture('user')
      |
      v
(user) object in test
      |
      v
Test uses -> user.username  → "john_doe"
           -> user.password  → "123456"
```

Example 2: Multiple Users

Step 1: Create fixture file : cypress/fixtures/user.json
```
[
  { "username": "admin", "password": "admin123" },
  { "username": "guest", "password": "guest123" }
]
```

Step 2: Use fixture in test
```
it('login with multiple users', () => {
  cy.fixture('users').then((users) => {
    users.forEach((user) => {
      cy.visit('/login')
      cy.get('#username').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('button[type="submit"]').click()
      cy.contains('Welcome').should('exist')
    })
  })
})
```

Example 3: Profile Settings

Step 1: Create fixture file : cypress/fixtures/profile.json
```
{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "9876543210"
}
```

Step 2: Use fixture in test
```
it('fills profile form with fixture data', () => {
  cy.fixture('profile').then((profile) => {
    cy.visit('/profile')
    cy.get('#name').type(profile.name)
    cy.get('#email').type(profile.email)
    cy.get('#phone').type(profile.phone)
    cy.get('button.save').click()
    cy.contains('Profile updated').should('be.visible')
  })
})
```

