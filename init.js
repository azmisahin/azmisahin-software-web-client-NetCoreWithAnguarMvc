/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   Web Site Initilazer
    * Version       :   @package.js.version
    * Description   :   Asp.Net Core With Angular MVC Manager Web Shema
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package
    * Repository    :   https://github.com/azmisahin/net-core-with-angular-mvc.git
    * Bugs          :   https://github.com/azmisahin/net-core-with-angular-mvc/issues
    * Homepage      :   https://github.com/azmisahin/net-core-with-angular-mvc#readme
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/
var base = {
    Host: document.location.hostname
    , Origin: document.location.origin
    , Protocol: 'http'
    , Base: ''
    , Area: 'content'
    , Version: new Date().getTime()
};
head.load
    (
    base.Origin + '/lib/bootstrap-css/css/bootstrap.min.css' + '?v=' + base.Version
    , base.Origin + '/lib/jquery/dist/jquery.min.js' + '?v=' + base.Version
    , base.Origin + '/lib/angular/angular.min.js' + '?v=' + base.Version
    , base.Origin + '/lib/angular-resource/angular-resource.min.js' + '?v=' + base.Version
    , base.Origin + '/lib/angular-route/angular-route.min.js' + '?v=' + base.Version
    , base.Origin + '/lib/angular-sanitize/angular-sanitize.min.js' + '?v=' + base.Version
    , function () {
        head.load
            (
            base.Origin + '/content/css/manager.min.css' + '?v=' + base.Version
            , base.Origin + '/content/js/manager.web.min.js' + '?v=' + base.Version
            );
    }
    );