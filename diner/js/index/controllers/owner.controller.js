(function () {
    "use strict";

    var OwnerCtrl = (function () {

        function OwnerCtrl() {

            var log = this;

            log.login = doLogin;
            log.frgtPass = doFrgtPass;

            //////////////////

            function doFrgtPass() {
                // not implemented
            }

            function doLogin() {
                window.location.href = "owner.html";
            }
        }

        return OwnerCtrl;
    })();

    angular.module('diner')
        .controller('OwnerCtrl', [OwnerCtrl]);

}).call(this);