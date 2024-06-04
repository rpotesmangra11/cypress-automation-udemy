//import { login } from 'cypress\support\login_page.js'

describe('Framework Test Suite', () => {

  let gd;

    before('This is before Hook', () => {
      cy.fixture('login_data').then((data) => {
        gd = data;
      })
    })

    beforeEach('This is beforeEach Hook', () => {
      login.navigateToLogin()
    })

    it('should login to app using valid credentials', () => {
      cy.login(gd.testid1.username, gd.testid1.password)
      cy.logout()
    })

    it('should not login to app using empty username', () => {
      login.loginToApp(gd.testid2.username, gd.testid2.password)
      login.verifyEmailRequiredError()
    })

    it('should not login to app using invalid username/password combination', () => {
      login.loginToApp(gd.testid3.username, gd.testid3.password)
      login.verifyInvalidCredentialsError()
    })
  })