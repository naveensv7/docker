import { setWorldConstructor } from "@cucumber/cucumber";

console.log("✅ CustomWorld loaded");

class CustomWorld {
  constructor() {
    this.sharedDb = {};
    this.data = null;
    this.page = null;
    this.context = null;
    this.browser = null;
    this.name = [];
    this.password = [];
  }
  setInfo(dbInfo) {
    this.sharedDb = dbInfo;
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }

  getInfo() {
    return this.sharedDb;
  }
  clearInfo() {
    this.sharedDb = null;
    this.data = null;
  }

  setBrowser(browser) {
    this.browser = browser;
  }

  getBrowser() {
    return this.browser;
  }

  setContext(context) {
    this.context = context;
  }
  getContext() {
    return this.context;
  }
  setPage(page) {
    this.page = page;
  }
  getPage() {
    return this.page;
  }
  setUserName(name) {
    this.name.push(name);
  }
  getUserName() {
    return this.name;
  }
  setPassword(password) {
    this.password.push(password);
  }
  getPassword() {
    return this.password;
  }
  async cleanup() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
export default CustomWorld;
