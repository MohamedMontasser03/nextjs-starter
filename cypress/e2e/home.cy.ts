/// <reference types="Cypress" />

context("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the home page", () => {
    cy.get("h1").should("contain", "Welcome");
  });
});
