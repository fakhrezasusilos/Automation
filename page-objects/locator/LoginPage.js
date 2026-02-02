const LoginPage = (page) => ({
  usernameInput: page.locator(
    'input[name="username"]'
  ),

  passwordInput: page.locator(
    'input[name="password"]'
  ),

  loginButton: page.locator(
    'button[type="submit"]'
  ),

  forgotPasswordButton: page.locator(
    'p:has-text("Forgot your password")'
  ),

  errorMessage: page.locator(
    '.oxd-alert-content-text'
  ),
});

export default LoginPage;
