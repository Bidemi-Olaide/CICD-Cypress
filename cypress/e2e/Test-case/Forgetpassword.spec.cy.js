let data,constant;
describe('Forget Password', () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception",() => {
      return false
    })
    cy.fixture('selectors').then((ele) => {
      data = ele;
    })

    cy.fixture('fixedvalue').then((pag) => {
      constant = pag;
    })
    cy.visit('/')
  })
it('change password', () => {
    cy.get(data.forgetpassword).click();
    cy.get(data.usernameField).type(data.valid.username);
    cy.get(data.loginButton).click();
    cy.get(data.passwordTitle).invoke('text').should('eq',constant.resetSuccessful);

  })
  it('Empty Username', () => {
    cy.get(data.forgetpassword).click();
    cy.get(data.loginButton).click();
    cy.get(constant.expectation).invoke('text').should('eq', constant.emptyuser);
  
  });


  it('Cancel Reset Password', () => {
    cy.get(data.forgetpassword).click();
    cy.get(data.cancelButton).click();
    cy.url().should('eq', data.refreshpage);

  })
  
})
