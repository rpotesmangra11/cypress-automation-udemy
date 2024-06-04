describe('Test Suite', () => {
    it('Practice CSS Selecting', () => {
        cy.visit('https://www.letskodeit.com/practice');
        
// Id
cy.get('#alertbtn')

// Class Name
cy.get('.btn-style')

// Attribute Value
cy.get('[value=Confirm')

// Class Value
cy.get('[class=btn-style]')

// Tag Name and Attribute Value
cy.get('div[class=cen-right-align]')

// Tag Name And Multiple Attribute Value
cy.get('input[class=inputs][placeholder="Enter Your Name"')

    });
});

