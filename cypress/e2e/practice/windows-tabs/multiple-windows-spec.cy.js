/// <reference types="cypress" />

const { isEqualsGreaterThanToken } = require("typescript");

describe('Child Window Demo', () => {
    it('On Window instead of Target Attribute', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then((win)=>{
            cy.stub(win, 'open').callsFake(()=>{
                win.location.href = 'https://www.letskodeit.com/courses'
            }).as('windowOpen')
        })

        cy.get('#openwindow').click()
        cy.get('@windowOpen').should('be.calledWith', 'https://www.letskodeit.com/courses')

        cy.get('input#search').type('Selenium')
        cy.get('button[class="find-course search-course"]').click()

        // cy.go('back')
    })
})

