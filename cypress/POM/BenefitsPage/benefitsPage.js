import {Locators} from "../POM/Locators";

class BenefitsPage {
    navigateToBenefits() {
        cy.get(Locators.exploreBenefitsButton).click();
    }

    clickContactLink() {
        cy.get(Locators.contactLink).click();
    }

    isAt() {
        cy.get(Locators.benefitsPage).should('be.visible');
    }
}

export const benefitsPage = new BenefitsPage();
