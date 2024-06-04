export class LoginPage {
  navigateToLogin() {
      cy.visit('https://www.letskodeit.com/login')
      // cy.visit('/login')
  }

  enterEmailAddress(email) {
      cy.get('#email').type(email)
  }

  enterPassword(password) {
      cy.get('#login-password').type(password)
  }

  clickLoginButton() {
      cy.get('#login').click()
  }

  verifyEmailRequiredError() {
      cy.get("div[class='form-group'] span[class='error']").should('have.text', 'The email field is required.')
  }

  verifyInvalidCredentialsError() {
      cy.get('#incorrectdetails').should('have.text', 'IIncorrect login details. Please try again.')
  }

  loginToApp(email, password) {
      login.enterEmailAddress(email)
      login.enterPassword(password)
      login.clickLoginButton()
  }

  title() {
      return cy.title()
  }
}
export const login = new LoginPage()