const basePage = require("../pageobjects/base.page")
const cartPage = require("../pageobjects/cart.page")
const chaiExpect = require('chai').expect

describe("Add to cart functionality", async () => {
    
    it("verify add to bag", async () => {

        await basePage.openBasePage("/")
        await basePage.makeupLink.waitForClickable()
        browser.moveToElement(await basePage.makeupLink())
        await basePage.makeupLink.click()
        basePage.siteHeaderMenu.waitForDisplayed({timeout:20000})
        await basePage.clikProductFromSiteHeaderMenu('Lipsticks')
        await basePage.selectProductFromGrid.click()
        await basePage.addToBagButton.waitForDisplayed()
        await basePage.addToBagButton.click()
        await basePage.cartButton.click()
        await cartPage.shoppingCartHeader.waitForDisplayed()
        const shoppingCartHeader= await cartPage.shoppingCartHeader.getText()
        const continueCheckout = await cartPage.continueCheckOutButton().getText()
        const orderSummaryHeader = await cartPage.orderSummaryHeader.getText()
        
        chaiExpect(shoppingCartHeader).to.be.contains('Shopping Cart')
        chaiExpect(orderSummaryHeader).to.be.contains('Order Summary')
        chaiExpect(continueCheckout).to.be.contains('Continue Checkout')
        
    })
})




