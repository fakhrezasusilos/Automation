import { test, expect } from '@playwright/test';
import EmployeeFunctionality from '../page-objects/functionality/employee.js';
import DashboardFunctionality from '../page-objects/functionality/dashboard.js';
import LoginFunctionality from '../page-objects/functionality/login.js';
import { users } from '../helpers/users.js';
import employeeData from '../helpers/employee-data.js';
import EmployeeAPI from '../api/employee.js';

test.describe('Employee Tests', () => {
  let employeeFunctionality;
  let dashboardFunctionality;
  let loginFunctionality;
  let employeeAPI;
  let cookieHeader;

  test.beforeEach(async ({ page }) => {
    test.setTimeout(90000);
    employeeFunctionality = new EmployeeFunctionality(page);
    dashboardFunctionality = new DashboardFunctionality(page);
    employeeAPI = new EmployeeAPI(page.request, process.env.BASE_URL, cookieHeader);
    loginFunctionality = new LoginFunctionality(page);
    await loginFunctionality.navigateToLoginPage();
    await loginFunctionality.login(users.admin);
    const userCookie = await loginFunctionality.getUserCookie();
    cookieHeader = `${userCookie.name}=${userCookie.value}`;
    console.log('Stored Cookie after login:', cookieHeader);
    await page.waitForURL(/dashboard/, { timeout: 60000 });
    await dashboardFunctionality.selectMenu('PIM');
  });

  test('Admin can add, update and delete employee', async ({ }, testInfo) => {
    test.setTimeout(180000);
    const firstName = `Auto_${Date.now()}`;
    const lastName = `User_${testInfo.workerIndex}`;
    const employeeId = `EMP${testInfo.workerIndex}${Date.now().toString().slice(-6)}`;
    const address1 = `123 Main St ${testInfo.workerIndex}`;
    const city = 'Metropolis';
    const state = 'NY';
    const zipCode = `1000${testInfo.workerIndex}`;

    await test.step('Create new employee', async () => {
      await employeeFunctionality.createEmployee({
        firstName,
        lastName,
        employeeId,
      });
      await employeeFunctionality.isEmployeeCreatedSuccessfully(firstName, lastName)
      const response = await employeeAPI.getEmployeeDetails(employeeId);
      const res = await response.json();
      console.log('Employee Details from API:', res);
      expect(res.data[0].employeeId).toBe(employeeId);
      expect(res.data[0].firstName).toBe(firstName);
      expect(res.data[0].lastName).toBe(lastName);
    });

    await test.step('Update employee address', async () => {
      await employeeFunctionality.updateEmployeeAddress({
        address1: address1,
        city: city,
        state: state,
        zipCode: zipCode,
      });
    });

    await test.step('Search created employee', async () => {
      await dashboardFunctionality.selectMenu('PIM');
      await employeeFunctionality.searchEmployee({
        firstName,
        lastName,
      });
    });

    await test.step('Delete created employee', async () => {
      await employeeFunctionality.deleteEmployee(`${employeeId}`);
      await employeeFunctionality.searchEmployee({
        firstName,
        lastName,
      });
    });
  });

});