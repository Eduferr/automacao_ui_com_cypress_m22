/// <reference types="cypress"/>
 
// Selecionar produto e adiciona ao carrinho
Cypress.Commands.add('buscarProduto', (nomeProduto) => {
    cy.visit('/')
     cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('input[placeholder="Enter your search ..."]').eq(1).type(nomeProduto)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click()
})

//Adicionar produto ao carrinho
Cypress.Commands.add('adicionarProduto', (tamanho, cor, quantidade) => {
    cy.wait(1000)
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('[name="quantity"]').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

// Fazer login na tela de checkout
Cypress.Commands.add('fazerLogin', (email, senha) => {
    cy.get('.showlogin').click()
    cy.get('[name="username"]').type(email)
    cy.get('[name="password"]').type(senha)
    cy.get('[name="login"]').click()
})

// Finalizar pedido
Cypress.Commands.add('finalizarPedido', () => {
    cy.get('.wc_payment_method.payment_method_cod > [name="payment_method"]').click()
    cy.get('[name="terms"]').click()
    cy.get('[name="woocommerce_checkout_place_order"]').click()
})