describe('No Framework Test Suite', () => {
    beforeEach('Reset application state to login page',() => {
        cy.visit('https://www.letskodeit.com/login');
    });
    it('should login to app using valid credentials', () => {
        cy.login('potesmangrar11@gmail.com', 'Soccer@199008');
        cy.get('#dropdownMenu1').click()
        cy.contains('Logout').click()
    });

    it.only('should not login to app using empty username', () => {
        cy.get('#email').type('')
        cy.get('#login-password').type('password')
        cy.get('#login').click();
        cy.get('.error').should('The email field is required.');
    });

    it('should not login to app using invalid user/password combination', () => {
        cy.get('#email').type('email')
        cy.get('#login-password').type('password')
        cy.get('#login').click();
        cy.get('error').should('The email field is required.');
    });
});