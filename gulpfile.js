const protractor = require("gulp-protractor").protractor;
const webdriver_update = require('gulp-protractor').webdriver_update_specific;
const gulp = require('gulp');

gulp.task('webdriver_update', webdriver_update({
    webdriverManagerArgs: ['--ignore_ssl']
}));

gulp.task('run_holland_specs', runHollandSpecs);

gulp.task('run_seabourn_specs', defaultTask);

function defaultTask() {
    return gulp.src(["./specs/*.spec.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: [
            '--baseUrl', 'https://www.seabourn.com/'
        ]
    }))
    .on('error', function(e) { throw e }
    )
}

function runHollandSpecs() {
    return src(["./specs/*.spec.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: [
            '--baseUrl', 'https://www.hollandamerica.com/'
        ]
    }))
    .on('error', function(e) { throw e }
    )
}
exports.default = defaultTask