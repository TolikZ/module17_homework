describe('test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 2)
  });
  it('can add new todo items', () => {
    cy.get('.new-todo').type(`Моя новая задача {enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .first()
      .should('have.text', 'Моя новая задача')
  });
});