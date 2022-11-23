class LoginPage {


    get headerSignIn() {
        return $("//h4[text()='Sign In']")
    }

    get emailAddressField() {
        return $('#sign-in-component__EMAIL_ADDRESS')
    }


    get passwordField() {
        return $('#sign-in-component__PASSWORD')
    }

    get signInButton() {
        return $("input[value='Sign In']")
    }

    get forgotPasswordLink() {
        return $("//p[@class='forget-password']/a[@class='sign-in-component__fpw-link']")
    }

    get cantRememberYourPasswordHeader() {
        return $("h2.headline--page")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async signUp (firstName, email, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signInButton.click();
    }
}

module.exports = new LoginPage();
