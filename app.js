/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   Manager Web Site Application
    * Version       :   @package.js.version
    * Description   :   Web site or Application Manager
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package
    * Repository    :   https://github.com/azmisahin/net-core-with-angular-mvc.git
    * Bugs          :   https://github.com/azmisahin/net-core-with-angular-mvc/issues
    * Homepage      :   https://github.com/azmisahin/net-core-with-angular-mvc#readme
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
Manager.Name = 'Manager Application';
Manager.Version = 'v0.0.0.1';
Manager.Domain = 'http://azmisahin.com/';
Manager.Debug = true;
Manager.prototype = (function () {
    // Init
    // Initialize Test
    function Init() {
        console.log("Manager Version : " + version()); Debugger();
        console.log("Hi Debugger");
    }
    //Debug
    function Debugger() {
        if (!Manager.Debug) {
            console = console || {};
            console.log = function () { };
        }
    }
    /*
    version
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    function version() {
        return "0.0.0.1";
    }
    /*
    Public Functions
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    return {
        constructor: Manager
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();
Manager = new Manager();
/// <returns type="Application" />
function Manager() { this.init(); }