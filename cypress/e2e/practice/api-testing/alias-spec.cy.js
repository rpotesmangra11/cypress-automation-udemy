describe('Alias and GET Command - API Testing', () => {
  beforeEach('Initiate the main URL', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization:
          'Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e',
      },
    }).as('users');
  });

  //   it("should use alias and get command to verify api testing", () => {
  //     cy.request({
  //       method: "GET",
  //       url: "https://gorest.co.in/public/v2/users",
  //       headers: {
  //         authorization:
  //           "Bearer 9db59781fdc6e78c4a58be7e948e008485694662674a49c2f407a744a06b591e",
  //       },
  //     }).then((response) => {
  //       cy.log(JSON.stringify(response.body));
  //       expect(response.status).to.eq(200);
  //       expect(response.body).has.length(10);
  //       expect(response.body[0]).has.property("name", "Pramila Talwar");
  //       expect(response.body[0]).not.have.prop("address");
  //     });
  //   });
  // });

  //This uses alias to replace the cy.request() method
  //   it("should use alias to verify the body", () => {
  //     cy.get('@users').then((response) => {
  //       cy.log(JSON.stringify(response.body));
  //       expect(response.status).to.eq(200);
  //       expect(response.body).has.length(10);
  //       expect(response.body[0]).has.property("name", "Pramila Talwar");
  //       expect(response.body[0]).not.have.prop("address");
  //     });
  //   });
  // });

  //This uses alias to replace the cy.request() method
  //   it("should use alias and get command to verify api testing", () => {
  //     cy.get('@users').then((response) => {
  //       cy.log(JSON.stringify(response.body));
  //       expect(response.status).to.eq(200);
  //       expect(response.body).has.length(10);
  //       expect(response.body[0]).has.property("name", "Pramila Talwar");
  //       expect(response.body[0]).not.have.prop("address");
  //     });
  //   });

  it('should use alias and get command to verify api testing', () => {
    cy.get('@users')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('should use alias to verify status', () => {
    cy.get('@users').its('status').should('equal', 200);
  });

  it('should use alias to verify the body', () => {
    cy.get('@users')
      .its('body')
      .then((res) => {
        expect(res[0]).has.property('name', 'Pramila Talwar');
      });
  });
});
