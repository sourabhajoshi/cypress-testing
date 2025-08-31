# Core Cypress Commands

## **Cypress Navigation Commands.**

Cypress that let you move around web pages

**1. cy.visit()**

Open a webpage.

Imagine you open Chrome and type ```www.amazon.com``` in the address bar, then press Enter.

That’s what Cypress does with cy.visit('https://amazon.com').
```
cy.visit('https://example.cypress.io')   // open this website
```

**2. cy.url()**

Check the current URL of the page.

After logging into Gmail, you look at the address bar and see it says ```https://mail.google.com/mail/u/0/#inbox```

That’s what cy.url() does — it reads the address bar for you.
```
cy.visit('https://example.cypress.io')
cy.url().should('include', 'example.cypress.io')   // check URL
```

**3. cy.go()**

Go back or forward, like the browser’s arrows.

You’re shopping:
- You go from Home → Product Page → Cart.
- Then you click the Back arrow to return to Product Page.
- Then you click the Forward arrow to go back to Cart.

That’s what Cypress does with cy.go('back') and cy.go('forward')
```
cy.visit('https://example.cypress.io')
cy.contains('Commands').click()   // click a link to go to another page
cy.url().should('include', '/commands')

cy.go('back')                     // go back
cy.url().should('eq', 'https://example.cypress.io/')

cy.go('forward')                  // go forward
cy.url().should('include', '/commands')

```
---

## **Cypress Locating elements commands.**

Cypress finds things on the page (like buttons, inputs, links, headings) so we can interact with them

**1. cy.get(selector)**

Select element using CSS selectors like #id, .class, or tag.

Tell a friend: Find the box with id username and type my name in it.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('#email1').type('joshi@gmail.com')   // locate by id
cy.get('.action-btn').click()                // locate by class
```

Imagine you search in a book using the index page (#id = unique page, .class = group of topics, tag = general headings).
```
cy.get('#username')   // find element with id="username"
cy.get('.btn-primary') // find element with class="btn-primary"
cy.get('input')       // find all <input> tags
```

**2. cy.contains(text)**

Find an element by its visible text.

You’re on a website and say: “Click the button that says Login.”
```
cy.visit('https://example.cypress.io')
cy.contains('Commands').click()              // find by text
cy.contains('Kitchen Sink').should('be.visible')
```

Like scanning a page for a specific word instead of knowing where it is.
```
cy.contains('Login')     // finds element with text "Login"
cy.contains('Submit')    // finds button or link with "Submit"
```

**3. cy.find(selector)**

Find an element inside another element.

Imagine you tell a friend: “Inside the form, find the first input box and type Joshi.”

```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('form').find('input').first().type('Alex')
```

Like searching for a pen inside your bag (not the whole house).
```
cy.get('.form').find('input')  
// find <input> elements only inside element with class="form"
```

**4. Extra helpers with get()**

Narrow down when there are multiple matches. 

or

Pick one element from a group of matches

You’re looking at a shopping list: “Pick the first item… pick the last item… pick the 3rd item.”

```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-list li').first().should('contain', 'apples')   // first item
cy.get('.action-list li').last().should('contain', 'bananas')   // last item
cy.get('.action-list li').eq(2).should('contain', 'oranges')    // 3rd item
```
Like choosing the first, last, or nth candy from a box.
```
cy.get('li').first()   // first <li>
cy.get('li').last()    // last <li>
cy.get('li').eq(2)     // 3rd <li> (index starts from 0)
```
**5. cy.within()**

Run multiple find commands inside one specific element.

Like saying “search only in this drawer, not the whole cupboard.”
```
cy.get('.login-form').within(() => {
  cy.get('input[name="username"]').type('admin')
  cy.get('input[name="password"]').type('1234')
})

```
---

## **Cypress Actions commands.**

**1. .click()**

Click on a button, link, or any clickable element.

Like you actually press a button with your finger.
```
cy.get('button').click()    // clicks the first <button>
cy.contains('Login').click() // clicks button with text "Login"
```

You go to Amazon and click the “Add to Cart” button.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-btn').click()   // clicks a button
```

**2. .type()**

Type text into an input field (like username, password, search box).

