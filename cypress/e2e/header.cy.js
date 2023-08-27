describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('links to the correct pages', () => {
    // cy.visit("/")
    // cy.get('[data-test="logo"]').click()
    cy.getBySel('logo').click();
    cy.location('pathname').should('eq', '/');

    // cy.getBySel("nav-link-search").click()
    // EDIT: changed due to different code
    cy.getBySel('nav-link-search').find('input').first().type('{enter}');
    cy.location('pathname').should('eq', '/search');
  });

  it.only('the search bar returns the correct search results', () => {
    // cy.visit("/")
    cy.getBySel('search-input').eq(0).type('code{enter}');
    cy.get('[data-test="search-items"]').within(() => {
      cy.get('[data-test="product-name"]').should('contain', 'Code shirt');
      cy.get('[data-test="price"]').should('contain', '$25.00');
    });
  });
});
