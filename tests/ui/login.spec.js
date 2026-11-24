import {test , expect } from '../../fixtures/testFixtures.js';
import { loginData } from '../../test-data/loginData.js';
import { Logger } from '../../utils/Logger.js';

test('SauceDemo login page should open', async ({ loginPage })=>{
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
})

test('Standard user should login successfully', async({loginPage, page})=>{
    Logger.info('Starting successful login test')
    Logger.info('Entering Username and Password')

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    Logger.info('Verifying successful login');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
    Logger.info('Login test completed successfully');
})

test('Invalid password should show an error message', async({loginPage})=>{
    Logger.info('Starting invalid login test');
    Logger.info('Trying login with incorrect password');
    await loginPage.login(
        loginData.validUser.username,
        'wrong_password'
    );
    Logger.info('Verifying error message');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
        'Username and password do not match'
    );
    Logger.info('Invalid login test completed successfully');
});