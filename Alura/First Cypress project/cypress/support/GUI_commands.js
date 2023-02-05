Cypress.Commands.add('login', (userName, password)=>{
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password,{log:false});
    cy.get('button[type="submit"]').click();
})