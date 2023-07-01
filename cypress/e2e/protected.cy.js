describe("Test Post Sign up", () => {
  before(() => {
    cy.visit("http://localhost:5173/");
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("should be logged in", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("you've logged in!");
  });
});
