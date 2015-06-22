(function () {
    "use strict";

    angular.module('diner')
        .factory('Pages', [PagesFactory]);

    //////////////////

    function PagesFactory() {
        var Pages = [
            { cls: 'rsrv', text: 'Reservations', ctrl: 'ReserveCtrl' },
            { cls: 'seat', text: 'Seating', ctrl: 'SeatCtrl' },
            { cls: 'prof', text: 'Profile' },
            { cls: 'cnts', text: 'Contacts', ctrl: 'ContactCtrl' },
            { cls: 'setn', text: 'Settings' },
            { cls: 'lout', text: 'Logout', noview: true }
        ];

        Pages.getIndexOf = function (cls) {

            for (var i = 0; i < this.length; ++i) {
                if (this[i].cls == cls) return i;
            }
            return -1;
        };

        Pages.base = 'owner';

        return Pages;
    }
}).call(this);
