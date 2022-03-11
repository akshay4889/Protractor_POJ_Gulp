const { browser, element } = require("protractor");

let homePage = function () {
    
    let poster_img = by.css('.slick-track');
    let seabourn_search_bar = by.css("#hero .search-positioning");
    let holland_search_bar = by.css(".basecomponent .search-positioning");
    let destination_images = by.css('.unslicked .destination-tile-wrapper');

    this.verifyLandingOnHomePage = ()=>{
        expect(element(poster_img).isDisplayed()).toBe(true, 'Poster Image is not visible');

        if(browser.baseUrl.indexOf("holland") == true)
            expect(element(holland_search_bar).isPresent()).toBe(true, 'Holland search bar is not visible');
        else
            expect(element(seabourn_search_bar).isPresent()).toBe(true, 'Searbourn search bar is not visible');

        expect(element.all(destination_images).count()).toBeGreaterThan(1);
    }

};
module.exports = new homePage();