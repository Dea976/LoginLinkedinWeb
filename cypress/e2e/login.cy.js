/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Ignora o erro e continua o teste
});

// funcionalidade
  describe("Teste no LinkedIn - Web com Edge", () => {
// Simula o login no linkedin com dados v�lidos, dados invalidos e dados vazios
    
  //1.Cenario Login no Linkedin com Sucesso
  it("Login com sucesso", () => {
  //DADO (Given)
  // abrir a aplicacao
       cy.visit('https://www.linkedin.com/login', {
  });
    
    // Esperando o campo de email aparecer e inserindo um email v�lido
       cy.get('input#username')
         .should('be.visible')
         .type('digitar seu email para testar'); // Substitua pelo seu email v�lido
    
    // Espera a p�gina carregar e inserir a senha
       cy.get('input#password')
         .should('be.visible')
         .type('Digitar sua senha para testar'); // Substitua pela sua senha v�lida
    
    // Quando (When)     
    // Clica no bot�o "Sign in"
       cy.get('button[type="submit"]').click();
    
    //ENTAO (Then)   
    // Verifica se a p�gina do Linkedin � carregada
       cy.url().should('include', '/feed/');

    // Verifica se a p�gina do Linkedin est� vis�vel, ap�s o login
       cy.get('body').should('not.contain', 'Sign in');
    
  });

  //2.Cenario Login no Linkedin com campo Email invalido
  it("Email invalido quando tenta acessar o Linkedin", () => {
       cy.visit('https://www.linkedin.com/login', {
         
    });
   
       cy.get('input#username')
         .should('be.visible')
         .type('alfa'); // Email inv�lido
    
       cy.get('button[type="submit"]').click();

       cy.get('.invalid_input').should('have.text', "Please enter a valid username.");

  });

  //3.Cenario Login no Linkedin com campo Senha inv�lido
  it("Senha invalida quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      
 });

    cy.get('input#username')
      .should('be.visible')
      .type('Digite seu email para testar'); 
    
    cy.get('input#password')
      .should('be.visible')
      .type('1223456'); //Senha Inv�lida 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Wrong email or password. Try again or create an account .");

});

  //4.Cenario Login no Linkedin com campo Senha vazia
  it("Senha vazia quando tenta acessar o linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      
 });

    cy.get('input#username')
      .should('be.visible')
      .type('Digite seu email para testar'); 
    
    cy.get('input#password')
      .should('be.visible')
      .type(' '); //Senha vazia 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter a password.");

  });

  //5.Cenario Login no Linkedin com campo Email vazio
  it("Email vazio quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
      
 });

    cy.get('input#username')
      .should('be.visible')
      .type(' '); // Email vazio
    
    cy.get('input#password')
      .should('be.visible')
      .type('Digite sua senha para testar');  
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter an email address or phone number.");

  });

  //6.Cenario Login no Linkedin com os campos Email e Senha vazios
  it("Email e senha vazios quando tenta acessar o Linkedin", () => {
    cy.visit('https://www.linkedin.com/login', {
     
 });

    cy.get('input#username')
      .should('be.visible')
      .type(' '); // Email vazio
    
    cy.get('input#password')
      .should('be.visible')
      .type(' '); //Senha vazia 
 
    cy.get('button[type="submit"]').click();

    cy.get('.invalid_input').should('have.text', "Please enter an email address or phone number.");

  });
});
