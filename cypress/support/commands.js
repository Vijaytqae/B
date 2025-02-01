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
//  Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('login', (username, password) => { 

    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('addjobtitle', (title, jobdescription) => { 
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    let r = (Math.random()+1).toString(36).substring(7);
    cy.get('input[class="oxd-input oxd-input--active"]').last().type(title+r)
    cy.get('textarea[placeholder="Type description here"]').type(jobdescription)
    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")

})