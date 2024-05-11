describe('Login Page', () => {
    beforeEach(() => {
      
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:5173/admin')
    });
    
      it('should display Login input StudentID and Password',() => {

        cy.get('#email').should('be.visible').type('admin@ictdu.com');
        cy.get('#password').should('be.visible').type('*');
        cy.get('[class="btn btn-primary btn-block"]').click();

        //

        cy.get('.navbar-nav').contains('a.nav-link', 'Students').click();
        cy.get('a.btn.btn-success.float-end').click();
        //
        cy.get('#name').should('be.visible').type('example1');
        cy.get('#courseSelect').select('BSCS');
        cy.get('#email').should('be.visible').type('example1@example.com');
        cy.get('#phone').should('be.visible').type('09123456789');
        cy.get('#pass').type('123456789');

        cy.get('[class="btn btn-success"]').click();
        //*********************************************************** */ */
        cy.get('.navbar-nav').contains('a.nav-link', 'Students').click();
        cy.wait(3000);
        cy.get('a.btn.btn-success.float-end').click();

        cy.get('#name').should('be.visible').type('example2');
        cy.get('#courseSelect').select('BSCS');
        cy.get('#email').should('be.visible').type('example2@example.com');
        cy.get('#phone').should('be.visible').type('09123456789');
        cy.get('#pass').type('123456789');

        cy.get('[class="btn btn-success"]').click();
        //************************************************************* */
        cy.get('.navbar-nav').contains('a.nav-link', 'Students').click();
  
        });
  
  });