let homePage = require("../pageObjects/home/home.po");
let header = require("../pageObjects/header/header.po");
let destinationPage = require("../pageObjects/destinations/destinations.po");

describe('Verify Home page and Destinations', function() {

   beforeAll(function() {
      browser.get('');
   });

   it('Validate landing on Home Page', function() {
      homePage.verifyLandingOnHomePage();
   });

   it("Select Destinations from Top menu and verify", function() {
      header.selectFromTopMenu("Destinations");
      header.verifyPresenceOfSecondaryMenu("Destinations");
   });

   it("Selection from secondary menu and verify Destinations", function() {
      header.selectFromSubMenu("Destinations", "Canada & New England");
      destinationPage.verifyDestination("Canada & New England");
   });
});