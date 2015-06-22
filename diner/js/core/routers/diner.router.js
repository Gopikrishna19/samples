(function () {
    "use strict";

    var Router = (function () {

        function Router($routeProvider, PagesProvider) {

            var pages = PagesProvider.$get();
            var base = pages.base;

            pages.forEach(function (page, i) {

                var prop = { templateUrl: 'views/' + base + '/' + page.cls + '.html' }

                if (page.ctrl) {
                    prop.controller = page.ctrl;
                    prop.controllerAs = page.cls;
                }

                if (page.noview) {
                    delete prop.templateUrl;
                    prop.template = ' ';
                }

                $routeProvider.when('/' + page.cls, prop);
            });

            $routeProvider.otherwise({
                redirectTo: '/' + pages[0].cls
            });
        }

        return Router;
    })();

    angular.module('diner')
        .config(['$routeProvider', 'PagesProvider', Router]);

}).call(this);
