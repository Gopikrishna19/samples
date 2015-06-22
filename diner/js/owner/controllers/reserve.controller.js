(function () {
    "use strict";

    var ReserveCtrl = (function () {

        function ReserveCtrl($filter, Dialog) {

            var rsrv = this;

            rsrv.showDetails = showDetails;
            rsrv.getDate = function () { return new Date(); }

            //////////////////

            function showDetails(i) {

                Dialog.reset();
                Dialog.cls = "det-dlg";

                (function (p) {
                    p.name = "Gopikrishna Sathyamurthy";
                    p.stamp = new Date();
                    p.cnf = $filter('padding')(i);
                    p.people = i - 499;
                    p.phone = '7894561230';
                    p.email = 'someone@nyc.com';
                })(Dialog);

                Dialog.show();
            }
        }

        return ReserveCtrl;
    })();

    angular.module('diner')
        .controller('ReserveCtrl', ['$filter', 'Dialog', ReserveCtrl]);

}).call(this);
