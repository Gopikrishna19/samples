(function () {
    "use strict";

    var HeadCtrl = (function () {

        function HeadCtrl($location, Pages) {
            var head = this;

            head.pages = Pages;
            head.currentPage = head.pages.getIndexOf($location.path().replace('/', ''));
            head.changePage = changePage;

            //////////////////

            function changePage(i) {
                head.currentPage = i;
            }
        }

        return HeadCtrl;
    })();

    angular.module('diner')
        .controller('HeadCtrl', ['$location', 'Pages', HeadCtrl]);

}).call(this);
