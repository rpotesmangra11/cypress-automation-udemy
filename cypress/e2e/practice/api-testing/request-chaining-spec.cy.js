import { random } from '../../../support/randomGen'

describe('API Request Chaining', () => {
  let apiURL = 'https://gorest.co.in/public/v2/users/'
  let accessToken =
    'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e'
  let gd

  before('This is grabbing JSON file with user data', () => {
    cy.fixture('api_users_data').then((data) => {
      gd = data
    })
  })

  it('should understand request chaining', () => {
    const reqBody = {
      name: gd.tid1.name,
      gender: gd.tid1.gender,
      email: random.randomEmail(),
      status: gd.tid1.status,
    }
    cy.request({
      method: 'POST',
      url: apiURL,
      headers: { 'authorization': accessToken },
      body: reqBody,
    })
      .then((res) => {
        console.log(reqBody)
        expect(res.status).to.eq(201)
        const userId = res.body.id //no semi colon to see behavior
        return userId //no semi colon to see behavior
      })
      .then((userId) => {
        cy.request({
          method: 'GET',
          url: apiURL + '/' + userId,
          headers: { authorization: accessToken },
        }).then((res) => {
          expect(res.body.name).equal(reqBody.name)
          expect(res.body.gender).equal(reqBody.gender)
          expect(res.body.email).equal(reqBody.email)
          expect(res.body.status).equal(reqBody.status)
        })
      })
  })
})
