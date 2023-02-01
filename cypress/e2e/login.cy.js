import login from "../fixtures/loginSelector.json"

describe('Login Functionality', () => {

  it("Verify user is able to login with valid credentials", () => {

    cy.get(login.emailField).type(login.validEmail);
    cy.get(login.passwordField).type(login.password)
    cy.get(login.submitBtn).click()

  })

  it("Verify user is unable to login with invalid credentials", () => {

    cy.get(login.emailField).type(login.invalidEmail);
    cy.get(login.passwordField).type(login.password)
    cy.get(login.submitBtn).click()
    cy.get(login.invalidErrorMsg).should('be.visible').and('contain', 'Invalid login details')

  })


  it("Verify right error message is returned when email field is blank", () => {
    
    cy.get(login.emailField).type('  ');
    cy.get(login.passwordField).type(login.password)
    cy.get(login.submitBtn).click()
    cy.get(login.blankEmailError).should('be.visible').and('contain', 'Email is required')

  })

  it("Verify right error message is returned when password field is blank", () => {
    
    cy.get(login.emailField).type(login.validEmail);
    cy.get(login.submitBtn).click()
    cy.get(login.passwordError).should('be.visible').and('contain', 'Password is required')

  })

  it("Verify error message when password lenght doesn't meet the requirement", () => {
    
    cy.get(login.emailField).type(login.validEmail);
    cy.get(login.passwordField).type(login.halfPassword)
    cy.get(login.submitBtn).click()
    cy.get(login.passwordError).should('be.visible').and('contain', 'password must be at least 8 characters')

  })
});