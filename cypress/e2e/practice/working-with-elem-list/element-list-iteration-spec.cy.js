describe("Test suite", () => {
  it("Test case 1", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.get("#autosuggest")
      .then((autoListInput) => {
        cy.wrap(autoListInput).type("Automation");

        // Wait for the suggestions to be visible
        cy.get("ul#ui-id-1").should("be.visible");

        cy.get('[class="ui-corner-all"]').each((el, index, $list) => {
          const itemText = el.text().trim();
          cy.wrap(el).should("contain", itemText);

          if (index < 8) {
            cy.wrap(el).should("have.class", "ui-corner-all");
          }

          //cy.wrap(el).should("contain", itemText)
          //cy.log(itemText)
        });
      })
      .then(($list) => {
        expect($list).to.have.length(8);
      });
  });
});

// describe('Single Element Selection', () => {
//   it.only('should log details of the selected element', () => {
//     cy.visit('https://www.letskodeit.com/practice'); // Replace with the actual URL

//     cy.get('input#alertbtn').then((el) => {
//       console.log(el); // Logs the jQuery object containing the selected element
//       console.log(el[0]); // Logs the raw DOM element
//       console.log(el.text()); // Logs the text content of the selected element
//     });
//   });
// });

// Freeze webpage for element inspect:
// setTimeout(function() {debugger}, 6000);