(function () {
    "use strict";

    var HomeCtrl = (function () {

        function HomeCtrl() {

            var home = this;

            home.startTime = "10:00 AM";
            home.endTime = "10:00 PM";
        }

        return HomeCtrl;
    })();

    angular.module('diner')
        .controller('HomeCtrl', [HomeCtrl]);

}).call(this);
