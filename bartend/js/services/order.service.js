(function () {
    "use strict";

    /**
     * Order Service class
     * 
     * To share data between bar-page and order-page
     */
    var OrderService = (function () {

        function OrderService(recipes) {

            var ord = this;

            ord.orders = populateOrders();
            ord.plus = addtiveFunction(+1);
            ord.minus = addtiveFunction(-1);
            ord.hasOrders = hasOrders;

            //////////////////

            /**
             * Populate orders array based on recipes
             */
            function populateOrders() {

                var orders = [];
                for (var recipe in recipes) {

                    orders.push({ name: recipe, no: 0 });
                }
                return orders;
            }

            /**
             * Generate additive function that adds or subtracts given quantity from current
             * 
             * @param {number} additive
             *      if -1,      returns a subtraction function 
             *      else if +1, returns an addtion function
             */
            function addtiveFunction(additive) {

                // fail safe
                additive = additive < 0 ? -1 : +1;

                return function additiveOrder(name, no) {
                    no = no || 1;

                    var order = findOrderByName(name);

                    if (!order) return;

                    // add or subtract
                    order.no += no * (additive);
                }
            }

            /**
             * Find order by name
             */
            function findOrderByName(name) {
                for (var i = 0; i < ord.orders.length; ++i) {
                    if (ord.orders[i].name == name)
                        return ord.orders[i];
                }
                return null;
            }

            function hasOrders() {

                for (var i = 0; i < ord.orders.length; ++i) {
                    console.log(ord.orders[i].no);
                    if (ord.orders[i].no > 0)
                        return true;
                }
                return false;
            }
        }

        return OrderService;
    })();

    angular.module('bartend')
        .service('order', ['recipes', OrderService]);

}).call(this);