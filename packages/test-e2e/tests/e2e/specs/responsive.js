const { $, _ } = Cypress

describe('update columns according to viewport width', () => {
  beforeEach(() => {
    cy.visit('/responsive')
  })

  it('has 3 columns on desktop', () => {
    cy.viewport(1440, 480)
    cy.get('.parent').should('exist').should('have.length', 1)
    cy.get('.parent > *').should('exist').should('have.length', 3)
  })

  it('has 2 columns on tablet', () => {
    cy.viewport(720, 480)
    cy.get('.parent').should('exist').should('have.length', 1)
    cy.get('.parent > *').should('exist').should('have.length', 2)
  })

  it('has 1 column on phone', () => {
    cy.viewport(320, 480)
    cy.get('.parent').should('exist').should('have.length', 1)
    cy.get('.parent > *').should('exist').should('have.length', 1)
  })
})
