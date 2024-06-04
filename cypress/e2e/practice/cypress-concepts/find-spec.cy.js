describe('Test suite', () => {
    it('Test case 1', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')

        cy.get('#open-window-example-div').within(()=>{
            cy.get('button')
        }).should('have.id','open-window-example-div')

        cy.get('#open-window-example-div ').find('button', {log: true}).should('have.id', 'openwindow')

        cy.get('#open-window-example-div ').find('button', {log: false}).click()

        cy.get('#open-window-example-div ').find('button', {timeout: 12000})

    });
});