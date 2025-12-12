describe('Basic element testing', ()=>{
  beforeEach(()=>{
    cy.visit('/action/basic')
  })

  it('Type name', ()=>{

      cy.url().should('contain', '/action/basic')
      cy.get('h2').should('contain', 'Basic Actions');
      cy.get('.name-input').type("Sourabha");
      cy.get('.submit-btn').click()
      cy.get('.result').should('contain', 'Hello, Sourabha')

  })
})
