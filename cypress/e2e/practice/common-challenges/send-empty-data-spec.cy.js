describe('Providing empty data to input field', () => {
    it('should not login to app using empty username', () => {
        cy.visit('https://www.letskodeit.com/login');
        //cy.get('#email').type(''); // Empty string
        cy.get('#login').click()
        cy.get('.error').should('have.text', 'Incorrect login details. Please try again.The email field is required.The password field is required.');
        
    });
});