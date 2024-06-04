//Real world example of custom command
describe("Custom Command", () => {
  it("should use custom command to login", () => {
    cy.visit("https://www.letskodeit.com/login");
    cy.login("potesmangrar11@gmail.com", "Soccer@199008");
  });
  it.only("should use custom command to search", () => {
    cy.visit("https://www.letskodeit.com/courses");
    cy.searchCourse("Test Automation", "Cypress.io Test Automation");
  });
});
