const { element, browser } = require("protractor");

let header = function () {

    let nav_menu = '[data-linktext="primary Nav:@@@"]';
    let verify_secondary_menu = '[role="menu"][aria-label="@@@"]';
    let nav_sub_menu = 'a[data-linktext="primary Nav:@@@:###"]';
    
    this.selectFromTopMenu = (menu)=> {
        element(by.css(nav_menu.replace('@@@', menu))).click();
    };

    this.verifyPresenceOfSecondaryMenu = (menu)=> {
        verify_secondary_menu = verify_secondary_menu.replace('@@@', menu);
        expect(element(by.css(verify_secondary_menu)).isDisplayed()).toBe(true, 'secondary menu is not visible for ' + menu);
    };

    this.selectFromSubMenu = (menu, subMenu)=> {
        nav_sub_menu = nav_sub_menu.replace('@@@', menu).replace('###', subMenu);
        element(by.css(nav_sub_menu)).click();
    }
};
module.exports = new header();