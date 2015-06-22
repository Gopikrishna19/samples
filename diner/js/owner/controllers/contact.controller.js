(function () {
    "use strict";

    var ContactCtrl = (function () {

        function ContactCtrl() {

            var cnts = this;

            cnts.currentFilter = 65;

            cnts.filterCnts = function (i) { cnts.currentFilter = i; };
        }

        return ContactCtrl;
    })();

    angular.module('diner')
        .controller('ContactCtrl', [ContactCtrl]);

}).call(this);
