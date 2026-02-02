import { test, expect } from '@playwright/test';
import AdminFunctionality from '../page-objects/functionality/admin.js';
import DashboardFunctionality from '../page-objects/functionality/dashboard.js';
import LoginFunctionality from '../page-objects/functionality/login.js';
import { users } from '../helpers/users.js';
import staffData from '../helpers/staff-data.js';

test.describe('Admin Tests', () => {
  let adminFunctionality;
  let dashboardFunctionality;
  let loginFunctionality;

  test.beforeEach(async ({ page }) => {
    adminFunctionality = new AdminFunctionality(page);
    dashboardFunctionality = new DashboardFunctionality(page);
    loginFunctionality = new LoginFunctionality(page);
    await loginFunctionality.navigateToLoginPage();
    await loginFunctionality.login(users.admin);
    await page.waitForURL(/dashboard/, { timeout: 60000 });
    await dashboardFunctionality.selectMenu('Admin');
  });

  test('Verify Admin Header is Visible', async ({ page }) => {
    expect(await adminFunctionality.isAdminHeaderVisible()).toBe(true);
  });

  test('Admin can create and search user', async ({ }, testInfo) => {
    test.setTimeout(60000);
    const workerId = testInfo.workerIndex % staffData.length;
    const data = staffData[workerId];
    const username = data.username;

    await test.step('Create new user', async () => {
      await adminFunctionality.clickAddUserButton();
      await adminFunctionality.addUser({
        role: 'ESS',
        employee: data.employee,
        username,
        password: users.ess.password,
        status: 'Enabled',
      });
    });

    await test.step('Search created user', async () => {
      await adminFunctionality.searchUser(username);
      await expect(
        await adminFunctionality.isUserVisibleInResult(username)
      ).toBe(true);
    });

    await test.step('Edit created user', async () => {
      await adminFunctionality.editUser(username);
      // Additional assertions for edit functionality can be added here
    });

    await test.step('Delete created user', async () => {
      await adminFunctionality.searchUser(username);
      await adminFunctionality.deleteUser(username);
      expect(
        await adminFunctionality.successDeleteUserVisible()
      ).toBe(true);
    });
  });

});