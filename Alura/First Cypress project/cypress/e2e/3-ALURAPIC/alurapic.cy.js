describe("tests the login screen functions", ()=> {

    beforeEach(() =>{
        
        it("verifies email validation", () =>{
            cy.visit("https://alura-fotos.herokuapp.com")
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type('iago');
            
            cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
        })
    })
 })
