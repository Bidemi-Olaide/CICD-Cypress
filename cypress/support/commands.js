// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="Cypress-xpath" />

import 'cypress-fill-command'

Cypress.Commands.add('shouldbe', { prevSubject: true }, (title, headertext) => { 
    expect(title).to.contain(headertext);
    return title;
})

Cypress.Commands.add('addNumber', { prevSubject: true }, (title, num) => { 
    var sum = Number.parseInt(title.text()) + num;
    title.text(sum);
    return title;
})
