describe('Working with elements', () => {

    it('Hidden element', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('a[href="/communication-preferences/push?t=all"]').click({force:true})
    })

    it('Clicking Multiple elements', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})
       // cy.xpath("//button[text()='ADD TO CART']").eq(0).click()
    })

    it('Key board keys press', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin").clear()
        //cy.wait(3000)
        cy.get('input[name="username"]').type("Admin",{delay:2000})
        cy.get('input[name="password"]').type("admin123{enter}")
      
    })

    it(' Check Box', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[name^="chk_altemail"]').check().should("be.checked")
        cy.wait(3000)
        cy.get('input[name^="chk_altemail"]').uncheck().should("not.be.checked")        
    })

    it(' Check box : Example - 2', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123{enter}")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        // cy.get("input[type='checkbox']").check({force:true})
        // cy.wait(3000)
        // cy.get("input[type='checkbox']").uncheck({force:true})
        // cy.wait(3000)
        cy.get("input[type='checkbox']").check(["2","5","7","3"],{force:true})
        cy.get('input[type="checkbox"]').uncheck(["3","5"],{force:true})
    })

    it(' Radio Button', () => {
       cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
       cy.get('input[value="m"]').should("be.checked")
       cy.get('input[value="f"]').check()  
       cy.get('input[value="f"]').should("be.checked")
       cy.get('input[value="m"]').should("not.be.checked")
    })

    it.only(' DropDown Button', () => {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('select[name^="DOB_Month"]').select("JAN")
        cy.get('select[name^="DOB_Month"]').select("05")
        cy.get('select[name^="DOB_Month"]').select(3)
    })

})