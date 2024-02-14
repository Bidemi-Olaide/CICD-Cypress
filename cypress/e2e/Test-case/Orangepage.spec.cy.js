let data
describe('Login page', () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception",() => {
      return false
    })
    cy.fixture('selectors').then((ele) => {
      data = ele;
    })
    cy.visit('/')
  });

  it('verify title-Positive', () => {
    cy.title().should('eq',data.title)
    cy.get(data.pagefooter).contains(data.footer1);
    cy.get(data.pagefooter).contains(data.footer2);
  
  });
  it('verify title-Negative', () => {
    cy.get(data.wallpaper).should('be.visible');
    cy.get(data.imagelogo).should('be.visible');

  });
  it.only('should open the OrangeHRM website in a new window', () => {
    cy.get(data.newpage1).invoke('removeAttr', 'target');
    cy.get(data.newpage1).click();

    cy.log('new page');

    cy.get(data.newpageHeader).should('to.contain', data.headercontext);


    // cy.get('.homepage-slider-content').should(($title) => {

    //   expect($title).to.contain('Peace of mind is just a few clicks away!');

    // });

    });
  


  });
  

