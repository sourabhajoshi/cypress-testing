describe('template spec', () => {
    it('passes', () => {
        cy.visit('/')
        cy.title().should('include', 'Cypress')

        cy.title().then(title => {
            console.log('Page title is:', title)   // Browser/terminal console
            cy.log('Page title: ' + title)         // Cypress UI log
        })
    })
})