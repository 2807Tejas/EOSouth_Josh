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
Cypress.on("uncaught:exception",(err,runnable)=>{
return false
})
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


/// <reference types = "Cypress" /> 

//const cypress = require('cypress')



Cypress.Commands.add('login', (email, password) => {
    cy.get('.d-flex > .text-uppercase').click()
    cy.get("[type='email']").type(email)
    cy.get("[type='password']").type(password)
    cy.get("[type='submit']").click()
})

 Cypress.Commands.add('logout',()=>{

     cy.get(".icon-profile").click()
         cy.wait(4000)
         cy.xpath("//ul[@class='user-link-list mb-0 flex-column nav']/li[4]").click()
         cy.get(".px-5.btn.btn-danger").click()
 })

 Cypress.Commands.add('MemberLogin', (email, password) => {
    cy.get('.d-flex > .text-uppercase').click()
    cy.get("[type='email']").type(email)
    cy.get("[type='password']").type(password)
    cy.get("[type='submit']").click()
})

//     cy.get("[placeholder='Last Name']").type(lastname)
//     cy.get(" [placeholder='Email Address']").type(email)
//     cy.get("[placeholder='Comments']").type(comment)
//     cy.get("[value='SUBMIT']").click()
// })
require('@cypress/xpath');

require('@4tw/cypress-drag-drop')
// require('@4tw/cypress-drag-drop')



Cypress.Commands.add('course', (courseOfferd) => {
    cy.get("#wpforms-49-field_5").select(courseOfferd)
})
