import { login } from "../../../support/pages-POM/login_page.js";

describe("No Framework Test Suite", () => {
  beforeEach("Reset application state to login page", () => {
    login.navigateToLogin();
  });
  it.only("should login to app using valid credentials", () => {
    login.loginToApp("potesmangrar11@gmail.com", "Soccer@199008");
    cy.get("#dropdownMenu1").click();
    cy.contains("Logout").click();
  });

  it("should not login to app using empty username", () => {
    login.loginToApp("{backspace}", "password");
    login.verifyEmailRequiredError(".error").should("The email field is required.");
  });

  it("should not login to app using invalid user/password combination", () => {
    login.loginToApp("invalid", "password");
    login.verifyEmailRequiredError() 
  });
});

