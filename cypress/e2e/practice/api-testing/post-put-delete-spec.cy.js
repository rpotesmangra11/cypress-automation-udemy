import { random } from '../../../support/randomGen'

describe('POST-PUT-DELETE to have self contained test', () => {
  //global variables
  let gd
  let userId
  const apiURL = 'https://gorest.co.in/public/v2/users/'
  const accessToken =
    'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e'

  //before hook/fixtures
  before(() => {
    cy.fixture('api_users_data').then((data) => {
      gd = data
    })
  })
  //   it('should understand put request', () => {
  //     const userEmail = random.randomEmail()
  //     const gender = random.randomGender()
  //     //request body
  //     const reqBody = {
  //       name: gd.tid1.name,
  //       gender: gender,
  //       email: userEmail,
  //       status: gd.tid1.status,
  //     }

  //     //put request body
  //     const putReqBody = {
  //       name: gd.tid2.name,
  //       gender: gender,
  //       email: userEmail,
  //       status: gd.tid2.status,
  //     }
  //     //cyrpress request.then.then
  //     cy.request({
  //       method: 'POST',
  //       url: apiURL,
  //       headers: {
  //         authorization:
  //           'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
  //       },
  //       body: reqBody,
  //     }).then((postRes) => {
  //       expect(postRes.status).to.eq(201)
  //       const userId = postRes.body.id

  //       cy.request({
  //         method: 'PUT',
  //         url: `${apiURL}/${userId}`,//apiURL + '/' + userId,
  //         headers: {
  //           authorization:
  //             'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
  //         },
  //         body: putReqBody,
  //       }).then((putRes) => {
  //         expect(putRes.status).to.eq(200)
  //         expect(putRes.body.name).to.equal(putReqBody.name)
  //         expect(putRes.body.gender).to.equal(putReqBody.gender)
  //         expect(putRes.body.email).to.equal(putReqBody.email)
  //       })
  //     })
  //   })

  it('should validate POST request', () => {
    const userEmail = random.randomEmail()
    const gender = random.randomGender()
    //request body
    const reqBody = {
      name: gd.tid1.name,
      gender: gender,
      email: userEmail,
      status: gd.tid1.status,
    }
    //cyrpress request.then.then
    cy.request({
      method: 'POST',
      url: apiURL,
      headers: {
        authorization: accessToken,
      },
      body: reqBody,
    }).then((postRes) => {
      expect(postRes.status).to.eq(201)
      userId = postRes.body.id
    })
  })

  it('should validate PUT request', () => {
    const userEmail = random.randomEmail()
    const gender = random.randomGender()

    //put request body
    const putReqBody = {
      name: gd.tid2.name,
      gender: gender,
      
      email: userEmail,
      status: gd.tid2.status,
    }

    cy.request({
      method: 'PUT',
      url: `${apiURL}/${userId}`, //apiURL + '/' + userId,
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
      body: putReqBody,
    }).then((putRes) => {
      expect(putRes.status).to.eq(200)
      expect(putRes.body.name).to.equal(putReqBody.name)
      expect(putRes.body.gender).to.equal(putReqBody.gender)
      expect(putRes.body.email).to.equal(putReqBody.email)
    })
  })

  it('should validate DELETE request', () => {
    cy.request({
      method: 'DELETE',
      url: `${apiURL}/${userId}`, //apiURL + '/' + userId,
      headers: {
        authorization: accessToken,
      },
    }).then((deleteRes) => {
      expect(deleteRes.status).to.eq(204)
    })
  })
}) //describe