Like you typing on keyboard.
```
cy.get('#username').type('admin')  // type 'admin' into input
cy.get('#password').type('123456') // type password
```

You open Gmail and type your email into the Email input box.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('#email1').type('joshi@gmail.com')   // types email
```

**3. .select()**

Choose an option from a `<select>` dropdown list.

On a travel site, you pick “India” from the country dropdown.
```
cy.get('#country').select('India')     // select by text
cy.get('#country').select('IN')        // select by value="IN"
```

you pick apple or bananas from the country dropdown
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-select').select('apples')       // select by text
cy.get('.action-select').select('bananas')      // select another option
```

**4. .check() / .uncheck()**

Tick or untick / Check or Uncheck checkboxes and radio buttons.

ticking or unticking a checkbox on a form.
```
cy.get('#terms').check()    // check terms checkbox
cy.get('#subscribe').uncheck() // uncheck subscribe checkbox
cy.get('input[type="radio"]').check('male') // select radio option
```

When signing up for a newsletter, you tick “I agree to terms”.
Later, you untick it.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-checkboxes [type="checkbox"]').first().check()   // tick
cy.get('.action-checkboxes [type="checkbox"]').first().uncheck() // untick
```

**5. .clear()**

Clear the value of an input field (remove all text from an input/textarea).

Like pressing backspace until the field is empty.
```
cy.get('#username').clear()         // clears text field
cy.get('#username').type('newUser') // type new text after clear
```

You typed the wrong email → you press backspace to clear it, then type the correct one.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('#email1').type('wrong@email.com')
cy.get('#email1').clear().type('correct@email.com')
```

---

## **Cypress Assertion commands.**

Assertions are just checks, “I expect this to be true.”

**1. .should()**

The main way to check conditions about an element or page. Cypress waits until the condition inside .should() becomes true.

Like telling your friend: “Check if the light is ON.”
```
cy.get('#username').should('be.visible')    // check input is visible
cy.get('h1').should('contain', 'Welcome')  // check text includes "Welcome"
cy.get('#cart-count').should('have.text', '3') // check exact text
```

log into Facebook and check that the text “Welcome, Alex” is visible on the page.
```
cy.visit('https://example.cypress.io')

// check text is visible
cy.contains('Kitchen Sink').should('be.visible')

// check URL contains certain word
cy.url().should('include', 'example.cypress.io')

// check input has correct value
cy.get('#email1').type('alex@example.com')
  .should('have.value', 'alex@example.com')

```

**2. .and()**

Chain multiple checks on the same element. Add more conditions to the same element without repeating cy.get().

This apple is red and fresh.
```
cy.get('#username')
  .should('be.visible')
  .and('have.attr', 'placeholder', 'Enter username')
```

You open YouTube and check that the Search box is both visible and enabled.
```
cy.visit('https://example.cypress.io/commands/actions')

cy.get('#email1')
  .should('be.visible')  // check visible
  .and('have.attr', 'placeholder', 'Email') // check placeholder text
```
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('#email1')
  .should('be.visible')
  .and('have.attr', 'placeholder', 'Email')   // check placeholder text
```
**3. expect()**

Use JavaScript assertions (from Chai library) inside test logic.

Like checking your own work manually with a checklist.
```
expect(2 + 2).to.equal(4)    // plain JS check
cy.get('#cart-count').then(($el) => {
  const count = parseInt($el.text())
  expect(count).to.be.greaterThan(0) // check count > 0
})
```

You check if the number of items in your Amazon cart is exactly 3.
```
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-list li').then((items) => {
  expect(items.length).to.eq(3)   // expect list has 3 items
})
```
**4. .not() (extra useful inside should)**

Check that something does not exist or is not true. Like saying “Make sure the door is not open.”

```
cy.get('#error').should('not.exist')    // element doesn’t exist
cy.get('#submit').should('not.be.disabled') // button is enabled
```

On Gmail, if you log out, you check that the text “Inbox” is not visible anymore.
```
cy.visit('https://example.cypress.io')
cy.contains('Non Existing Text').should('not.exist')  // element should NOT exist
```
You log out of Gmail. Now you want to make sure the “Inbox” text is NOT visible anymore.
```
cy.visit('https://example.cypress.io')

