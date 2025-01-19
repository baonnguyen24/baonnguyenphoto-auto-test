/// <reference types="cypress" />

describe('page navigation', () => {
    it('should navigate between pages', () => {
        cy.visit('/');

        // Navigate to "About"
        cy.get('[data-cy="mobileToggleBtn"]').click()
            .get('[data-cy="about"]').click();
        cy.location('pathname').should('eq', '/about');
        cy.wait(1000);
        
        // Navigate to "Landscape"
        cy.get('[data-cy="mobileToggleBtn"]').click()
            .get('[data-cy="gallery"]').click()
            .contains('a', 'Landscape').click();
        cy.location('pathname').should('eq', '/landscape');
        cy.wait(1000);
        
        // Navigate to "Cityscape"
        cy.get('[data-cy="mobileToggleBtn"]').click()
        .get('[data-cy="gallery"]').click()
        .contains('a', 'Cityscape').click();
        cy.location('pathname').should('eq', '/cityscape');
        cy.wait(1000);
        
        // Navigate to "Event"
        cy.get('[data-cy="mobileToggleBtn"]').click()
            .get('[data-cy="gallery"]').click()
            .contains('a', 'Event').click();
        cy.location('pathname').should('eq', '/event');
        cy.wait(1000);
        
        // Navigate to "Product"
        cy.get('[data-cy="mobileToggleBtn"]').click()
            .get('[data-cy="gallery"]').click()
            .contains('a', 'Product').click();
        cy.location('pathname').should('eq', '/product');
        cy.wait(1000);

        // Navigate to "Index"
        cy.get('[data-cy="mobileToggleBtn"]').click()
            .get('[data-cy="index"]').click();
        cy.location('pathname').should('eq', '/index');
    });
});