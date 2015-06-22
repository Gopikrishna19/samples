(function () {
    "use strict";

    angular.module('bartend')
        .config(['$routeProvider', routeConfigure]);

    //////////////////

    /**
     * Configure routes for the application
     */
    function routeConfigure($routeProvider) {

        $routeProvider
            .when('/bar', {
                templateUrl: 'partials/view-bar.html',
                controller: 'BarCtrl',
                controllerAs: 'bar'
            })
            .when('/order', {
                templateUrl: 'partials/view-order.html',
                controller: 'OrderCtrl',
                controllerAs: 'ord',

                // check if orders are there before proceeding
                resolve: {
                    orderlist: ['order', '$location', function (order, $location) {
                        if (order.hasOrders()) {
                            return order;
                        } else {
                            $location.path('/bar');
                            return false;
                        }
                    }]
                }
            })
            .otherwise({
                redirectTo: '/bar'
            });

    }

}).call(this);