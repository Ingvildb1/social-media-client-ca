describe("NOT authenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("header [data-auth='login']").click({ force: true });
  });

  it("CAN NOT log in with invalid credentials and is shown a message", () => {
    cy.get("#loginForm #loginEmail").type("failtest@noroff.no");
    cy.get("#loginForm #loginPassword").type("failtest1234");
    cy.get('#loginForm button[type="submit"]').click({ force: true });
    cy.wait(1000);

    cy.get("#loginForm .btn-close").click();
    cy.on("window:alert", (sr) => {
      expect(sr).to.equal(
        "Your e-mail or password is incorrect. Please try again"
      );
    });
  });
});
