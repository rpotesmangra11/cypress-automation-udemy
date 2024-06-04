// describe('Get Method And CSS Examples', () => {
//     it('should log the values of radio buttons', () => {
//       cy.visit('https://www.letskodeit.com/practice')
      
//       // Select all radio input elements within the div with id 'radio-btn-example'
//     //   cy.get('#radio-btn-example input[type="radio"]').each((el, index, $list) => {
//     //     const value = el.attr('value'); // Get the value attribute of the radio button
//     //     console.log(value); // Log the value to the console
//     //   })

//     cy.get('#radio-btn-example input[type="radio"]').each((el,index,$list)=>{
//         // const value = el.name()
//         const value = (`Element ${index}: ${el}`)
//         console.log(value)
//     })
//     })
//   })
  

//   describe('Get Method And CSS Examples', () => {
//     it('should log the values of radio buttons', () => {
//       cy.visit('https://www.letskodeit.com/practice')
      
//       // Select all radio input elements within the div with id 'radio-btn-example'
//       cy.get('#radio-btn-example input[type="radio"]').each((el, index, $list) => {
//         const value = el.val(); // Get the value attribute of the radio button
//         console.log(value); // Log the value to the console
//       })   
//     })
//   })

  describe('Get Method And CSS Examples', () => {
    it('should log the values of radio buttons', () => {
      cy.visit('https://www.letskodeit.com/practice')
      
        cy.get('#radio-btn-example input[type="radio"]').each((el,index,$list)=>{
            const value = el.val()
            console.log(value)
        })
    })
  })