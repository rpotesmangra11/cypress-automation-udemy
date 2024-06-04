describe('Get Method And CSS Examples', () => {
    it('should learn get() method and some CSS examples', () => {
      cy.visit('https://www.letskodeit.com/practice')
      
    //   cy.get('#checkbox-example-div > fieldset > [for="bmw"]').should('have.text', 'bmw')
    //   cy.get('input[id="bmwcheck"]').click()
    //   cy.get('input[id="benzcheck"]').check()

    //   cy.get('#checkbox-example-div')//.check()
    //   cy.get('[data-layer="Content"]').check()
    //   cy.get('input[id="hondacheck"]').click()

    // cy.get('div#checkbox-example-div input[type="checkbox"]').click({multiple: 3})

    cy.get("div#checkbox-example-div input[type='checkbox']").check()
    cy.get("div#checkbox-example-div input[type='checkbox']").uncheck()

      // Should attr / invoke alternative
    })
  })