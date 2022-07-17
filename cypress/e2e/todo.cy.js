describe('testing todo', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    // cy.focused().should("have.id","new-todo")
    cy.get("[data-testid=todo-input]").type("hello")
    cy.get("[data-testid=todo-button]").click()
  })
})