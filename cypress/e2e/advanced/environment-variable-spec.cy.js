describe('Environment Variables Demo', () => {
    it('should login to app using valid credentials', () => {
        cy.visit('/login');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.get('#dropdownMenu1').click();
        cy.contains('logout').click();
    });
});