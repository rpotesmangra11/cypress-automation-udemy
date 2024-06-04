describe('Get Method And CSS Examples', () => {
    it('should learn get() method and some CSS examples', () => {
      cy.visit('https://www.letskodeit.com/practice')
      
        cy.get('#carselect').select('Benz')
        cy.get('#multiple-select-example').select(['sapple','sorangess'])
    })
  })