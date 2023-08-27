describe('Shopping Cart', () => {
  it('users can add products to the cart', () => {
    cy.visit('/');
    cy.getBySel('grid-item').eq(0).click();

    cy.get('[title="Size Small"]').click();
    //
    cy.get('[aria-label="Add item to cart"]').click();
    //
    // cy.get('[aria-label="Cart items: 1"]').contains("1")
    cy.getBySel('cart-items').contains('1');
  });
});
