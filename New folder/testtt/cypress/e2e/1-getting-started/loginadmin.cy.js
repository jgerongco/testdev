describe('Login Page', () => {
  beforeEach(() => {
    
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/admin')
  });
  
    it('should display Login input StudentID and Password',() => {
      //Input name instead of email
      cy.get('#email').should('be.visible').type('admin');
      cy.get('#password').should('be.visible').type('*');
      cy.get('[class="btn btn-primary btn-block"]').click();
      //cy.wait(3000);
      cy.get('#email').clear();
      cy.get('#password').clear();
      //Input right email but wrong password 
      cy.get('#email').should('be.visible').type('admin@ictdu.com');
      cy.get('#password').should('be.visible').type('12345678');
      cy.get('[class="btn btn-primary btn-block"]').click();
      //cy.wait(5000);
      cy.get('#email').clear();
      cy.get('#password').clear(); 
      //Input right email and password
      cy.get('#email').should('be.visible').type('admin@ictdu.com');
      cy.get('#password').should('be.visible').type('*');
      cy.get('[class="btn btn-primary btn-block"]').click();

      //Student Reservation
      cy.get('.navbar-nav').contains('a.nav-link', 'Student Reservation').click();
      //Click Accept
      // cy.get('.d-flex.gap-1 button.btn-primary').first().click();
      //Decline
      // cy.get('.d-flex.gap-1 button.btn-danger').first().click();
      //Reschedule
      // cy.get('.d-flex.gap-1 button.btn-warning').first().click();

          ////
          //Accept the example 2 decline example 1
          cy.get('tr').eq(1).find('button.btn-primary').click();
          
          cy.get('tr').eq(2).find('button.btn-danger').click();
          cy.wait(2000);

          cy.get('.navbar-nav').contains('a.nav-link', 'History').click();
          cy.wait(3000);

          
          //Back to Student Reservation to change
          cy.get('.navbar-nav').contains('a.nav-link', 'Student Reservation').click();
          //Reschedule example 2 accept example1
          cy.get('tr').eq(1).find('button.btn-warning').click();
          cy.get('tr').eq(2).find('button.btn-primary').click();
          cy.wait(2000);


          //Click History
          cy.get('.navbar-nav').contains('a.nav-link', 'History').click();
          cy.wait(2000);
          
          cy.contains('Logout').click();


      });
    
          
      
});



