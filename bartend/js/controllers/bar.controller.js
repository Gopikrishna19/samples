(function () {
    "use strict";

    /**
     * Bar Controller class
     */
    var BarCtrl = (function () {

        function BarCtrl(stock, recipes) {

            var bar = this;

            bar.stock = stock;
            bar.recipes = recipes;
        }

        return BarCtrl;
    })();

    angular.module('bartend')
        .controller('BarCtrl', ['stock', 'recipes', BarCtrl])

}).call(this)