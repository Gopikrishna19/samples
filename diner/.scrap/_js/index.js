/// <reference path='ng.js' />
/// <reference path='common.js' />

"use strict";

var app = angular.module('my-rest', ['ngRoute']);

/**
 * Application Controllers
 * 
 */

app.controller('dlgCnfCtrl', function ($scope, dlgCnfParams) {
    $scope.g = dlgCnfParams;
    $scope.close = function () {
        Common.closeDialog('cnf-dlg');
    };
});

app.controller('dlgEditCtrl', function ($scope) {
    $scope.close = function () {
        Common.closeDialog('edt-dlg');
    };
})

app.controller('logCtrl', function ($scope) {
    $scope.login = function () {
        window.location.href = "owner.html";
    }

    $scope.frgtPass = function () {
        // not implemented
    }
})

app.controller('resCtrl', function ($scope, $filter, dlgCnfParams) {
    
    $scope.save = function () {
        // not implemented
        // dummy data
        console.log(dlgCnfParams);
        dlgCnfParams.name = $scope.g.name;
        dlgCnfParams.stamp = $scope.g.stamp;
        dlgCnfParams.cnf = $filter('padding')(205);

        Common.showDialog('cnf-dlg');
        $scope.reset();
    }

    $scope.getCnf = function () {
        Common.showDialog('edt-dlg');
    }

    $scope.reset = function () {
        $scope.g = new Common.Guest();
    }
});

app.controller('homeCtrl', function ($scope) {
    // static data
    $scope.startTime = "10:00 AM";
    $scope.endTime = "10:00 PM"
})

app.controller('headCtrl', Common.headController);

/**
* Application Models
* 
*/

app.factory('pages', function () {
    return Common.Pages([
        { cls: 'home', text: 'Home', ctrl: 'homeCtrl' },
        { cls: 'res', text: 'Guest', ctrl: 'resCtrl' },
        { cls: 'log', text: 'Owner', ctrl: 'logCtrl' }
    ]);
});

app.service('dlgCnfParams', Common.Guest);

/**
 * Application Router
 * 
 */

app.config(function ($routeProvider, pagesProvider) {
    Common.routeConfigure($routeProvider, pagesProvider, 'index');
});

/**
 * Application Helpers
 * 
 */

app.filter('padding', function () { return Common.Padding; });