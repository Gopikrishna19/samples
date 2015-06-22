(function () {
    "use strict";

    var EditReservationDialogCtrl = (function () {

        function EditReservationDialogCtrl(Dialog) {

            var edt = this;

            edt.close = function () { Dialog.hide(); };
        }

        return EditReservationDialogCtrl;
    })();

    angular.module('diner')
        .controller('EditReservationDialogCtrl', ['Dialog', EditReservationDialogCtrl]);

}).call(this);
