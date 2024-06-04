import { random } from "../../../support/randomGen";

describe('Post Request Testing', () => {
  let gd;
  before('This is the before hook', () => {
    cy.fixture('api_users_data').then((data) => {
      gd = data
    })
  })

  it.skip('should create a new user using POST', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
      body: {
        name: 'Names321980',
        gender: 'female',
        email: '432797wkjffddhasf9shab08r34w90843@gmail.com',
        status: 'active',
      },
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.equal(201)
      expect(res.body.name).to.be.eq('Names321980')
      expect(res.body.name).to.equal('Names321980')
      expect(res.body).has.property('name', 'Names321980')
      expect(res.body.email).to.be.eq(
        '432797wkjffddhasf9shab08r34w90843@gmail.com'
      )
    })
  })

  it.skip('should validate post request - request variable', () => {
    const reqBody = {
      name: 'Names321980',
      gender: 'female',
      email: util.randomEmail(),
      status: 'active',
    }
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
      body: reqBody,
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.equal(201)
      expect(res.body.name).to.be.eq('Names321980')
      expect(res.body.name).to.equal('Names321980')
      expect(res.body).has.property('name', 'Names321980')
      expect(res.body.email).to.be.eq(
        '4423217wkjffdfddhasf9shab08r34w90843@gmail.com'
      )
    })
  })

  it.skip('should validate post request - fixture data', () => {
    const reqBody = {
      name: gd.tid1.name,
      gender: gd.tid1.gender,
      email: gd.tid1.email,
      status: gd.tid1.status,
    }

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
      body: reqBody,
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.equal(201)
      expect(res.body.name).to.be.eq('Names3214343')
      expect(res.body.name).to.equal('Names3214343')
      expect(res.body).has.property('name', 'Names3214343')
      expect(res.body.email).to.be.eq('44fdfdsfese90843@gmail.com')
    })
  })

  it.only('should validate post request - randomize request', () => {
    const reqBody = {
      name: gd.tid1.name,
      gender: gd.tid1.gender,
      email: random.randomEmail(),
      status: gd.tid1.status,
    }

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
      body: reqBody,
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.equal(201)
      expect(res.body.name).to.be.eq(reqBody.name)
      expect(res.body.name).to.equal(reqBody.name)
      expect(res.body).has.property('name', reqBody.name)
      expect(res.body.email).to.be.eq(reqBody.email)
    })
  })


})
