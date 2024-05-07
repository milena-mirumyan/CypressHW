import {Locators} from "../POM/Locators";

class FooterPage {
    clickContactLink() {
        cy.get(Locators.contactLink).click();
    }

    scrollToFooter() {
        cy.scrollTo('bottom');
    }

    isAtFooter() {
        cy.get(Locators.footer).should('be.visible');
    }
}

export const searchPage = new SearchPage();
