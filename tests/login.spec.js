import { test, expect } from '@playwright/test';
import LoginFunctionality from '../page-objects/functionality/login.js';
import DashboardFunctionality from '../page-objects/functionality/dashboard.js';
import auth from '../helpers/auth.js';
import AuthAPI from '../api/authAPI.js';
import { users } from '../helpers/users.js';

test.describe('Login Tests', () => {
  let loginFunctionality;
  let dashboardFunctionality;

  test.beforeEach(async ({ page }) => {
    loginFunctionality = new LoginFunctionality(page);
    dashboardFunctionality = new DashboardFunctionality(page);
    await loginFunctionality.navigateToLoginPage();
  });

  test('Successful Login with Admin Credentials', async ({ page }) => {
    test.setTimeout(60000);
    await loginFunctionality.login(users.admin);
    await expect(page).toHaveURL(/dashboard/);
    expect(await dashboardFunctionality.isDashboardHeaderVisible()).toBe(true);
    expect(await dashboardFunctionality.menuisVisible('Admin')).toBeTruthy();
    expect(await dashboardFunctionality.menuisVisible('PIM')).toBeTruthy();

    const userCookie = await loginFunctionality.getUserCookie();
    const cookieHeader = `${userCookie.name}=${userCookie.value}`;
    await console.log(cookieHeader);
    expect(userCookie).toBeDefined();
    expect(userCookie.value).not.toBe('');
  });

  test('Successful Login with ESS Credentials', async ({ page }) => {
    test.setTimeout(60000);
    await loginFunctionality.login(users.ess);
    await expect(page).toHaveURL(/dashboard/);
    expect(await dashboardFunctionality.isDashboardHeaderVisible()).toBe(true);
    expect(await dashboardFunctionality.menuisVisible('PIM')).toBeFalsy();
    expect(await dashboardFunctionality.menuisVisible('Admin')).toBeFalsy();
  });

  test('Login Attempt with Invalid Credentials', async ({ page }) => {
    test.setTimeout(60000);
    await loginFunctionality.login(users.invalidUser);
    const errorMessage = await loginFunctionality.getErrorMessageText();
    expect(errorMessage).toContain('Invalid credentials');
  });

});