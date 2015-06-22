(function () {
    "use strict";

    var MainController = (function () {

        function MainController(contacts) {

            var main = this;

            contacts.getAll();

            main.contacts = contacts.list;
            main.current = -1;
            main.currentCnt = null;
            main.viewContact = viewContact;

            //////////////////

            function viewContact(i) {
                main.current = i;
                main.currentCnt = main.contacts[i];
            };
        }

        return MainController;
    })();

    angular.module('directory')
        .controller('MainCtrl', ['contacts', MainController]);

}).call(this);