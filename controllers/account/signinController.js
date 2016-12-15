/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Sign In: signinController.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Controller Configuration
    Manager.Web.controller('signinController', signinController);
    // Inject
    signinController.$inject = ['$location', 'signinFactory'];
    // Controller
    function signinController($location, factory) {
        var vm = this;
        vm.Models = [];
        vm.title = 'Giriş';
        activate();
        // Active Controller
        function activate() {
            factory.Login()
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
