/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Sign In: signinFactory.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Controller Configuration
    Manager.Web.factory('signinFactory', signinFactory);
    // Inject
    signinFactory.$inject = ['$http'];
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
            Login: 'Login'
        }
    }
    // Factory
    function signinFactory($http) {
        // Service
        var service = {
            Login: getLogin
        };
        return service;
        // Get Login
        function getLogin(model) {
            var uri = Api.Domain + Api.Ver + Api.ServicesUri.Login;
            var config = { data: model, method: 'get', url: uri /*, headers: { 'Accept': 'application/json', 'Authorization': 'Token token=' + Api.Token } // Token By Authorization Live Area */ };
            console.log("Get Login Request Start", config);
            return $http(config)
            //.then(function successCallback(response) { console.log(response); return response; }, function errorCallback(response) { console.log("err"); return response; });
        }
    }
})();
