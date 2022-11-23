class RegistrationPage {

    get headerCreateYourAccount() {
        return $('.sign-in-component__header')
    }

    get firstNameField() {
        return $('input#sign-in-component__FIRST_NAME')
    }

    get emailAddressField() {
        return $('input#sign-in-component__PC_EMAIL_ADDRESS')
    }  

    get passwordField() {
        return $('input#sign-in-component__PASSWORD')
    }
    
    get closeCookieInfoSection() {
        return $('div#onetrust-close-btn-container>button')
    }


    get errorMSgPleaseEnterFirstName(){
        return $("li#required.first_name.registration")
    }

    get errorMSgPleaseEnterPassword(){
        return $("li#required.password.registration")
    }

    get errorMSgPleaseEmailAddress(){
        return $("li#required.pc_email_address.registration")
    }

    get errorMSgPleaseIndicateTermsAndConditions(){
        return $("li#required.accepted_privacy_policy.registration")
    }

    get createAccountButton(){
       return $("//div[@id='cboxLoadedContent']//form//input[value='Create Account']")
    }

    get linkSignIn(){
        return $("//a[text()='Sign In']")
    }

    async waitForRegitrationPageLoads(){
        await this.headerCreateYourAccount.waitForDisplayed({timeout:5000})
        if(this.closeCookieInfoSection.isDisplayed())
        this.closeCookieInfoSection.click()
    }
    
}
  
module.exports = new RegistrationPage();