// check something does not exist
cy.contains('Non Existing Text').should('not.exist')

// check input should not be disabled
cy.get('#email1').should('not.be.disabled')
```
---

## **Cypress Waiting commands**

Cypress is smart, it automatically waits for things (no need for sleep(2000) like Selenium). But sometimes you control waiting with cy.wait().

**1. Auto-waiting (built-in feature)**

Cypress retries commands until the element is found or a timeout happens.

Cypress automatically waits for elements to appear, become visible, or be actionable (enabled). You don’t need to write sleep() like in Selenium.

Like waiting at a restaurant — the waiter serves food when it’s ready, you don’t keep shouting “Is it ready?”

```
cy.get('#submit').click() // Cypress waits until #submit is found & clickable
cy.get('.success-message').should('be.visible') // waits until visible
```
NOTE : No need to add sleep() → Cypress will keep checking until the input is ready.

**2. cy.wait(ms)**

Pause the test for a fixed number of milliseconds.

Imagine you open Netflix → it takes 3 seconds for the homepage banner to appear. You force yourself to wait 3 seconds before doing anything.

```
cy.visit('https://example.cypress.io')
cy.wait(3000)   // wait 3 seconds (not recommended usually)
cy.get('.action-btn').click()
```
NOTE :
- Rarely! Only if dealing with animations, loaders, or very slow apps where no other wait works.
- Not reliable, if your app loads slower/faster, tests may fail.

**3. cy.wait('@alias') → Wait for API call**

Wait until a specific API request finishes before continuing.

You log into Instagram. After clicking Login, the app makes an API call to /login. You want to wait until that call is finished before checking if the feed is visible.
```
// Intercept login API
cy.intercept('POST', '/login').as('loginRequest')

cy.visit('/login')
cy.get('#username').type('alex')
cy.get('#password').type('password')
cy.get('button[type=submit]').click()

// Wait for API to finish
cy.wait('@loginRequest')

// Now check dashboard
cy.url().should('include', '/dashboard')
```

When to use :
- When testing data that comes from the backend.
- Ensures test waits exactly for the API response, not random time.

NOTE : 
- For API calls (login, fetch data, submit forms).
- For ensuring backend response arrives before checking UI.
- Most reliable way to wait for network-driven apps.

---

## **Cypress Network / API commands**

**1. cy.request() : Send API requests directly**

Call an API directly without using the browser UI. 

Sends an HTTP request from Cypress (Node) to your server. It doesn’t use the browser UI — it’s like curl/fetch run by the test runner.

Key options: method, url, body, headers, auth, form: true, failOnStatusCode: false (allow non-2xx responses).

Instead of opening a website, typing username & password, and clicking Login, you send a direct request to the backend : “Hey server, log me in with these credentials.”


Example test (GET request)

```
cy.request('GET', '/api/users').then((res) => {
  expect(res.status).to.eq(200)         // check response code
  expect(res.body).to.have.length(5)    // check body data
})
```

```
cy.request('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    expect(response.status).to.eq(200)     // check status code
    expect(response.body).to.have.property('id', 1) // check response body
  })
```
Example test (POST request)
```
cy.request('POST', '/api/login', {
  username: 'admin',
  password: '1234'
}).then((res) => {
  expect(res.status).to.eq(200)
  cy.setCookie('session_id', res.body.sessionId)  // use cookie later
})
```

```
cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
}).then((response) => {
  expect(response.status).to.eq(201)      // created successfully
  expect(response.body).to.have.property('title', 'foo')
})
```
When to use:
- To test APIs without UI.
- To set up data before running UI tests (e.g., create a user, login via API).
- To check backend health quickly.

**2. cy.intercept() → Spy / Mock network requests**

Watch or fake (mock) API calls that the frontend makes. Think of it as a spy or fake server.

When you log in on Instagram, the app calls /login.
- You can spy on it → “Did the login API get called? What was the response?”
- Or you can mock it → “Pretend the login succeeded instantly, without calling the real server.”

Example (Spy on request):
```
// Watch GET /posts
cy.intercept('GET', '/posts').as('getPosts')

cy.visit('/posts')
cy.wait('@getPosts').its('response.statusCode').should('eq', 200)
```
```
cy.intercept('GET', '/api/products').as('getProducts') // watch request

