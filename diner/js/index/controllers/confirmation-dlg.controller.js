(function () {
    "use strict";

    var ConfirmationDialogCtrl = (function () {

        function ConfirmationDialogCtrl(Dialog) {

            var cnf = this;

            cnf.guest = Dialog;
            cnf.close = function () { Dialog.hide(); };
        }        

        return ConfirmationDialogCtrl;
    })();

    angular.module('diner')
        .controller('ConfirmationDialogCtrl', ['Dialog', ConfirmationDialogCtrl]);

}).call(this);
