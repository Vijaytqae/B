/// <reference types = "Cypress" />
describe(' Verify login Methods using Sauce Demo', () => {
    beforeEach("Before each Test",()=>{
        cy.visit('https://www.saucedemo.com/v1/');
    })
    before('Before All', ()=>{
        cy.log("Before 1st it block")
    })
    after(`After All`, ()=>{
        cy.log('After All it Blocks')
    })
    afterEach("After each test",()=>{
        cy.log(' Test Execution completed ')
    })
    //it.only('login sauce lab  with valid credentials', () => { --> .only will facilitate to execute particular it block only by ignoring other it blocks.
    it('Verify login to sauce lab  with valid credentials', () => {
    // cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[id="user-name"]').type("standard_user")
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.url().should("eq",'https://www.saucedemo.com/v1/inventory.html')
    })

    it.skip('Verify login to sauce lab  with locked_out_user username and valid password ', () => {
     //   cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[id="user-name"]').type("locked_out_user")
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.get('h3[data-test="error"]').should("be.visible")
    })

    it('Verify login to sauce lab  with problem_user username and valid password ', () => {
    //    cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[id="user-name"]').type("problem_user")
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
    //    cy.get('h3[data-test="error"]').should("be.visible")
        cy.url().should("eq",'https://www.saucedemo.com/v1/inventory.html')
    })
    //specify.only('performance_glitch_user username and valid password ', () => {  ---> insted of "it" we can use specify. 
    specify('Verify login to sauce lab  with performance_glitch_user username and valid password ', () => {
    //    cy.visit('https://www.saucedemo.com/v1/')
        cy.get('input[id="user-name"]').type("performance_glitch_user")
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.url().should('eq',"https://www.saucedemo.com/v1/inventory.html")
    })
    
})