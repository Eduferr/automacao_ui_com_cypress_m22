class cadastroPage {

    elements = {
        email: () => cy.get('[name="email"]'),
        senha: () => cy.get('.register > :nth-child(2) > [name="password"]'),
        submitBtn: () => cy.get('[name="register"]')
    }

    fillForm(email, senha) {
        this.elements.email().type(email)
        this.elements.senha().type(senha)
    }

    submitForm() {
        this.elements.submitBtn().click()
    }
}
module.exports = new cadastroPage()