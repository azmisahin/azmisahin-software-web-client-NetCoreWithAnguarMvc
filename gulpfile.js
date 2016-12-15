/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   Stil And Script Builder
    * Version       :   @package.js.version
    * Description   :   Less Style Compile, Css File Minify, Css And Js Version
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package
    * Repository    :   https://github.com/azmisahin/net-core-with-angular-mvc.git
    * Bugs          :   https://github.com/azmisahin/net-core-with-angular-mvc/issues
    * Homepage      :   https://github.com/azmisahin/net-core-with-angular-mvc#readme
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

var WebRoot = './wwwroot/content/';
var AppRoot = '';

// Requare Referans
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var filesize = require('gulp-filesize');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var projectError = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

// Manager Build Init Task
gulp.task('ManagerBuildInit', function () {
    return gulp.src(
        [
            //Application Initialize
            AppRoot + 'init.js'
        ]
        )
        .pipe(concat(AppRoot + 'init.js'))
        .pipe(gulp.dest(WebRoot + 'js/'))
        .pipe(filesize())
        .pipe(uglify())
        .pipe(rename('init.min.js'))
        .pipe(gulp.dest(WebRoot + 'js/'))
        .pipe(filesize())
        .on('error', projectError.log)
});

// Manager Build Task
gulp.task('ManagerBuildApplication', function () {
    return gulp.src(
        [
            //Application Prototype
            AppRoot + 'app.js'
            //Manager Base Module
            , AppRoot + 'module/managerModule.js'
            //Config
            , AppRoot + 'module/managerConfig.js'
            //Resource
            , AppRoot + 'module/managerResource.js'
            //Factory
            , AppRoot + 'factory/account/signinFactory.js'
            , AppRoot + 'factory/account/dashboardFactory.js'
            //Controller
            , AppRoot + 'controllers/account/signinController.js'
            , AppRoot + 'controllers/account/dashboardController.js'

        ]
        )
        .pipe(concat(AppRoot + 'manager.web.js'))
        .pipe(gulp.dest(WebRoot + 'js/'))
        .pipe(filesize())
        .pipe(uglify())
        .pipe(rename('manager.web.min.js'))
        .pipe(gulp.dest(WebRoot + 'js/'))
        .pipe(filesize())
        .on('error', projectError.log)
});

// Manage Build Style
gulp.task('ManagerBuildStyle', function () {
    return gulp.src('./less/manager.less')
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]
      }))
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(WebRoot + '/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(WebRoot + '/css'))
});