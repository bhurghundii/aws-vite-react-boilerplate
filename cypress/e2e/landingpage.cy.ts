/// <reference types="cypress" />

describe("load app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("test: load the landing page experience", () => {
    cy.contains("This is your landing page");
  });

  it("test: load the navbar with an option to sign in", () => {
    cy.get("[id$=user_menu]").click();
    cy.contains("Sign In");
  });
});
