(function () {
    "use strict";

    angular.module('diner')
        .factory('Pages', [PagesFactory]);

    //////////////////

    function PagesFactory() {

        var Pages = [
            { cls: 'home', text: 'Home', ctrl: 'HomeCtrl' },
            { cls: 'res', text: 'Guest', ctrl: 'GuestCtrl' },
            { cls: 'log', text: 'Owner', ctrl: 'OwnerCtrl' }
        ];

        Pages.getIndexOf = function (cls) {

            for (var i = 0; i < this.length; ++i) {
                if (this[i].cls == cls) return i;
            }
            return -1;
        };

        Pages.base = 'index';

        return Pages;
    }

}).call(this);