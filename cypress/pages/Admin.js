/// <reference types="cypress" />

class Admin {
    visit() {
        cy.visit('/admin');
    }

    enterUsername(username){
        cy.get('[data-cy="usernameText"]').type(username);
    }

    enterPassword(password){
        cy.get('[data-cy="passwordText"]').type(password);
    }

    clickLogin(){
        cy.get('[data-cy="submitBtn"]').click();
    }

    login(username, password){
        this.visit();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    selectCategory(category){
        cy.get('[data-cy="dropdownBtn"]').click();
        cy.get('[data-cy="dropdownMenu"]').contains('a', category).click();
    }

    clickUpload(){
        cy.get('[data-cy="uploadBtn"]').click();
    }

    uploadPhoto(fileName){
        cy.fixture(fileName, null).as('myPhoto');
        cy.get('input[type="file"]').selectFile('@myPhoto', {force:true});
    }

    deletePhoto(fileName){
        cy.get('[data-cy="photoGrid"]')
          .find('img[src*="' + fileName + '"]').should('be.visible')
          .closest('div')
          .find('[data-cy="deleteBtn"]')
          .click()
    }
}

export default new Admin();