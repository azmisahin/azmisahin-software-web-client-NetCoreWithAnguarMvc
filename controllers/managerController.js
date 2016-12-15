/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Manager: managerController.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Controller Configuration
    Manager.Web.controller('managerController', managerController);
    // Inject
    managerController.$inject = ['$location'];
    // Controller
    function managerController($location) {
        var vm = this;
        vm.Models = [];
        vm.title = 'Application';
        activate();
        function activate() {
            vm.r = r;
        }
    }
})();
