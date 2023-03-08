import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts';
import SecurePage from '../pageobjects/secure.page.ts';

const pages = {
    login: LoginPage
}

Given('I am on the Calvin Klein homepage', async (page) => {
    await pages[page].open()
});


When('I click on the Accept All button', async(page) => {
    await LoginPage. $(`=${linkText}`).click();
});



When('I enter valid email and password', async (email, password) => {
    await LoginPage.login(email, password)
});



Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});