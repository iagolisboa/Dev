describe("Search for courses", ()=> {

    beforeEach(() =>{
        cy.visit("https://www.alura.com.br")

    })
    it("Search for Java courses", () =>{
        cy.get('#header-barraBusca-form-campoBusca').type("python");
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should ("contain","Formação Python  e orientação a objetos");
    })

})



