/*
    Task 1: Locate elements using ID
    Select #nameInput
    Type any text
    Assert value

    Task 2: Locate button using class
    Select .btn-primary
    Assert text contains “Submit”

    Task 3: Locate heading using data-test attribute
    data-test="title"
    Assert heading is visible
*/

describe('Basic component testing using Basic component', () => {
  it('Locate elements using ID', ()=>{
    cy.visit('/locating')
    cy.get('h2').should('contain', 'Locating Command')

    cy.visit('/locating/basic')
    cy.get('h1').should('contain', 'Locating Basic Elements')

    cy.get('#nameInput').type("Joshi Sourabha")
    cy.get("#nameInput").should('have.value', 'Joshi Sourabha')
    cy.get("#submitBtn").click()
  })

  it('Locate button using class', ()=>{
    cy.visit('/locating/basic')
    cy.get('.input-field').type("Sourabha Joshi")
    cy.get('.input-field').should('have.value', "Sourabha Joshi")
    cy.get('.btn-primary').click()
  })

  it('Locate heading using data-test attribute', ()=>{
    cy.visit('/locating/basic')
    cy.get('[data-test="title"]').should('contain', 'Locating Basic Elements')
  })


});
