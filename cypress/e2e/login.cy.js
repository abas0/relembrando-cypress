import Login from "../pages/login"
import Inventory from "../pages/inventory"

describe('Login', ()=>{
    beforeEach(() =>{
        Login.visitarPagina()
    })
    it('Realizar Login com sucesso', () => {
        Login.preencherCredenciaisValidas()
        Inventory.validarAcessoAPagina()
    })

    it('Realizar login informando credenciais inválidas', () =>{
        Login.preencherCredenciaisInvalidas()
        Login.validarErroCredenciaisInvalidas()
    })
})