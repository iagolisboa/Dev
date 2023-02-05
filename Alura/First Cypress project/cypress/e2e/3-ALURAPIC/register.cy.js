describe("register users on alura pic", ()=> {

    beforeEach(() =>{
        cy.visit("https://alura-fotos.herokuapp.com")
        it("verifies validation messages", () =>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Email is required').should('be.visible');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
           
            cy.contains('ap-vmessage', 'User name is required').should('be.visible');
            
            cy.contains('ap-vmessage', 'Password is required').should('be.visible');
        })
        
        it("verifies passwords with less than 8 characters", () =>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="password"]').type('123');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
        })
        const users = require('../../fixtures/users.json');
    users.forEach(users => {
        it.only("register new user"+users.userName, () =>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(users.email);
            cy.get('input[formcontrolname="fullName"]').type(users.fullName);
            cy.get('input[formcontrolname="userName"]').type(users.userName);
            cy.get('input[formcontrolname="password"]').type(users.password);
            cy.contains('button', 'Register').click();
            //cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })
    })})
})