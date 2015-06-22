(function () {
    "use strict";

    var DetailsDialogCtrl = (function () {

        function DetailsDialogCtrl(Dialog) {

            var det = this;

            det.guest = Dialog;

            det.save= function () { det.close(); }
            det.delete = function () { det.close(); }
            det.close = function () { Dialog.hide(); }
        }

        return DetailsDialogCtrl;
    })();

    angular.module('diner')
        .controller('DetailsDialogCtrl', ['Dialog', DetailsDialogCtrl]);

}).call(this);
