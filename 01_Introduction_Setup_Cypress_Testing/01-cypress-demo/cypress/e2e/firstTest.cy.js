describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.title().should('include', 'Cypress')
  })
})