(function () {
    "use strict";

    angular.module('bartend')
        .directive('barStock', [barStock]);

    function barStock() {

        var Directive = {
            scope: {
                bsName: '@',
                bsQuant: '='
            },
            templateUrl: 'partials/bar-stock.html'
        }

        return Directive;
    }

}).call(this);