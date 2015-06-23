/// <reference path='../libs/angular.js' />

(function () {
    "use strict";

    var MainController = (function () {

        function MainController() {
            var main = this;

            main.add = function () {
                return main.result = parseFloat(main.num1) + parseFloat(main.num2);
            }

            main.subtract = function () {
                return main.result = parseFloat(main.num1) - parseFloat(main.num2);
            }

            main.multiply = function () {
                return main.result = parseFloat(main.num1) * parseFloat(main.num2);
            }

            main.divide = function () {
                if (parseFloat(main.num2) == 0) {
                    main.result = NaN;
                    throw 'divide by zero';
                }
                return main.result = parseFloat(main.num1) / parseFloat(main.num2);
            }
        }

        return MainController;
    })();

    angular.module('calculator')
        .controller('MainCtrl', [MainController]);

}).call(this)