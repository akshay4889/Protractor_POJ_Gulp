const { element, browser, ExpectedConditions } = require("protractor");

let destinationPage = function () {

    let verify_destination_landing = by.css('.title.heading');
    let view_cruise_button = by.css('.cta-holder.lvp [role="button"]');
    

    this.verifyDestination = (destination)=> {
        browser.wait(ExpectedConditions.presenceOf(element(verify_destination_landing)), 5000);

        expect(element(verify_destination_landing).isDisplayed()).toBeTruthy();
        expect(element(verify_destination_landing).getText()).toContain(destination.toUpperCase());
        expect(element(view_cruise_button).isDisplayed()).toBeTruthy();        
    }
};
module.exports = new destinationPage();