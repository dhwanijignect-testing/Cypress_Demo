import Regestration from "../pages/registration";
import regestrationDF from "../fixtures/regestrationDF.js";
import staticTexts from "../constants/staticTexts.js";
import staticUrls from "../constants/staticUrls.js";

describe('Student Registration Form', () => {
  var regestration = new Regestration();
  it('Registration is successfull', () => {
    cy.visit(staticUrls.homePage)
    regestration.navigateToRegistrationForm();
    regestration.fillFormDetails();
    regestration.clickOnSubmitButton();

    //Implicit Assertions
    regestration.getModalHeaderText().should("have.text", staticTexts.registrationMessage); 
    regestration.getstudentNameValue().should("be.visible")
    
    //Explicit Assertions
    regestration.getstudentNameValue().then(function(e) {
      expect(e.text()).to.contains(regestrationDF.FirstName)
      expect(e.text()).to.equal(regestrationDF.FirstName + " " + regestrationDF.LastName)
      expect(e.text()).to.be.a('string')
      expect(e).to.be.visible
      assert.isObject(regestration, 'value is object')
      assert.typeOf(e.text(), 'string')
      assert.equal(e.text(), regestrationDF.FirstName + " " + regestrationDF.LastName, 'Student name doesnt match')
    })
  })
})