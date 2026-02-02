const DashboardPage = (page) => ({

  dashboardHeader: page.locator(
    'h6.oxd-topbar-header-breadcrumb-module'
  ),

  welcomeMessage: page.locator(
    'p.oxd-topbar-header-welcome'
  ),

  menuButton: (menu) => page.locator(
    `a:has-text("${menu}")`
  ),
  
});

export default DashboardPage;
