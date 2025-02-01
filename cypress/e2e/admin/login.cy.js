
import data from "../../fixtures/login.json"
import logins from "../../fixtures/pages/login.po"

describe('Verify login functionality', () => {

  it('Verify the Logo', () => {

  //  browser = "Devaraju"

switch(Cypress.browser.name){

    case "chrome": 
        cy.log(" This is chrome ")
        cy.viewport(768,1024)

    break;

    case "electron":
        cy.log(" I am electron ")
        cy.viewport("iphone-6")
    break;

    case "edge":
        cy.log(" You are seeing edge browser")
        cy.viewport('samsung-note9')
    break;
    default:
        cy.log(" Not a registered browser ")
        cy.viewport(`macbook-15`, 'landscape')

}
    cy.visit('/web/index.php/auth/login')
    cy.get(logins.logo).should("be.visible")
  })

  it('Verify login with valid credentials', () => {    
  //  cy.login("Admin","admin123")
  cy.visit('/web/index.php/auth/login')
  logins.loginWithCreds(data.username,data.password)
    
    //cy.get(logins.usernameInput).type(login.username) 
    //cy.get(logins.passwordInput()).type(login.password)
    //cy.get(logins.loginBtn()).click()
    //cy.contains('Time at work').should("be.visible") 
    //cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })
  
  //it('passes', () => {
  //  cy.visit('https://example.cypress.io')
  //})

})