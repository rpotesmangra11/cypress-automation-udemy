// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//example: cy.get/cy.login
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//example:.click is a child command
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//exapmle: cy.dismiss/cy.get.dismiss
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getText', { prevSubject: "element" }, ($element) => {
  cy.wrap($element).scrollIntoView();
  return cy.wrap($element).invoke("text");
});

Cypress.Commands.add('login', (username, password) => {
    cy.get('#email').type(username)
    cy.get('#login-password').type(password)
    cy.get('#login').click();
    cy.get('#dropdownMenu1').should('exist');
})

Cypress.Commands.add('searchCourse', (category, courseString) => {
    cy.get('select[name="categories"]').select(category)
    cy.get('input[placeholder="Search Course"]').type(courseString)
    cy.xpath(`//*[@id="course-list"]/div[1]/div/a`).click()
    cy.url().should('include', 'https://www.letskodeit.com/courses/cypress-automation-framework')
})
