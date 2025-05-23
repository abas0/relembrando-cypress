import { elements as el} from "./elements"

class Login{
    visitarPagina(){
        cy.visit('/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type(Cypress.env('username'))
        cy.get(el.password).type(Cypress.env('password')) // como proteger a senha? 
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.username).type('standard_userrr')
        cy.get(el.password).type('secret_saucerrr') // como proteger a senha? 
        cy.get(el.loginButton).click()
    }

    validarErroCredenciaisInvalidas(){
        cy.get(el.errorMessage).should('contain.text', 
            'Username and password do not match any user in this service'
        )
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }
}

export default new Login() //exportando uma nova instância da classe