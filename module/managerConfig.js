/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Manager: managerModule.js v0.0.0.1
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
(function () {
    'use strict';
    // Config
    Manager.Web.config(['$routeProvider',
        function ($routeProvider) {
            var views = '../../views/';
            $routeProvider.
                when('/dashboard', {
                    templateUrl: views + 'dashboard/index.html'
                }).
                when('/signin',
                {
                    templateUrl: views + 'account/signin.html'
                }).
                otherwise({
                    redirectTo: '/signin'
                });
        }]);
})();