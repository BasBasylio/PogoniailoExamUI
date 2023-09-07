import BasePage from "./BasePage";

class HomePage extends BasePage {
    visit() {
        cy.visit('/')
        cy.get('[aria-label="Close Welcome Banner"]').click();
        cy.get('[aria-label="dismiss cookie message""]').click();
    }
}
export default new HomePage();