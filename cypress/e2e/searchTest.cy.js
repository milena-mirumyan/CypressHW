import {Locators} from "../POM/Locators"; // Import the locators

describe('Search Test', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Test Successful Search', () => {
        const keyword = "decimals";

        console.log(Locators);

        // Perform search
        cy.get("#block-swiftypesearch > div > form > input").type(keyword);
        cy.get(Locators.searchButton).click();

        // Verify search results
        cy.get(".st-ui-injected-search-summary > .st-query-present").should('exist').and('contain.text', keyword);


        cy.get(Locators.pageIntroName).should('contain.text', 'Reading & Math for K-5');

        // Scroll to footer
        cy.get(Locators.footer).scrollIntoView();
        cy.get(Locators.footer).should('be.visible');
    });

    it('Test Empty Search', () => {
        const keyword = "";
        // Perform empty search
        cy.get("#block-swiftypesearch > div > form > input").clear();
        cy.get("#block-swiftypesearch > div > form > button > img").click();

        // Verify no search results
        cy.get('.searchformtop > .st-default-search-input').should('exist').and('contain.text', keyword);

        // Verify intro text in this new page
        cy.get(Locators.pageIntroName).should('contain.text', 'Reading & Math for K-5');
    });
});
