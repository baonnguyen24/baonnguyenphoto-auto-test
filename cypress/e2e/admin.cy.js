/// <reference types="cypress" />
import Admin from '../pages/Admin';
import { USER_CREDENTIALS } from '../support/constants';
const imgName = 'example.jpg';

describe('Admin features', () => {
    it('should login to admin page', () => {
        Admin.visit();
        Admin.enterUsername(USER_CREDENTIALS.username);
        Admin.enterPassword(USER_CREDENTIALS.password);
        Admin.clickLogin();
        cy.location('pathname').should('eq', '/admin');
    });

    it('should select category and upload file', () => {
        Admin.login(USER_CREDENTIALS.username, USER_CREDENTIALS.password);
        
        Admin.selectCategory('landscape');
        cy.url().should('include', 'galleryName=landscape');

        Admin.clickUpload();
        Admin.uploadPhoto(imgName);

        cy.get('img[src*="${imgName}"]').should('exist');
    });

    it.only('should delete photo', () => {
        Admin.login(USER_CREDENTIALS.username, USER_CREDENTIALS.password);
        Admin.deletePhoto(imgName);
        cy.get('img[src*="${imgName}"]').should('not.exist');
    });
});