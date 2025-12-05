import { Given, Then } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { expect } from "@playwright/test";
import Login from "../pages/Login.js";

Given("User Should be in {string}", async function (url) {
  const page = this.getPage();
  const loginpage = new Login(page);

  await loginpage.goTo(url);
  this.loginpage = loginpage;
});

Given("user enters username", async function () {
  // Write code here that turns the phrase above into concrete
  await this.loginpage.enterusername(await this.getUserName()[0]);
});

Given("Enters the password", async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.loginpage.enterpassword(await this.getPassword()[0]);
});

Then("User Should click on Login btn", async function () {
  await this.loginpage.clicklogin();
});

Then("User Should logged in", async function () {
  await expect(this.getPage()).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
  );
});
