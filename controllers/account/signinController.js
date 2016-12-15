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
        vm.account = {};
        vm.title = 'Login';
        activate();
        // Active Controller
        function activate() {
            //Resource
            vm.r = r;   
            vm.submit = submit;
        }
        // Submit User
        function submit()
        {
            connect();
        }
        // Services Connect
        function connect()
        {
            vm.message = { status: "success", title: "Authentice" };
            factory.Login(vm.account)
                .then(function successCallback(response) {
                    vm.Models = response;
                    // Authenticated Progress
                    servicesCallBack(response);
                    return vm.Models;
                },
                function errorCallback(response) {
                    vm.Models = response;
                    servicesCallBack(response);
                    // Authentication Service Connection Faild
                    return vm.Models;
                })
        }
        // Serices Connect
        function servicesCallBack(response)
        {
            console.log("Account Service Callback",response);
            if (response.statusText != "OK") {
                vm.message = { status: "success", title: "Services Connection Error" };
                console.log(vm.title); return null;
            }
            if (response.data == null) {
                vm.message = { status: "success", title: "Authentication Services Account Problem" };
                console.log(vm.title); return null;
            }
            if (response.data.isAuthenticated) {
                vm.message = { status: "success", title: "Success" };
                console.log(vm.title);
                $location.path('/app/dashboard');
            }
        }
    }
})();
