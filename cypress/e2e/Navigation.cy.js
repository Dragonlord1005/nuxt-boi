describe("Navigation Testing", () => {
  it("Home Page", () => {
    cy.visit("localhost:3000");
  }),
    it("About Page", () => {
      cy.visit("localhost:3000");

      cy.contains("About").click();
      cy.url().should("include", "/about");
    }),
    it("Blog Page", () => {
      cy.visit("localhost:3000");

      cy.contains("Blog").click();
      cy.url().should("include", "/blog");

      cy.contains("First Post").click();
      cy.url().should("include", "/blog/1");
    });
});
