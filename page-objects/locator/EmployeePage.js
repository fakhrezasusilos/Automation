const EmployeePage = (page) => ({

  EmployeeHeader: page.locator(
    'h6.oxd-topbar-header-breadcrumb-module'
  ),

  employeeNameInput: page.locator(
    'input[placeholder="Type for hints..."]'
  ).first(),

  employeeIdInput: page.locator(
    'input[placeholder="Type Employee Id"]'
  ),

  searchButton: page.locator(
    'button:has-text("Search")'
  ),

  resetButton: page.locator(
    'button:has-text("Reset")'
  ),

  employeeInResult: (name) =>
    page.locator('.oxd-table-row', { hasText: name }
    ),

  deleteEmployeeButton: (employeeId) =>
    page.locator('.oxd-table-row', { hasText: employeeId })
      .locator('button.oxd-icon-button:has(i.bi-trash)'),

  confirmDeleteButton: page.locator(
    'button:has-text("Yes, Delete")'
  ),

  deleteEmployeeToatstMessage: page.locator(
    '.oxd-toast'
  ),

  noRecordFoundMessage: page.locator(
    '.oxd-text--toast-message'
  ),

  addEmployeeButton: page.locator(
    'button:has-text("Add")'
  ),

  //Add Employee Locators
  firstNameInput: page.locator(
    'input[name="firstName"]'
  ),

  middleNameInput: page.locator(
    'input[name="middleName"]'
  ),

  lastNameInput: page.locator(
    'input[name="lastName"]'
  ),

  employeeIdInput: page
    .locator('.oxd-input-group', { hasText: 'Employee Id' })
    .locator('input'),


  saveButton: page.locator(
    'button:has-text("Save")'
  ),

  employeeNameHeader: (name) => page.locator(
    `h6.oxd-text.oxd-text--h6.oxd-text--strong:has-text("${name}")`
  ),

  menuHeader(menu) {
    return page.locator(`h6:has-text("${menu}")`);
  },

  menuButton(menu) {
    return page.locator(`a:has-text("${menu}")`);
  },

  street1Input: page
    .locator('.oxd-input-group', { hasText: 'Street 1' })
    .locator('input'),

  cityInput: page
    .locator('.oxd-input-group', { hasText: 'City' })
    .locator('input'),

  stateInput: page
    .locator('.oxd-input-group', { hasText: 'State/Province' })
    .locator('input'),

  zipCodeInput: page
    .locator('.oxd-input-group', { hasText: 'Zip/Postal Code' })
    .locator('input'),

  employeeToastMessage: page.locator(
    '.oxd-toast'
  ),

  loadingSpinner: page.locator(
    '.oxd-loading-spinner'
  ),
  
});
export default EmployeePage;
