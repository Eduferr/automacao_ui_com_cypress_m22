class homePage {

    login = {
        url: () => cy.visit('/'),
        submitBtn: () => cy.get('.icon-user-unfollow')
    }

    submit() {
        this.login.url()
        this.login.submitBtn().click()
    }

}

module.exports = new homePage