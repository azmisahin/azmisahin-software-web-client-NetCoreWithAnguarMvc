/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Sign In: dashboardController.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Controller Configuration
    Manager.Web.controller('dashboardController', dashboardController);
    // Inject
    dashboardController.$inject = ['$location', 'dashboardFactory'];
    // Controller
    function dashboardController($location, factory) {
        var vm = this;
        vm.Models = [];
        vm.title = 'Dashboard';
        //activate();
        // Active Controller
        function activate() {
            //Resource
            vm.r = r;
            factory.Init()
                .then(function successCallback(response) {
                    vm.Models = response;
                },
                function errorCallback(response) {
                    vm.Models = response;
                    console.log("err"); return response;
                })
        }
    }
})();
