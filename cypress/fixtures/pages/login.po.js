
class loginPage{
    logo = 'img[alt="company-branding"]'
    usernameInput = 'input[name="username"]'

    passwordInput(){
        return 'input[name="password"]'
    }

    loginBtn(){
        return 'button[type="submit"]'
    }

    loginErrorMessage(){
        return "Invalid Credentials"
    }
    
    loginWithCreds(username,password){
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput()).type(password)
    cy.get(this.loginBtn()).click()
    }
}

const logins = new loginPage()
export default logins