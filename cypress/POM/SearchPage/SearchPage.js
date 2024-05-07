import {Locators} from './locators'; // Assuming you have defined locators in a separate file

class SearchPage {
    searchFor(keyword) {
        cy.get(Locators.searchInput).type(keyword);
        cy.get(Locators.searchButton).click();
    }

    isSearchSuccessful(keyword) {
        cy.contains(keyword); // Check if the keyword is present in the page
    }
}

export const searchPage = new SearchPage();
