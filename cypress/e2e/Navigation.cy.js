describe('Navigation Testing', () => {
  it("Home Page", () => {
    cy.visit("localhost:3000");
  }),

  it("About Page", () => {
    cy.visit("localhost:3000");

    cy.contains("About").click();
    cy.url().should("include", "/about");
  }),



  it("Posts Page", () => {
    cy.visit("localhost:3000");

    cy.contains("Posts").click();
    cy.url().should("include", "/posts");

    cy.contains("First Post").click();
    cy.url().should("include", "/posts/1");
  });
})