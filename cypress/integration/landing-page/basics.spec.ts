/// <reference types="cypress" />

context('Basics', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should display boring title', () => {
    cy.contains('Interesting things are comming').should('exist');
  });

  it('should display boring text', () => {
    cy.contains(
      'Something interesting should appear on this page but until it does this message and a few social links are here to intertain you.'
    ).should('exist');
  });
});
