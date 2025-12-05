import { chromium } from "playwright";

const launchbrowser = async () => {
  return await chromium.launch({ headless: false });
};

export default launchbrowser;
