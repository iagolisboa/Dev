describe("Login users on alura pic", ()=> {

    beforeEach(() =>{
        cy.visit("https://alura-fotos.herokuapp.com")
        it("Login with valid user", () =>{
            cy.login('flavio','123')
            cy.contains('a','(Logout').should('be.visible')
        })
        it("Login with invalid user", () =>{
            cy.login('iago','1234')
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Invalid user name or password')
            })
        })
    })
})