describe('Iframe', () => {
    it('Find the iframe element', () => {
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#courses-iframe').then(($frame) => {
            const searchField = $frame.contents().find('input[id="search"]')
            cy.wrap(searchField).type('Selenium')
        })

        cy.get('#name').type('Out of the iframe')
    })
});