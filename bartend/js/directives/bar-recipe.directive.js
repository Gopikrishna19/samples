(function () {
    "use strict";

    angular.module('bartend')
        .directive('barRecipe', ['stock', barRecipe]);

    function barRecipe(stock) {

        var Directive = {
            scope: {
                brRecipe: '=',
                brIng: '='
            },
            replace: true,
            templateUrl: 'partials/bar-recipe.html',
            controller: ['order', brCtrl],
            controllerAs: 'br',
            link: brLink
        }

        return Directive;

        //////////////////

        /**
         * Bar Recipe Controller
         */
        function brCtrl(order) {
            var br = this;

            br.count = 0;
            br.incCount = incCount;
            br.decCount = decCount;
            br.available = true;

            // listen to stock changes
            stock.addListener(function () {
                br.available = stock.has(br.ing);
            })

            /////////

            /**
             * self explanatory
             */
            function incCount() {
                // check if in stock, if use
                if (stock.has(br.ing)) {
                    stock.use(br.ing);
                    br.count += 1;
                    order.plus(br.recipe);
                }
            }

            /**
            * self explanatory
            */
            function decCount() {
                // check if in stock, if use
                if (br.count > 0) {
                    stock.restore(br.ing);
                    br.count -= 1;
                    order.minus(br.recipe);
                }
            }

        }

        /**
         * The linking function
         */
        function brLink(scope, ele, attr, br) {
            br.recipe = scope.brRecipe;
            br.ing = scope.brIng;
        }
    }

}).call(this);