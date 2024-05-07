import {Locators} from './locators'; // Import Locators object

class IntroPage {

    getIntroText() {
        return cy.get(Locators.pageIntroName).invoke('text');
    }
}

export const introPage = new IntroPage();
