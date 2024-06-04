describe('Get Method And CSS Examples', () => {
    it('should learn get() method and some CSS examples', () => {
      cy.visit('https://www.letskodeit.com/practice')


      cy.get('#name').type('Ravilicious Def{backspace}')
      //cy.get('#name').type('Ravilicious Def').should('have.class', 'inputs')

      cy.get('#enabled-example-input').type('WASSSSUP')
        //#displayed-text
      //#name
    })
  })