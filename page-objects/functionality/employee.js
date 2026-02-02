import { expect } from '@playwright/test';
import EmployeePage from '../locator/EmployeePage.js';
import { elementIsVisible, elementClick, elementAddValue } from '../../helpers/element-action-utils.js';

class EmployeeFunctionality {
  constructor(page) {
    this.page = page;
    this.employeePage = EmployeePage(this.page);
  }

  async isEmployeeListHeaderVisible() {
    return await elementIsVisible(this.employeePage.EmployeeHeader);
  }

  async createEmployee({ firstName, lastName, employeeId }) {
    await elementClick(this.employeePage.addEmployeeButton);
    await this.employeePage.loadingSpinner.waitFor({ state: 'hidden' });
    console.log('FILL VALUE:', firstName);
    await elementAddValue(this.employeePage.firstNameInput, firstName);
    console.log('FILL VALUE:', lastName);
    await elementAddValue(this.employeePage.lastNameInput, lastName);
    console.log('FILL VALUE:', employeeId);
    await elementAddValue(this.employeePage.employeeIdInput, employeeId);
    await elementClick(this.employeePage.saveButton);
    await this.employeePage.loadingSpinner.waitFor({ state: 'hidden' });
    await this.page.waitForURL(/viewPersonalDetail/, { timeout: 60000 });
  }

  async searchEmployee({ firstName, lastName }) {
    await elementAddValue(this.employeePage.employeeNameInput, `${firstName} ${lastName}`);
    await elementClick(this.employeePage.searchButton);
    await this.employeePage.loadingSpinner.waitFor({ state: 'hidden' });
    await elementIsVisible(this.employeePage.employeeInResult(`${firstName} ${lastName}`));
  }

  async updateEmployeeAddress({ address1, city, state, zipCode }) {
    await elementClick(this.employeePage.menuButton('Contact Details'));
    await elementAddValue(this.employeePage.street1Input, address1);
    await elementAddValue(this.employeePage.cityInput, city);
    await elementAddValue(this.employeePage.stateInput, state);
    await elementAddValue(this.employeePage.zipCodeInput, zipCode);
    await elementClick(this.employeePage.saveButton);
    await elementIsVisible(this.employeePage.employeeToastMessage);
  }

  async deleteEmployee(employeeId) {
    await elementClick(this.employeePage.deleteEmployeeButton(employeeId));
    await elementClick(this.employeePage.confirmDeleteButton);
    await elementIsVisible(this.employeePage.employeeToastMessage);
  }

  async isEmployeeCreatedSuccessfully(firstName, lastName) {
    await expect(
      this.page.getByText(`${firstName} ${lastName}`, { exact: true })
    ).toBeVisible({ timeout: 10000 });
  }
}
export default EmployeeFunctionality;
