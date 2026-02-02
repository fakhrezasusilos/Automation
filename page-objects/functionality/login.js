import LoginPage from '../locator/LoginPage.js';
import { elementAddValue, elementClick } from '../../helpers/element-action-utils.js';
import { expect } from 'playwright/test';

class LoginFunctionality {
  constructor(page) {
    this.page = page;
    this.loginPage = LoginPage(this.page);
  }

  async navigateToLoginPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(users) {
    await elementAddValue(this.loginPage.usernameInput, users.username);
    await elementAddValue(this.loginPage.passwordInput, users.password);
    await elementClick(this.loginPage.loginButton);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getErrorMessageText() {
    await expect(this.loginPage.errorMessage).toBeVisible();
    const errorMessageText = await this.loginPage.errorMessage.textContent();
    return errorMessageText;
  }
  
  async getUserCookie() {
    const cookies = await this.page.context().cookies();
    const userCookie = cookies.find(cookie => cookie.name === 'orangehrm');
    return userCookie;
  }
}
export default LoginFunctionality;