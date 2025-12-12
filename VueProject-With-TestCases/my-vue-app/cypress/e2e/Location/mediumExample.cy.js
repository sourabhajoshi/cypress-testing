describe('Nedium example', ()=>{

  beforeEach(()=>{
    cy.visit('/locating/mid')
  })

  it('Locate elements using parent → child combinators', ()=>{

      cy.get('.product-list > .product-item:first-child .name').should('contain', 'Laptop')
  })

  it('Locate elements using custom attribute (data-id)', ()=>{
    cy.get('[data-id="102"] .name').should('contain', 'Keyboard')
  })

  it('Locate elements using contains', ()=>{
    cy.get('[data-id="103"] .name').should('contain', 'Mouse')
    cy.get('[data-id="103"] .price').should('contain', '$25')
  })
})
