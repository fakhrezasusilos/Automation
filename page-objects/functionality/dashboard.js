import DashboardPage from "../locator/DashboardPage.js";
import { elementIsVisible , elementClick } from "../../helpers/element-action-utils.js";

class DashboardFunctionality {
  constructor(page) {
    this.page = page;
    this.dashboardPage = DashboardPage(this.page);
  }

  async selectMenu(menu) {
    await this.page.waitForLoadState('domcontentloaded');
    await elementClick(this.dashboardPage.menuButton(menu));
  }

  async menuisVisible(menu) {
    return await elementIsVisible(this.dashboardPage.menuButton(menu));
  }

  async isDashboardHeaderVisible() {
    return await elementIsVisible(this.dashboardPage.dashboardHeader);
  }

  async isWelcomeMessageVisible() {
    return await elementIsVisible(this.dashboardPage.welcomeMessage);
  }
}

export default DashboardFunctionality;
