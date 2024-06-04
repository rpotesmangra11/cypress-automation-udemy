//command.js
//loads before any of the test files

describe("Custom Command Get Text Demo", () => {
  it("should use custom command to get text", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.get("#openwindow").then(($element) => {
      const text = $element.text();
      cy.log(text);
      expect(text).to.equal("Open Window");
    });

    cy.get("#openwindow").getText().then((text) => {
      cy.log(text);
      expect(text).to.equal("Open Window");
    });


  });
});

// Custom command to get text of an element
