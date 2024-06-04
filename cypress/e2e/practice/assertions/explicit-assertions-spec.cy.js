describe("Test suite", () => {
  it("Test case 1", () => {
    cy.visit("https://www.letskodeit.com/practice");

    let firstText;
    let secondText;

    cy.get("#product")
      .find("tbody tr:nth-child(2)")
      .find("td")
      .first()
      .then(($first) => {
        console.log($first)
        //firstText = $first.text()
        //console.log(firstText)
        expect('firstText', "Verify first and second text").to.not.equal(firstText)
      });

    // cy.get("#product")
    //   .find("tbody tr:nth-child(3)")
    //   .find("td")
    //   .first()
    //   .then(($second) => {
    //     secondText = $second.text();
    //     expect('secondText', "Verify first and second text").to.equal('secondText')
    //   });
  });
});
