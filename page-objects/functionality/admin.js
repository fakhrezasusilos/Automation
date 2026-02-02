import AdminPage from "../locator/AdminPage.js";
import { elementAddValue, elementClick, elementIsVisible, elementGetText } from "../../helpers/element-action-utils.js";
import EmployeePage from "../locator/EmployeePage.js";

class AdminFunctionality {
  constructor(page) {
    this.page = page;
    this.adminPage = AdminPage(this.page);
    this.employeePage = EmployeePage(this.page);
  }

  async isAdminHeaderVisible() {
    return await elementIsVisible(this.adminPage.adminHeader);
  }

  async clickAddUserButton() {
    await elementClick(this.adminPage.addUserButton);
  }

  async editUser(username) {
    await elementClick(this.adminPage.editUserButton(username), 8000);
    await elementClick(this.adminPage.statusDropdown);
    await elementClick(this.adminPage.statusOption('Disabled'));
    await elementClick(this.adminPage.saveButton);
    await this.isUserVisibleInResult(username);
  }

  async deleteUser(username) {
    await elementClick(this.adminPage.deleteUserButton(username), 8000);
    await elementClick(this.adminPage.confirmDeleteButton);
    await this.successDeleteUserVisible();
  }

  async addUser({ role, employee, username, password, status }) {

    await elementClick(this.adminPage.userRoleDropdown);
    await elementClick(this.adminPage.userRoleOption(role));

    await elementAddValue(this.adminPage.employeeNameInput, employee);
    await elementClick(this.adminPage.employeeNameSuggestion(employee));

    await elementClick(this.adminPage.statusDropdown);
    await elementClick(this.adminPage.statusOption(status));

    await elementAddValue(this.adminPage.usernameInput, username);
    await elementAddValue(this.adminPage.passwordInput, password);
    await elementAddValue(this.adminPage.confirmPasswordInput, password);

    await elementClick(this.adminPage.saveButton);
    await this.isUserVisibleInResult(username);
  }

  async searchUser(username) {
    await elementAddValue(this.adminPage.usernameInput, username, 8000);
    await elementClick(this.adminPage.searchButton);
    await this.employeePage.loadingSpinner.waitFor({ state: 'hidden' });
  }

  async isUserVisibleInResult(username) {
    return await elementIsVisible(this.adminPage.userInResult(username), 8000);
  }

  async successDeleteUserVisible() {
    return await elementIsVisible(this.adminPage.deleteUserToatstMessage);
  }

  async getSuccessMessageText() {
    return await elementGetText(this.adminPage.successMessage);
  }

}

export default AdminFunctionality;