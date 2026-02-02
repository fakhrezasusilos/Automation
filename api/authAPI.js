import auth from "../helpers/auth.js";

export default class AuthAPI {
  constructor(request, baseURL) {
    this.request = request;
    this.baseURL = baseURL;
    this.loginUrl = `${this.baseURL}/web/index.php/auth/validate`;
  }

  // Login and store orangehrm cookie in memory
  async login(username, password) {
    const response = await this.request.post(this.loginUrl, {
      data: {
        username,
        password,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // OR use form encoding
    });

    if (!response.ok()) {
      throw new Error(`Login failed with status ${response.status()}`);
    }

    const cookies = response.headers()['set-cookie'];
    console.log('Cookies:', cookies);
  }

  cookieExists() {
    return !!auth.cookieStored;
  }

  getCookie() {
    if (!this.cookieExists()) throw new Error('Cookie not found. Please login first.');
    return auth.cookieStored;
  }
}
