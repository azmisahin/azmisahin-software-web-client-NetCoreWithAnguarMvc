/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Manager: managerModule.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
// Configuration
Manager.Web.config(config);
// inject
config.$inject = ['$stateProvider', '$urlRouterProvider'];
// Config
var proo = [];
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/account");
    var views = '../../views/';

    $stateProvider
        // App Layout
        .state("app", { url: "/app", templateUrl: views + "shared/layout.html" })
        // Login Page
        .state("account", { url: "/account", templateUrl: views + "account/signin.html" })
        // Dashboard
        .state("app.dashboard", { url: "/dashboard", templateUrl: views + "dashboard/index.html" })
}