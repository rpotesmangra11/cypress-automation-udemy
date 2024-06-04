describe("Test suite", () => {
  it("Test case 1", () => {
    cy.visit("https://www.letskodeit.com/practice");

    // cy.get('input[id="bmwcheck"]').click()
    // cy.get('input[id="benzcheck"]').dblclick()
    // cy.get('input[id="hondacheck"]').click()

    cy.get('#checkbox-example-div').check()
    cy.get('#checkbox-example-div > fieldset > [for="benz"]').click()
    // cy.get('#checkbox-example-div > fieldset > [for="bmw"]')

    //cy.get("#open-window-example-div").find("#openwindow").dblclick({force: true});
    //cy.get('#open-window-example-div').find('#openwindow').rightclick()
    //cy.get('#opentab').click()

    //Right click are options from the browser unless coded to have other options

    //cy.get("#open-window-example-div").find("#openwindow").dblclick({force: true});
  });
});
