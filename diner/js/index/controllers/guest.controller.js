(function () {
    "use strict";

    var GuestCtrl = (function () {

        function GuestCtrl(Dialog, $filter) {

            var res = this;

            res.guest = {};
            res.edit = editReservation;
            res.save = saveReservation;
            res.reset = function () { res.guest = null; }

            //////////////////

            function saveReservation(form) {
                console.log(this, form);

                Dialog.reset();
                Dialog.cls = "cnf-dlg";

                (function (p, g) {
                    p.name = g.name;
                    p.stamp = g.stamp;
                    p.cnf = $filter('padding')(205);
                })(Dialog, res.guest);

                Dialog.show();
            }

            function editReservation() {

                Dialog.reset();
                Dialog.cls = "edt-dlg";

                Dialog.show();
            }
        }

        return GuestCtrl;
    })();

    angular.module('diner')
        .controller('GuestCtrl', ['Dialog', '$filter', GuestCtrl]);

}).call(this);
