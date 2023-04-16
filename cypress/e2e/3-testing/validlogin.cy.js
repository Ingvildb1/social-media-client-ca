describe("Authenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("header [data-auth='login']").click({ force: true });
  });

  it("CAN login with valid credentials and store the token in local storage", () => {
    cy.get("#loginForm #loginEmail").type("ingvildtest@noroff.no");
    cy.get("#loginForm #loginPassword").type("test1234");
    cy.get('#loginForm button[type="submit"]').click({ force: true });

    cy.wait(1000);
  });
});
