describe("Test Suite", () => {
  it("Testing Multiple Tabs", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //Don't have to open the tab
    cy.get("#opentab").should("have.attr", "href").and("include", "/courses");
  });

  //You can remove Target attribute in order to have it open in the same page. You can remove it from the elements on live page.
  it.only("should visit the new tab, removing our target attribute", () => {
    cy.visit("https://www.letskodeit.com/practice");
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "/course");

    cy.get('input#search').type('Selenium')
    cy.get('button[class="find-course search-course"]').click()
  });
});
