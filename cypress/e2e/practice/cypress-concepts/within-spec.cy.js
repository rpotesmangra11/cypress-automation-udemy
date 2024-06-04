describe('TS', () => {
    it('Find a button', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')

        cy.get('#open-window-example-div').within(()=>{
            cy.get('button').should('have.id', 'openwindow')
        })

    });
});