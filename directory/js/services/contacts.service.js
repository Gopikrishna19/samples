(function () {
    "use strict";

    var ContactsService = (function () {

        function ContactsService($http) {

            var repo = "http://private-a73e-aquentuxsociety.apiary-mock.com/members";
            var cnts = this;

            cnts.list = [];
            cnts.getAll = getAllContacts;

            //////////////////

            function getAllContacts() {
                return $http.get(repo).success(function (data) {
                    angular.copy(data, cnts.list);
                    document.querySelectorAll('.loader')[0].classList.remove('on');
                });
            }
        }

        return ContactsService;
    })();

    angular.module('directory')
        .service('contacts', ['$http', ContactsService]);

}).call(this)