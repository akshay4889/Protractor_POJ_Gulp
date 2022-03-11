exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
 
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
       'browserName': 'chrome'
    },
 
    framework: 'jasmine',

    onPrepare: function(){
        browser.ignoreSynchronization = true;
    },
    specs: ['./**/e2e_app_validateLogin.spec.js']
}
