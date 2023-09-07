export default class BasePage {

    getLoginOrRegisterButton() {
        cy.log('**Opening account login page...**');
        cy.visit('/#');
    }
}