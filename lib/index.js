const puppeteer = require('puppeteer-core');

const browserWSEndpoint = process.env.BROWSERLESS_URL ? process.env.BROWSERLESS_URL : 'ws://localhost:3000';

module.exports = {
  isMultiBrowser: false,

  browser: null,

  pages: {},

  async openBrowser (id, pageUrl) {
    if (!this.browser) {
      this.browser = await puppeteer.connect({ browserWSEndpoint });
    }
    const page = await this.browser.newPage();

    await page.goto(pageUrl);
    this.pages[id] = page;
  },

  async closeBrowser (id) {
    delete this.pages[id];
    await this.browser.close();
  },

  async resizeWindow (id, width, height) {
    await this.pages[id].setViewport({ width, height });
  },

  async takeScreenshot (id, screenshotPath) {
    await this.pages[id].screenshot({ path: screenshotPath });
  },

  async getBrowserList () {
    return ['chrome'];
  },

  async isValidBrowserName (browserName) {
    const browserList = await this.getBrowserList();

    return browserList.includes(browserName);
  },
};
