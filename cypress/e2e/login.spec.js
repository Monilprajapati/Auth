// cypress/e2e/login.spec.js
describe('Login Flow', () => {
    beforeEach(() => {
      cy.visit('/login'); // Visit the login page before each test
    });
  
    it('should login successfully and display the username in the navbar', () => {
      // Define test user credentials
      const email = 'testuser@example.com';
      const password = 'testpassword';
  
      // Enter email and password
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
  
      // Click on the login button
      cy.get('button').contains('Login').click();
  
      // Verify redirection to the home page
      cy.url().should('include', '/home');
  
      // Verify that the username is displayed in the navbar
      cy.get('.navbar-user').should('contain.text', 'testuser');
    });
  });
  