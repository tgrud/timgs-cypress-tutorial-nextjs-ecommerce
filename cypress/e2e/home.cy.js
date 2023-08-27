describe('Home Page', () => {
  it('displays all 3 products on the home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="grid-item"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'JS shirt');
        cy.get('[data-test="price"]').should('contain', '$25.00');
      });

    cy.get('[data-test="grid-item"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Node shirt');
        cy.get('[data-test="price"]').should('contain', '$25.00');
      });

    cy.get('[data-test="grid-item"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Code shirt');
        cy.get('[data-test="price"]').should('contain', '$25.00');
      });
  });
});
