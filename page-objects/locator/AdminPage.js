const AdminPage = (page) => ({

  adminHeader: page.locator(
    'h6.oxd-topbar-header-breadcrumb-module'
  ),

  filterArrowButton: page.locator(
    'button.oxd-icon-button i.bi-caret-down-fill'
  ),

  searchButton: page.locator(
    'button:has-text("Search")'
  ),

  userInResult: (username) =>
    page.locator('.oxd-table-row', { hasText: username }
    ),

  editUserButton: (username) =>
    page.locator('.oxd-table-row', { hasText: username })
      .locator('button.oxd-icon-button:has(i.bi-pencil-fill)'),

  deleteUserButton: (username) =>
    page.locator('.oxd-table-row', { hasText: username })
      .locator('button.oxd-icon-button:has(i.bi-trash)'),

  confirmDeleteButton: page.locator(
    'button:has-text("Yes, Delete")'
  ),

  deleteUserToatstMessage: page.locator(
    '.oxd-toast'
  ),

  addUserButton: page.locator(
    'button:has-text("Add")'
  ),

  userRoleDropdown: page
    .locator('.oxd-input-group', { hasText: 'User Role' })
    .locator('.oxd-select-text'),

  userRoleOption: (role) =>
    page.locator('.oxd-select-option', { hasText: role }),

  employeeNameInput: page
    .locator('.oxd-input-group', { hasText: 'Employee Name' })
    .locator('input'),

  employeeNameSuggestion: (name) =>
    page.locator('.oxd-autocomplete-option', { hasText: name }),

  statusDropdown: page
    .locator('.oxd-input-group', { hasText: 'Status' })
    .locator('.oxd-select-text'),

  statusOption: (status) =>
    page.locator('.oxd-select-option', { hasText: status }),

  usernameInput: page
    .locator('.oxd-input-group', { hasText: 'Username' })
    .locator('input'),

  passwordInput: page
    .locator('.oxd-input-group')
    .filter({ has: page.locator('label', { hasText: /^Password$/ }) })
    .locator('input'),

  confirmPasswordInput: page
    .locator('.oxd-input-group')
    .filter({ has: page.locator('label', { hasText: 'Confirm Password' }) })
    .locator('input'),

  saveButton: page.locator(
    'button[type="submit"]:has-text("Save")'
  ),

  successMessage: page.locator(
    '.oxd-toast'
  ),

  noUserInResultMessage: page.locator(
    '.oxd-text--toast-message'
  ),
  
});

export default AdminPage;
