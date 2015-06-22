/// <reference path='ng.js' />
/// <reference path='common.js' />

var app = angular.module("my-rest", ["ngRoute"]);

/**
 * Application Controllers
 * 
 */

// Seatings page controller
app.controller('seatCtrl', function ($scope, $filter, dlgParams) {
    $scope.showDetails = function (i) {
        /* Dummy  data */
        dlgParams.reset();
        dlgParams.name = "Gopikrishna Sathyamurthy";
        dlgParams.stamp = new Date();
        dlgParams.cnf = $filter('padding')(i);
        dlgParams.people = i - 499;
        dlgParams.phone = '7894561230'
        dlgParams.email = 'someone@nyc.com'
        dlgParams.noedit = true;

        Common.showDialog('det-dlg');
    }

    $scope.assignTable = function (i) {
        console.log(dlgParams);
        dlgParams.reset();
        dlgParams.assign = true;
        dlgParams.noedit = true;


        Common.showDialog('det-dlg');
    }

    /* Temporary functions for static template */
    $scope.getDate = function () { return new Date(); }
});

// Contacts page controller
app.controller('contactCtrl', function ($scope) {
    $scope.currentFilter = 65;
    $scope.filterCnts = function (i) {
        $scope.currentFilter = i;
    }
});

// Reservation details page controller
app.controller('rsrvCtrl', function ($scope, $filter, dlgParams) {
    $scope.showDetails = function (i) {
        // Dummy  data now        
        // in future dlgParams = $scope.data[i];
        //
        dlgParams.reset();
        dlgParams.name = "Gopikrishna Sathyamurthy";
        dlgParams.stamp = new Date();
        dlgParams.cnf = $filter('padding')(i);
        dlgParams.people = i - 499;
        dlgParams.phone = '7894561230'
        dlgParams.email = 'someone@nyc.com'

        Common.showDialog('det-dlg');
    }

    /* Temporary functions for static template */
    $scope.getDate = function () { return new Date(); }
});

// 
app.controller('dlgDetCtrl', function ($scope, dlgParams) {
    $scope.d = dlgParams.assign ? new Common.Guest : dlgParams;

    $scope.save = function () {
        // not implemented
        $scope.close();
    }

    $scope.delete = function () {
        // not implemented
        $scope.close();
    }

    $scope.close = function () {
        Common.closeDialog('det-dlg');
    }
})

app.controller('headCtrl', Common.headController);

/**
* Application Models
* 
*/

app.factory('pages', function () {
    return Common.Pages([
        { cls: 'rsrv', text: 'Reservations', ctrl: 'rsrvCtrl' },
        { cls: 'seat', text: 'Seating', ctrl: 'seatCtrl' },
        { cls: 'prof', text: 'Profile' },
        { cls: 'cnts', text: 'Contacts', ctrl: 'contactCtrl' },
        { cls: 'setn', text: 'Settings' },
        { cls: 'lout', text: 'Logout', noview: true }
    ])
});

app.service('dlgParams', Common.Guest);

/**
 * Application Router
 * 
 */

app.config(function ($routeProvider, pagesProvider) {
    Common.routeConfigure($routeProvider, pagesProvider, 'owner');
});

/**
 * Application Helpers
 * 
 */

app.filter('padding', function () { return Common.Padding; });

app.filter('ascii', function () { return function (e) { return String.fromCharCode(e); } });

app.filter('range', function () {
    return function (a, r, l) {
        var i = l || 0; while (i < r) {
            a.push(i++);
        }; return a;
    }
});