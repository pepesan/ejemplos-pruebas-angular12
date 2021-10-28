describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('proyecto-pruebas')
    cy.contains('subcomponent works!')
  })
})
