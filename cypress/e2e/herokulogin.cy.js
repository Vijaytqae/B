describe('verify the login functionalities', () => {

    it.only('verify the login with valid Username and Password', () => {
        cy. viewport(400,896)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains('Login Page').should('be.visible')
        cy.get('input[name="username"]').type(Cypress.env("username"))
        cy.get('input[name="password"]').type(Cypress.env("password"))
        cy.get('button[type="submit"]').click()
      //  cy.get('div[class="flash success"]').should("be.visible")
      //  cy.get('a[href="/logout"]').click()
      //  cy.get('div[class="flash success"]').should("be.visible")

    })

    it('verify the login with invalid Username and  Valid Password', () => {
        cy.viewport(375,667)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Vijay')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")
    })



    it('verify the login with valid Username and  invalid Password', () => {
        cy.viewport(412,915)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('Super')
        cy.get('button[type="submit"]').click()
        cy.get('div[data-alert]').should("be.visible")

    })

    it('verify the login with in-valid Username and  in-valid Password', () => {
        cy.viewport(820,1180)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Nagarjun')
        cy.get('input[name="password"]').type('Yadav')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

    })

    it('verify the login with Blank Username and  in-valid Password', () => {
        cy.viewport(540,720)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(" ")
        cy.get('input[name="password"]').type('Yadav')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

    })

    it('verify the login with Blank Username and  Valid Password', () => {
        cy.viewport(1024,600)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(' ')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

    })

    it('verify the login with valid Username and Blank Password', () => {
        cy.viewport(1280,800)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type(' ')
        cy.get('button[type="submit"]').click()
        cy.get('div[data-alert]').should("be.visible")

    })

    it('verify the login with in-valid Username and  Blank Password', () => {
        cy.viewport("samsung-note9")
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Yadav')
        cy.get('input[name="password"]').type(" ")
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

    })

    it('verify the login with Blank Username and  Blank Password', () => {
        cy.viewport("macbook-15", "landscape")
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(' ')
        cy.get('input[name="password"]').type(" ")
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

    })
})