const registrationPage = require('../pageobjects/registration.page');
const loginPage = require('../pageobjects/login.page');
const basePage = require("../pageobjects/base.page")
const chaiExpect = require('chai').expect

describe("Login functionality", async () => {

    beforeEach("Go to login page",async ()=>{

        await basePage.openBasePage("/")
        await basePage.clickSignIn()
        await registrationPage.waitForRegitrationPageLoads();
        await linkSignIn.click()
        await loginPage.headerSignIn.waitForDisplayed();

    })

    it("verify forget password link", async () => {

        await loginPage.emailAddressField.setValue("abc@a.com")
        await loginPage.forgotPasswordLink.click()
        await loginPage.cantRememberYourPasswordHeader.waitForDisplayed()
        const forgotPasswordPageHeader = await loginPage.cantRememberYourPasswordHeader.getText()
        chaiExpect(forgotPasswordPageHeader).to.be.equal('Can\'t remember your password?')

    })

    it("verify forget password functionality when invalid email is provided", async () => {

        await loginPage.emailAddressField.setValue("abc@aop.com")
        await loginPage.forgotPasswordLink.click()
        await $("p#lpw-text").waitForDisplayed()
        const forgotPasswordPageHeader = await $("p#lpw-text").getText()
        chaiExpect(forgotPasswordPageHeader).to.be.equal('We do not have an account associated with that email address. Please sign in as a new customer.')

    })
})




