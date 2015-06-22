(function () {
    "use strict";

    var Padding = (function () {

        function Padding() {

            return function PaddingFilter(e) {
                var n = e.toString(16).toUpperCase();
                return n.length >= 4 ? n : new Array(4 - n.length + 1).join(0) + n;
            };
        }

        return Padding;
    })();

    angular.module('diner')
        .filter('padding', [Padding]);

}).call(this);
