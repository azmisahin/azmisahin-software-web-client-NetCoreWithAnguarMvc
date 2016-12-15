/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Dashboard In: dashboardFactory.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Controller Configuration
    Manager.Web.factory('dashboardFactory', dashboardFactory);
    // Inject
    dashboardFactory.$inject = ['$http'];
    // Model
    var Model = {};
    // Api
    var Api = {
        Token: 'qw$1€2&3%',
        // Api Domain
        Domain: '//api.azmisahin.com/' //Sample Api URL
        // Api Version
        , Ver: 'api/'
        // Api Services
        , ServicesUri: {
            // Login
            Init: 'Init'
        }
    }
    // Factory
    function dashboardFactory($http) {
        // Service
        var service = {
            Init: getInit
        };
        return service;
        // Get Init
        function getInit() {
            var uri = Api.Domain + Api.Ver + Api.ServicesUri.Init;
            var config = { method: 'get', url: uri, headers: { 'Accept': 'application/json', 'Authorization': 'Token token=' + Api.Token } };
            console.log("Get Request Start", config);
            return $http(config);
        }
    }
})();