const registrationPage = require('../pageobjects/registration.page');
const basePage = require("../pageobjects/base.page")
const chaiExpect = require('chai').expect

describe("USer Registration", async () => {
    it("verify placeholder values for fields in Registration page", async () => {

        await basePage.openBasePage("/")
        await basePage.clickSignIn()
        await registrationPage.waitForRegitrationPageLoads();

        const fname = await registrationPage.firstNameField.getAttribute('placeholder')
        const email = await registrationPage.emailAddressField.getAttribute('placeholder')
        const pwd = await registrationPage.passwordField.getAttribute('placeholder')

        chaiExpect(fname).to.be.equal('First Name');
        chaiExpect(email).to.be.equal('Email');
        chaiExpect(pwd).to.be.equal('Password');

    })

})




