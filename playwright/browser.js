import { chromium } from "playwright";

const launchbrowser = async () => {
  return await chromium.launch({ headless: true });
};

export default launchbrowser;
