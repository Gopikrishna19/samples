(function () {
    "use strict";

    var ContactsService = (function () {

        function ContactsService($http) {

            // var repo = "http://private-a73e-aquentuxsociety.apiary-mock.com/members";
            var repo = "members.json";
            var cnts = this;

            cnts.list = [];
            cnts.getAll = getAllContacts;

            //////////////////

            function getAllContacts() {
                return $http.get(repo).success(function (data) {
                    angular.copy(data, cnts.list);
                });
            }
        }

        return ContactsService;
    })();

    angular.module('directory')
        .service('contacts', ['$http', ContactsService]);

}).call(this)