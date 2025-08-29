/// <reference types="cypress"/>

const { email, senha } = require('../../fixtures/data.json')

describe('Suíte - Carrinho de compra', () => {
    it('Deve fazer o pedido na loja Ebac Shop de ponta a ponta, com sucesso', () => {

        //Características do Produto
        let nomeProduto = 'taurus elements shell'
        let tamanho = 'XS'
        let cor = 'Blue'
        let quantidade = 2

        //Selecionando o produto
        cy.buscarProduto(nomeProduto)

        //Adicionando ao carrinho
        cy.adicionarProduto(tamanho, cor, quantidade)

        // Acessando o carrinho
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        // Efetuando login
        cy.fazerLogin(email, senha)

        // Finalizando a compra
        cy.finalizarPedido()
        cy.get('.woocommerce-notice').should('have.text', 'Obrigado. Seu pedido foi recebido.')
    })
})