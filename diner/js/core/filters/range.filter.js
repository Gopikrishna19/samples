(function () {
    "use strict";

    var Range = (function () {

        function Range() {

            return function RangeFilter(a, r, l) {
                var i = l || 0;
                while (i < r) {
                    a.push(i++);
                }
                return a;
            }
        }

        return Range;
    })();

    angular.module('diner')
        .filter('range', [Range]);

}).call(this);
