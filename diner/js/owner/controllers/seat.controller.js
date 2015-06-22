(function () {
    "use strict";

    var SeatCtrl = (function () {

        function SeatCtrl($filter, Dialog) {

            var seat = this;

            seat.assignTable = assignTable;
            seat.showDetails = showDetails;
            seat.getDate = function () { return new Date(); }

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
                    return p.noedit = true;
                })(Dialog);

                Dialog.show();
            }

            function assignTable(i) {

                Dialog.reset();
                Dialog.cls = "det-dlg";

                (function (p) {
                    p.assign = true;
                    return p.noedit = true;
                })(Dialog);

                Dialog.show();
            }
        }

        return SeatCtrl;
    })();

    angular.module('diner')
        .controller('SeatCtrl', ['$filter', 'Dialog', SeatCtrl]);

}).call(this);
