describe('A simple login', () => {
  
    it('Valid login', () => {
      cy.visit('/basic_auth', {
        auth: {
          username: 'admin',
          password: 'admin2'
        }
      })
      })
      it('Invalid login', () => {
        cy.visit('/basic_auth', {
          auth: {
            username: 'admin',
            password: 'admin'
          }
        })
        })
    })
      