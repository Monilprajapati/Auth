// cypress/e2e/login.spec.js
describe("End to End Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login"); // Visit the login page before each test
  });

  it("should login successfully and display the username in the navbar", () => {
    // Define test user credentials
    const email = "testuser@example.com";
    const password = "testpassword";

    // Enter email and password
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    // Click on the login button
    cy.get("button").contains("Login").click();

    // Verify redirection to the home page
    cy.url().should("include", "/home");

    // Verify that the username is displayed in the navbar
    cy.get(".navbar-user").should("contain.text", "testuser");

    // Verify the "Show Details" button is present and click it
    cy.get("button").contains("Show Details").should("exist").click();

    // Verify the user email is displayed
    cy.get("h2").contains(email).should("be.visible");

    // Click the "Hide Details" button
    cy.get("button").contains("Hide Details").should("exist").click();

    // Verify the user email is hidden
    cy.get("h2").contains(email).should("not.exist");
  });
});
