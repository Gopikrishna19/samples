(function () {
    "use strict";

    /**
     * Order Controller class
     */
    var OrderCtrl = (function () {

        function OrderCtrl(orderlist) {

            var ord = this;

            ord.orders = orderlist.orders;
            ord.total = getTotal();

            //////////////////

            function getTotal() {

                var total = 0;
                ord.orders.forEach(function (e) {
                    total += e.no;
                })
                return total;
            }
        }

        return OrderCtrl;
    })();

    angular.module('bartend')
        .controller('OrderCtrl', ['orderlist', OrderCtrl])
}).call(this);