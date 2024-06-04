import { random } from '../../../support/gorest-api/randomGenerator'

describe('Go REST API Testing', () => {
  let gd
  const accessToken =
    'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e'
  const apiURL = 'https://gorest.co.in/public/v2/users/'
  let randomEmail = random.randomEmail()
  let randomGender = random.randomGender()

  before(() => {
    cy.fixture('api-project-fixtures/api_users_data.json').then((data) => {
      gd = data
    })
  })

  it('should create a new Resource - POST ', () => {
    const reqBody = {
      name: gd.tid1.name,
      gender: randomGender,
      email: randomEmail,
      status: gd.tid1.status,
    }

    cy.request({
      method: 'POST',
      url: apiURL,
      headers: {
        authorization: accessToken,
      },
      body: reqBody,
    })
      .then((postRes) => {
        //cy.log(postRes.body)
        expect(postRes.status).equal(201)
        expect(postRes.body.name).equal(reqBody.name)
        expect(postRes.body.gender).equal(reqBody.gender)
        expect(postRes.body.email).equal(reqBody.email)
        expect(postRes.body.status).equal(reqBody.status)
        const userId = postRes.body.id
        return userId
      })
      .then((userId) => {
        cy.request({
          method: 'GET',
          url: `${apiURL}${userId}`,
          headers: {
            authorization: accessToken,
          },
        })
          .then((getRes) => {
            expect(getRes.status).eq(200)
            expect(getRes.body.name).equal(reqBody.name)
            expect(getRes.body.email).equal(reqBody.email)
            expect(getRes.body.gender).equal(reqBody.gender)
            expect(getRes.body.status).equal(reqBody.status)
          })
          .then(() => {
            cy.request({
              method: 'PUT',
              url: `${apiURL}${userId}`,
              headers: {
                authorization: accessToken,
              },
              body: {
                name: gd.tid1.name,
              },
            })
              .then((putRes) => {
                console.log(putRes.status)
                if (putRes.status !== 200 && putRes.status !== 201) {
                  throw new Error(
                    `Expected status to be 200 or 201, but got ${putRes.status}`
                  )
                }
                expect(putRes.body.name).equal(reqBody.name)
                expect(putRes.body.email).equal(reqBody.email)
                expect(putRes.body.gender).equal(reqBody.gender)
                expect(putRes.body.status).equal(reqBody.status)
              })
              .then(() => {
                cy.request({
                  method: 'DELETE',
                  url: `${apiURL}${userId}`,
                  headers: {
                    authorization: accessToken,
                  },
                })
              })
              .then((delRes) => {
                expect(delRes.status).eq(204)
              })
          })
      })
  })
}) //describe
