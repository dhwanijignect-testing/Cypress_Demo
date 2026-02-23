
const firstName = 'input#firstName';
const lastName = 'input#lastName';
const email = 'input#userEmail';

class Regestration {
    fillFormDetails() {
        cy.get(firstName).type(regestrationDF.FirstName);
        cy.get(lastName).type(regestrationDF.LastName);
        cy.get(email).type(regestrationDF.Email);
        cy.get(femaleRadioButton).should('not.to.be.checked').click();
        cy.get(contact).type(regestrationDF.Contact);
        cy.get(subject).should("have.class", "subjects-auto-complete__value-container").type(regestrationDF.Subject);
        cy.get(subjectOption).click();
        cy.get(hobby).click();
        cy.get(uploadFile).selectFile('Cypress/fixtures/flower.jpg');
        cy.get(address).should("have.id", 'currentAddress').type(regestrationDF.Address);
        cy.get(state).click();
        cy.get(StateOption).click();
        cy.get(city).click();
        cy.get(cityOption).click();
    }
    clickOnSubmitButton() {
        cy.get(submitButton).click();
    }
    getModalHeaderText() {
        return cy.get(modalHeader);
    }
    getstudentNameValue() {
        return cy.get(studentNameValue);
    }
    getEmailValue() {
        return cy.get(emailValue);
    }
    navigateToRegistrationForm() {
        cy.visit('https://demoqa.com/automation-practice-form')
    }

}
export default Regestration