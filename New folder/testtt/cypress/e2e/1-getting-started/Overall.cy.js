describe('Login functionality', () => {
    it('should login with correct credentials', () => {
      cy.visit('https://borrowingsystem.netlify.app/');
      cy.contains('.pink-bg', 'Sign In as Admin').click();
  
      // Wait for elements to be visible and interactable
      cy.get('#admin-user').should('be.visible').type('demo');
      cy.get('#admin-password').should('be.visible').type('demo123');
      cy.get('.loginbutton').should('be.visible').click();
  
      // Verify successful login by checking for dashboard element
      cy.get('.bxs-dashboard').should('be.visible').click();
      cy.get('.bxl-deviantart').should('be.visible').click();
      cy.get('.bx-edit').should('be.visible').click();
    });
  
    it('should not login with incorrect credentials', () => {
      cy.visit('https://borrowingsystem.netlify.app/');
      cy.contains('.pink-bg', 'Sign In as Admin').click();
  
      // Wait for elements to be visible and interactable
      cy.get('#admin-user').should('be.visible').type('demonyo');
      cy.get('#admin-password').should('be.visible').type('demonyo123');
      cy.get('.loginbutton').should('be.visible').click();
  
      // Verify login failure by checking for error message or other indication
      cy.contains('Incorrect Password'); // Adjust this assertion based on the actual error message displayed
    });
  });