cy.visit('/products')
cy.wait('@getProducts').its('response.statusCode').should('eq', 200)
```

Example (Mock request with fake data):
```
// Mock API response
cy.intercept('GET', '/posts', {
  statusCode: 200,
  body: [{ id: 1, title: 'Mocked Post' }],
}).as('mockPosts')

cy.visit('/posts')

// Now the page will show "Mocked Post" instead of real API data
cy.contains('Mocked Post').should('be.visible')
```
```
cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as('getProducts')

cy.visit('/products')
cy.wait('@getProducts')
cy.get('.product').should('have.length', 3)  // checks 3 items from fixture
```

When to use:
- Spy: Check if frontend correctly makes API calls.
- Mock: Control test environment → avoid depending on unstable APIs or slow backend.
- Test error cases (simulate 500 server error).


---

## **Cypress Debugging / Helpers commands**

**1. .debug()**

What it does: Pauses the test at that command and prints details to browser console (DevTools).

Like saying “Stop here and show me the element details.”
```
cy.get('#username').debug()   // shows element details in console
```

**2. .pause()**

What it does: Pauses the whole test until you manually click resume in Cypress Test Runner.

Like hitting a pause button on Netflix.
```
cy.get('#login-btn').click()
cy.pause()   // test stops here until you continue
cy.get('#dashboard').should('be.visible')
```

**3. .log()**

What it does: Prints custom messages in Cypress Command Log (the left panel in runner).

Like adding sticky notes to your test run.
```
cy.log('Now checking the login button')
cy.get('#login-btn').should('be.visible')
```

**4. .screenshot()**

What it does: Takes a screenshot of the page or a specific element.

Like taking a photo to remember the state.
```
cy.screenshot()                    // full page screenshot
cy.get('#login-form').screenshot() // only form area
```

**5. .title()**

What it does: Gets the page title (useful for quick checks).

Like looking at the book’s title to confirm you opened the right one.
```
cy.title().should('include', 'Dashboard')
```

**6. cy.url()**

What it does: Gets the current browser URL.

Like checking the address bar in Chrome.
```
cy.url().should('include', '/dashboard')
```

**7. .its()**

What it does: Accesses a property of an object Cypress yields.

Like opening a box and picking out one item.
```
cy.get('@userData').its('body.name').should('eq', 'Alice')
```

**8. .invoke()**

What it does: Call a jQuery function or get element property directly.

Like pressing a button on a gadget to get its hidden info.
```
cy.get('#username').invoke('attr', 'placeholder').should('eq', 'Enter username')
```


---

## Cheat Sheet

| Command                 | What it does                                                 | Example                                                                                                                                   | Real-life memory trick                                                |
| ----------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **`cy.get(selector)`**  | Finds element(s) using CSS selector (`#id`, `.class`, `tag`) | `cy.get('#username')` → input with id username                                                                                            | Like searching by address (house number, street, or type of building) |
| **`cy.contains(text)`** | Finds element by visible text                                | `cy.contains('Login')` → button or link with "Login"                                                                                      | Like pressing **Ctrl+F** in a document                                |
| **`cy.find(selector)`** | Finds elements **inside another element**                    | `cy.get('.form').find('input')` → inputs inside `.form`                                                                                   | Like searching for keys inside your **bag only**, not whole house     |
| **`cy.first()`**        | Gets the **first element** from a list                       | `cy.get('li').first()` → first list item                                                                                                  | Pick the **first candy** from the box                                 |
| **`cy.last()`**         | Gets the **last element** from a list                        | `cy.get('li').last()` → last list item                                                                                                    | Pick the **last candy** from the box                                  |
| **`cy.eq(n)`**          | Gets the element at index `n` (0-based)                      | `cy.get('li').eq(2)` → 3rd list item                                                                                                      | Pick the **nth candy**                                                |
| **`cy.within()`**       | Restricts all commands to **inside a parent element**        | `js cy.get('.login-form').within(() => { cy.get('input[name="username"]').type('admin') cy.get('input[name="password"]').type('1234') })` | Like saying “search only in this **drawer**, not the whole cupboard”  |





