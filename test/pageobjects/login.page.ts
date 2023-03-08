import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get acceptCookiesButton () {
        return $('.cookie-notice__agree-button');
    }

    public get signInLink () {
        return $('.header-account__sign-in');
    }
    
    public get signInButton () {
        return $('.account-flyout__signin-button');
    }

    public get inputEmail () {
        return $('#email');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email and password
     */
    public async acceptCookies () {
        await (await this.acceptCookiesButton).click()
    }

    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}
export default new LoginPage();
