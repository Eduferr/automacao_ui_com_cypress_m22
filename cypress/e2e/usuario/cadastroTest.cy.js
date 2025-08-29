/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"
import cadastroPage from "../../support/pages/cadastro.page"
import homePage from "../../support/pages/home.page"

describe('Suíte - Criar Conta de usuário', () => {

  let nome = faker.person.firstName()
  let email = nome + Math.floor(Math.random() * 1000) + "@teste.com"
  let senha = 123456

  it('Deve criar uma conta com sucesso', () => {

    homePage.submit() //Acessando a página de cadastro
    cadastroPage.fillForm(email, senha)
    cadastroPage.submitForm()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('be.visible')
  
  })
})