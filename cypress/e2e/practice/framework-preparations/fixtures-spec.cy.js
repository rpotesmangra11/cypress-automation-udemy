//global data example using fat arrow function
describe('Fixtures demo using fat arrow function', () => {

    let globalData;

    before('Before Hook', () => {
        cy.fixture("example").then((data) => {
            globalData = data 
        })
    });
//This is not the best way to store test data (code files), should be in fixtures

    it('should understand how to use fixtures for reading data', () => {
        //cy.visit('https://www.letskodeit.com/login');
        cy.get('#email').type(globalData.username);
        cy.get('#login-password').type(globalData.password)
    });
});



// describe('Fixtures demo using function syntax', () => {

//     //This fails because written using fat arrow needs to be function(){} in both before and it
//     // before('Before Hook', () => {
//     //     cy.fixture("example").then((data) => {
//     //         this.data = data 
//     //     })
//     // });


//     before('Before Hook', function(){
//         cy.fixture("example").then((data) => {
//             this.data = data 
//         })
//     });

// //This is not the best way to store test data (code files), should be in fixtures

//     it('should understand how to use fixtures for reading data', function() {
//         cy.visit('https://www.letskodeit.com/login');
//         cy.get('#email').type(this.data.username);
//         cy.get('#login-password').type(this.data.password)
//     });
// });