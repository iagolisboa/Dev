
describe("Login users on alura pic", ()=> {
    const users = require('../../fixtures/users.json');
    beforeEach(() =>{
        cy.visit("https://alura-fotos.herokuapp.com")
        cy.intercept("POST", "https://apialurapic.herokuapp.com/user/login", {
            statusCode: 400
        }).as("stubPost")
    })
        it("Login with valid user", () =>{
            cy.login(Cypress.env("userName"), Cypress.env('password'))
            cy.wait('@stubPost')
            cy.contains('a','(Logout').should('be.visible')
        })
        it("Login with invalid user", () =>{
            cy.login('iago','1234')
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Invalid user name or password')
            })
        })
    
})