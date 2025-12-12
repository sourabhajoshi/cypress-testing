describe('Advance element E2E testing', ()=>{
  beforeEach(()=>{
    cy.visit('locating/advance')
  })

  it('Add a new task', ()=>{
    cy.get('.task-input').type("wakeup at 5AM");
    cy.get('.add-btn').click()

    // cy.get('.task-list .task-item').should('contain', 'wakeup at 5AM')
    // cy.contains('.task-item', 'wakeup at 5AM').should('be.visible')
    cy.contains('.task-item', 'wakeup at 5AM').should('be.visible');
  })

  it('Locate dynamically created elements', ()=>{
    cy.get('.task-input').type('Buy milk')
    cy.contains('Add').click()
    cy.contains('.task-list', 'Buy milk').should('be.visible')
  })

  it('Toggle complete', ()=>{
    cy.get('.task-input').type('Buy milk')
    cy.contains('Add').click()
    cy.get('.task-item').should('have.length', 1);
    cy.get('.task-item').last().should('contain', 'Buy milk')
    cy.contains('.task-item', 'Buy milk').find('.complete-btn').click().should('contain', 'Undo');
  })
})
