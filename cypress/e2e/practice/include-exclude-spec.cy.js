describe('Include/Exclude', () => {
    it('Test 1', () => {
        cy.log('Test 1');
    });

    it.only('Test 2', () => {
        cy.log('Test 2');
    });

    it('Test 3', () => {
        cy.log('Test 3');
    });
});


//it.skip and it.only
//To skip a test, use the skip method. To run only a specific test, use the only method.