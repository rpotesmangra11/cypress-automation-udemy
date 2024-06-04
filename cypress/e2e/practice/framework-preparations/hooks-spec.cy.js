describe("Hooks Demo", () => {
  // Before block will run before all the tests
  before(() => {
    cy.log("This is the before block");
  });

  //After block will run after all the tests
  after(() => {
    cy.log("This is the after block");
  });

  //Before each block will run before each test
  beforeEach(() => {
    cy.log("This is the before each block");
  });

  //After each block will run after each test
  afterEach(() => {
    cy.log("This is the after each block");
  });

  it("Test 1", () => {
    console.log("Test 1");
  });

  it("Test 2", () => {
    console.log("Test 2");
  });
});
