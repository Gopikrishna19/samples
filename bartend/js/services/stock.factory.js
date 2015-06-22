(function () {
    "use strict";

    angular.module('bartend')
        .factory('stock', ['Quantity', stockFactory]);

    //////////////////

    /**
     * Provides list of bar's stock
     * 
     * @param {class} Quantity - inject Quantity class
     * @see factory.quantity.js for implementation
     */
    function stockFactory(Quantity) {

        var _listeners = [];

        var stock = {}

        stock.gin = new Quantity(1.5, 'l');
        stock.vodka = new Quantity(750, 'ml');
        stock.tequila = new Quantity(750, 'ml');
        stock.whiskey = new Quantity(750, 'ml');
        stock.dry_vermouth = new Quantity(750, 'ml');
        stock.sweet_vermouth = new Quantity(750, 'ml');
        stock.bloody_mary_mix = new Quantity(2, 'l');
        stock.agave_nectar = new Quantity(24, 'oz');
        stock.orange_juice = new Quantity(48, 'oz');
        stock.celery_stalks = new Quantity(16);
        stock.cherries = new Quantity(9);
        stock.olives = new Quantity(24);
        stock.limes = new Quantity(36);

        // methods
        Object.defineProperties(stock, {
            has: {
                value: hasStock,
                enumerable: false
            },
            use: {
                value: useStock,
                enumerable: false
            },
            restore: {
                value: restoreStock,
                enumerable: false
            },
            // registers listeners to stock change
            addListener: {
                value: function (cb) { _listeners.push(cb) },
                enumerable: false
            },
            // fire registered listeners
            __fire: {
                value: fireListeners,
                enumerable: false
            }
        })

        return stock;

        //////////////////

        /**
         * Has stock, check if ingredients are in stock
         */
        function hasStock(items) {
            var instock = true;

            for (var item in items) {
                var stk = stock[item];
                var ing = items[item];

                // copy objects
                stk = new Quantity(stk.value, stk.unit);
                ing = new Quantity(ing.value, ing.unit);

                stk.convert('ml', true);
                ing.convert('ml', true);

                instock = instock && (stk.value >= ing.value);
            }

            return instock;
        }

        /**
         * Use stock, remove from stock
         */
        function useStock(items) {
            for (var item in items) {
                // remove from stock
                stock[item].minus(items[item]);
            }
            stock.__fire();
        }

        /**
         * Restore stock, add the ingredients back to stock
         */
        function restoreStock(items) {
            for (var item in items) {
                // remove from stock
                stock[item].plus(items[item]);
            }
            stock.__fire();
        }

        /**
         * Fire all the registered listeners
         */
        function fireListeners() {
            for (var i = 0; i < _listeners.length; ++i) {
                if (typeof _listeners[i] === "function")
                    _listeners[i].call(this);
            }
        }
    }

}).call(this)