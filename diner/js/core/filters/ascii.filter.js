(function () {
    "use strict";

    var Ascii = (function () {

        function Ascii() {

            return function AsciiFilter(e) {
                return String.fromCharCode(e);
            }
        }

        return Ascii;
    })();

    angular.module('diner')
        .filter('ascii', [Ascii]);

}).call(this);
