describe('A simple login', () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception",() => {
      return false
    })
    cy.visit('/')
  })
    it.only('Search Ferrari', () => {
      // action perform
      cy.get('.navFooterLine.navFooterLinkLine.navFooterPadItemLine.navFooterCopyright').shouldbe("Amazon.com").shouldbe('1996-2024');
      // cy.get('#nav-cart-count').addNumber(7).addNumber(3);
      cy.get('#nav-search-submit-button').click();
      expected.behaviour
     
    });
    it('Search Iphone', () => {
      // action perform
      cy.get('input#twotabsearchtextbox').type("Iphone 13");
      cy.get('#nav-search-submit-button').click();
      // expected behaviour
     
    });
  it('Search Iphone', () => {
    // action perform
    cy.get('input#twotabsearchtextbox').type("Iphone 11");
    cy.get('#nav-search-submit-button').click();
    // expected behaviour
   
  });
})