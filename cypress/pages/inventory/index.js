import { elements as el } from "./elements"

class Inventory{
    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    }

    adicionarProduto(itemName){
         cy.get(el.addTocart(itemName)).click()
    }

    removerProduto(itemName){
        console.log(">>>>>>>>>>>>>>>>>>>>>> " + itemName)
        cy.get(el.removeFromCart(itemName)).click()
    }
}

export default new Inventory()