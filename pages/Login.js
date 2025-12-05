class Login {
  constructor(page) {
    this.page = page;

    this.username = this.page.locator("#username");
    this.password = this.page.locator("#password");
    this.loginBtn = this.page.locator("#submit");
  }
  async goTo(url) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });
  }
  async enterusername(username) {
    await this.username.fill("student");
  }
  async enterpassword(password) {
    await this.password.fill("Password123");
  }
  async clicklogin() {
    await this.loginBtn.click();
  }
}
export default Login;
