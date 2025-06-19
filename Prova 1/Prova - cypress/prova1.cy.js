/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
});

describe("Resolução Prova 1 usando Cypress", () => {
  it('Interações com sucesso', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(5)').click(); 
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click(); 
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click(); 

    cy.get('#userName').type('Teste');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#currentAddress').type('Rua Exemplo, 123');
    cy.get('#permanentAddress').type('Rua Exemplo, 123');
    cy.get('#submit').click();
  });
  it('Formulário com campo obrigatório ausente (teste negativo)', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(5)').click(); 
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click(); 
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click(); 

    cy.get('#userName').type('Teste');
    cy.get('#userEmail').type('emailsemarroba');
    cy.get('#currentAddress').type('Rua Exemplo, 123');
    cy.get('#submit').click();
    cy.get('#userEmail').should('have.class', 'field-error');
  });
  it('Adiciona novo usuário à tabela com sucesso', () => {
    cy.visit('https://demoqa.com/');
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click();
    cy.get('#item-3').click(); 
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Teste');
    cy.get('#lastName').type('Usuario');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#age').type('25');
    cy.get('#salary').type('5000');
    cy.get('#department').type('QA');
    cy.get('#submit').click();

    cy.get('.rt-tbody').should('contain', 'Teste');
    cy.get('.rt-tbody').should('contain', 'teste@teste.com');
  });
});
