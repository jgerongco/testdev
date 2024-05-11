describe('ICTDU Space', () => {

    beforeEach(() => {
    
    cy.viewport(1000, 660)
    
    // Visit the login page before each test
    
    cy.visit('http://localhost:5173/login');
    
    });
    
    it('should display Login input StudentID and Password', () => {
    
    // Click the login button without filling in any fields cy.get('[btn btn-danger]').click();
    
    // Verify if error message is displayed
    
    // Wait for 5 seconds to ensure error message disappears
    
    cy.wait(5000);
    
    // Verify if error message disappears
    
    cy.get('[login]').should('not.exist');
    
    it('should display error message for invalid username and valid password', () => {
    
    // Fill in invalid username and valid password
    
    cy.get('[export default]').type('invalid@example.com');-
    
    cy.get('[export default]').type('12345');
    
    // Click the login button
    
    cy.get('[data-testid-login-button]').click();
    
    // Verify if error message is displayed
    
    cy.get('[data-testid-error-message]').should('be.visible');
    
    // Wait for 5 seconds to ensure error message disappears
    
    cy.wait(5000);
    
    // Verify if error message disappears
    
    cy.get('[data-testid-error-message]').should('not.exist');
    
    });
    
    it('should login with valid username and password', () => {
    
    // Fill in valid username and password
    
    cy.get('[data-testid-email]').type('student@example.com');
    
    cy.get('[data-testid-password]').type('12345');
    
    // Click the login button
    
    cy.get('[data-testid-login-button]').click();
    
    // Verify if redirected to the next page
    
    cy.url().should('include', '/'); // Update the URL if the redirection is different
    
        });
    
    });

});
