import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import connectDB from "../db/db.js";
import launchbrowser from "../playwright/browser.js";

//   const cnt = await connectDB();
//   await this.setInfo(cnt);
setDefaultTimeout(20000);
let sharedConnection;
BeforeAll(async function () {
  try {
    sharedConnection = await connectDB();
  } catch (error) {
    console.log("Error Received from DB Connection");
  }

  console.log("Connection established");
});

AfterAll(async function () {
  if (sharedConnection) {
    sharedConnection.end();
    sharedConnection = null;
    console.log("connectin closed");
  }
});
Before(async function () {
  this.setInfo(sharedConnection);
  const [row, fields] = await sharedConnection.execute("select * from users");

  this.setData(row);

  const browser = await launchbrowser();
  const context = await browser.newContext();
  const page = await context.newPage();
  await this.setPage(page);
  await this.setBrowser(browser);
  await this.setContext(context);

  const dt = await this.getData();
  for (let { name, password } of dt) {
    this.setUserName(name);
    this.setPassword(password);
  }
});
After(async function () {
  this.clearInfo();

  this.cleanup();
});
