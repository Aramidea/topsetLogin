const login = require("../fixtures/loginSelector.json")

describe('Login Functionality', () => {

  beforeEach(function () {
    cy.visit("/")
});


it("Verify user is unable to login with invalid credentials", function () {

  cy.get(login.email).type('qa.analyst@email.co');
  cy.get(login.password).type('Password123!')
  cy.get(login.submitBtn).click()
  cy.contains('Invalid login detail')
  expect('Invalid login detail').to.equal('Invalid login detail')

  })

  it("Verify user is able to login with valid credentials", function () {

    cy.get(login.email).type('qa.analyst@email.com');
    cy.get(login.password).type('Password123!')
    cy.get(login.submitBtn).click()
    cy.contains('BOOK A LESSON')
    expect('BOOK A LESSON').to.equal('BOOK A LESSON')
  
    })
    it("Verify right error message ia returned when fields are blank", function () {

      cy.get(login.email).type('     ');
      cy.get(login.password).type('    ')
      cy.get(login.submitBtn).click()
      cy.log("cy.get('.text-red-500')")
      cy.contains('Email is required')
      cy.contains('password must be at least 8 characters')
    
      })
      it("Verify error message when password lenght doesn't meet the requirement", function () {

        cy.get(login.email).type('qa.analyst@email.co');
        cy.get(login.password).type('Pass!')
        cy.get(login.submitBtn).click()
        cy.contains('password must be at least 8 characters')
      
        })
});