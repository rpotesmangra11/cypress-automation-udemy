describe('API Testing Demo', () => {
    it('should validate GET request', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: { 'authorization': 'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e', },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body).has.length(10)
            expect(response.body[0]).has.property('name', 'Pramila Talwar')
            expect(response.body[0]).not.have.prop('address')
        })
    })
})