describe("Test suite name", () => {
  it("Test Case 1", () => {
    cy.visit("https://www.letskodeit.com/practice");

    // 1. Class Selector
    cy.get(".navbar-buttons");

    // 2. ID Selector
    cy.get("#enabled-example-div");

    //ID and Class
    // <ul id="ui-id-1">
    // <li class="ui-menu-item">Item 1</li>
    // <li class="ui-menu-item">Item 2</li>
    // <li class="ui-menu-item">Item 3</li>
    // </ul>
    describe('Cypress .each() Example', () => {
      it('should iterate over each item and log details', () => {
        cy.visit('https://example.com'); // Change to the appropriate URL
    
        // Select all list items within the ul with id 'ui-id-1'
        cy.get('#ui-id-1 .ui-menu-item').each((el, index, $list) => {
          // el: the current element being iterated over (as a jQuery object)
          // index: the index of the current element in the collection
          // $list: the entire collection of elements being iterated over (as a jQuery object)
    
          const itemText = el.text().trim(); // Get the text content of the current element
          cy.log(`Item ${index + 1}: ${itemText}`); // Log the index and text of the current element
          console.log(`Item ${index + 1} of ${$list.length}: ${itemText}`); // Log the index, total items, and text of the current element
        });
      });
    });

    // 3. Tag Selector
    cy.get("input");

    // 4. Attribute Selector
    cy.get(["[value=disable]"]);
    cy.get('[value="apple"]');

    // 5. Tag and Attribute Selector
    // cy.get('input[name="course"]')

    // Tag Name and Attribute Value
    cy.get("div[class=cen-right-align]");

    // Tag Name And Multiple Attribute Value
    // cy.get('input[id="search"]')

    // 6. Descendant Selector

    // 7. Child Selector

    // 8. Pseudo-Class Selector (first child)

    // 9. Contains Text Selector

    // 10. Attribute Contains Selector
  });
});
