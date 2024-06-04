describe('Test suite', () => {
    it('Test case 1', () => {
        cy.visit('https://www.letskodeit.com/practice')
        
        cy.get('#product')
        .should('have.class', 'table-display')
        .and('be.visible')
        .find('tbody tr:nth-child(2)')
        .last()
        .and('contain', '35')
        
    });
});


// Assertions validate the state of our elements or any action that we perform for the application which we are testing
// Assertions can verify whether the element is visible or has a particular state 