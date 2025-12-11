describe("Navigation related test cases visit, url and go", () => {
  it("navigation page test", () => {
    cy.visit("/")
    cy.contains('Navigation').click()
    cy.url().should('include', '/navigation')
    cy.go(-1)
    cy.url().should('include', "/")

    cy.visit('/navigation')
    cy.get("h2").should('contain', 'Navigation Command')

    cy.contains('Locating Elements').click()
    cy.url().should('contain', 'locating')
    cy.go(-1)
    cy.go(1)
  })
})

describe("Navigation related test cases reload and title", () => {
  it("navigation page test", () => {
    cy.visit('/navigation')
    cy.get('h2').should('contain', 'Navigation Command')
    cy.reload()
    cy.title().should('eq', 'Vite App')
    cy.get('h2').should('contain', 'Navigation Command')

  })
})
