describe('Admin User', () => {
  beforeEach(() => {
    
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
          cy.visit('http://localhost:5173/admin')
  });
  
    it('should display Login input AdminID and Password',() => {
          //Input name instead of email
          cy.get('#email').should('be.visible').type('admin');
          cy.get('#password').should('be.visible').type('*');
          cy.get('[class="btn btn-primary btn-block"]').click();
          // cy.wait(2000);
          cy.get('#email').clear();
          cy.get('#password').clear();
          //Input right email but wrong password 
          cy.get('#email').should('be.visible').type('admin@ictdu.com');
          cy.get('#password').should('be.visible').type('12345678');
          cy.get('[class="btn btn-primary btn-block"]').click();
          // cy.wait(2000);
          cy.get('#email').clear();
          cy.get('#password').clear(); 
          //Input right email and password
          cy.get('#email').should('be.visible').type('admin@ictdu.com');
          cy.get('#password').should('be.visible').type('*');
          cy.get('[class="btn btn-primary btn-block"]').click();

          //Student Reservation
          cy.get('.navbar-nav').contains('a.nav-link', 'Student Reservation').click();
          // cy.wait(2000);
          cy.get('.navbar-nav').contains('a.nav-link', 'History').click();
          // cy.wait(2000);
          cy.get('.navbar-nav').contains('a.nav-link', 'Report').click();

          //Add student
          cy.get('.navbar-nav').contains('a.nav-link', 'Students').click();
          cy.get('#addS').click();
          
          //Create Students
          cy.get('#name').should('be.visible').type('autotest1');
          cy.get('#courseSelect').select('BSCS');
          cy.get('#email').should('be.visible').type('autotest1@example.com');
          cy.get('#phone').should('be.visible').type('09123456789');
          cy.get('#pass').type('123456789');
          cy.get('[class="btn btn-success"]').click();


          cy.get('.navbar-nav').contains('a.nav-link', 'Students').click();
          cy.wait(2000);
          cy.contains('Logout').click();
      });          
      
});




describe('Login Page', () => {
  beforeEach(() => {
    
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:5173/')
  });
  
    it('should display Login input StudentID and Password',() => {
      //Input name instead of email
          cy.get('#email').should('be.visible').type('123');
          cy.get('#password').should('be.visible').type('*');
          cy.get('[class="btn btn-primary btn-block"]').click();
          cy.wait(3000);
          cy.get('#email').clear();
          cy.get('#password').clear();
      //Input right email but wrong password
          cy.get('#email').should('be.visible').type('autotest1@example.com');
          cy.get('#password').should('be.visible').type('12345678');
          cy.get('[class="btn btn-primary btn-block"]').click();
          cy.wait(3000);
          cy.get('#email').clear();
          cy.get('#password').clear(); 
      //Input right email and password
          cy.get('#email').should('be.visible').type('autotest1@example.com');
          cy.get('#password').should('be.visible').type('123456789');
          cy.get('[class="btn btn-primary btn-block"]').click();      


        //Click the reservation
          cy.contains('Reservation').click();
        //Click Add Reservation
          cy.contains('Add Reservation').click();
        //Not fill all the blank
          cy.contains('Save').click();
          cy.wait(2000);
        //Fill all the blank
          cy.get('.form-control').should('be.visible').eq(0) .type('Example1');
          cy.get('.form-control').should('be.visible').eq(1) .type('IT Head');
          cy.get('.form-control').should('be.visible').eq(2) .type('10');
          cy.get('.form-control').should('be.visible').eq(3).click()
          .then(() => {
          const selectedDate = '2024-05-10';
          cy.get('input[type="date"]').clear().type(selectedDate);
        });
        
          cy.get('.form-control').eq(4).should('be.visible').click()
          .then(() => {
          const selectedTime = '13:00'; 
          cy.get('input[type="time"]').clear().type(selectedTime);
        });
          cy.get('.form-control').should('be.visible').eq(5) .type('Meeting');
          cy.get('.btn.btn-success').should('be.visible').click();
          cy.wait(1000);

          cy.contains('Home').click();
          cy.wait(2000);
          cy.contains('Reservation').click();

        //logout the account
          cy.contains('Logout').click();
      });
      

});

describe('Admin check the reservation', () => {
  beforeEach(() => {
    
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
          cy.visit('http://localhost:5173/admin')
  });
  
    it('should display Login input AdminID and Password',() => {


          cy.get('#email').should('be.visible').type('admin@ictdu.com');
          cy.get('#password').should('be.visible').type('*');
          cy.get('[class="btn btn-primary btn-block"]').click();

          //Student Reservation
          cy.get('.navbar-nav').contains('a.nav-link', 'Student Reservation').click();
          cy.wait(2000);
          //Click Accept
          cy.get('tr').eq(1).find('button.btn-primary').click();
          cy.get('.navbar-nav').contains('a.nav-link', 'History').click();
          cy.wait(2000);

          //Add student
          cy.contains('Logout').click();
      });          
      
});

describe('Login the Student to check the reserve report', () => {
  beforeEach(() => {
    
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
          cy.visit('http://localhost:5173/')
  });
  
    it('should display Login input AdminID and Password',() => {


          cy.get('#email').should('be.visible').type('autotest1@example.com');
          cy.get('#password').should('be.visible').type('123456789');
          cy.get('[class="btn btn-primary btn-block"]').click();   

          cy.contains('Reservation').click();
          cy.wait(2000);

          //Add student
          cy.contains('Logout').click();
      });          
      
});
