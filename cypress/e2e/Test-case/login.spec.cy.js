let data,constant
describe('A simple login', () => {
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
  it('Successful login', () => {
    // action perform
    cy.get(data.usernameField).type(data.valid.username);
    cy.get(data.passwordField).type(data.valid.password);
    cy.get(data.loginButton).click();
    // expected behaviour
    cy.url().should('eq', data.newpage);
    cy.get('header').contains('Dashboard');
  });


  it('invalid Username', () => {
      cy.get(data.usernameField).type(data.invalid.username);
      cy.get(data.passwordField).type(data.valid.password);
      cy.get(data.loginButton).click();     
    cy.get(data.alertmessage).invoke('text').should('eq',constant.message);
  });

    
  it('Invalid Password', () => {
      cy.get(data.usernameField).type(data.valid.username);
      cy.get(data.passwordField).type(data.invalid.password);
      cy.get(data.loginButton).click();     
      cy.get(data.alertmessage).invoke('text').should('eq', constant.message);
  });


  it('Invalid Username and Password', () => {
      cy.get(data.usernameField).type(data.invalid.username);
      cy.get(data.passwordField).type(data.invalid.password);
      cy.get(data.loginButton).click();     
    cy.get(data.alertmessage).invoke('text').should('eq', constant.message);
  });

  it('Empty Username', () => {
      cy.get(data.passwordField).type(data.valid.password);
      cy.get(data.loginButton).click();     
      cy.get(constant.expectation).invoke('text').should('eq', constant.emptyuser);
  });


  it('Empty Password', () => {
      cy.get(data.usernameField).type(data.valid.username);
      cy.get(data.loginButton).click();     
      cy.get(constant.expectation).invoke('text').should('eq', constant.emptyuser);
    
  });


  it('Empty Credentials', () => {
    cy.get(data.loginButton).click();  
    cy.get(constant.expectation).invoke('text').should('eq', constant.emptydetails);
  
  });


  it('Invalid login', () => {
    // action perform
    cy.get(data.usernameField).type(data.invalid.username);
    cy.get(data.passwordField).type(data.invalidpassword);
    cy.get(data.loginButton).click(); 
    // expected behaviour
    cy.url().should('eq', data.newpage);
  });
})