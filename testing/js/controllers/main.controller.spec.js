/// <reference path='../libs/jasmine.js' />

describe('Main Controller', function () {
    var scope;

    beforeEach(module('calculator'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        $controller('MainCtrl as main', { $scope: scope });

        scope.main.num1 = 1;
        scope.main.num2 = 2;
    }));

    describe('Add function', function () {
        it("should add num1 and num2", function () {
            scope.main.add();
            expect(scope.main.result).toEqual(3);
        });

        it("should add negative numbers", function () {
            scope.main.num1 = -1
            scope.main.add();
            expect(scope.main.result).toEqual(1);
        });
    })

    describe('Subtract function', function () {

        it("should subtract num2 from num1", function () {
            scope.main.subtract();
            expect(scope.main.result).toEqual(-1);
        });

        it("should add negative numbers", function () {
            scope.main.num2 = -2;
            scope.main.subtract();
            expect(scope.main.result).toEqual(3);
        });

    });

    describe('Multiply function', function () {

        it("should multiply num1 by num2", function () {
            scope.main.multiply();
            expect(scope.main.result).toEqual(2);
        });
    })

    describe('Division function', function () {

        it("should divide num1 by num2", function () {
            scope.main.divide();
            expect(scope.main.result).toEqual(0.5);
        });

        it("should throw error on trying to divide by zero", function () {
            scope.main.num2 = 0;
            expect(scope.main.divide).toThrow('divide by zero');
            expect(scope.main.result).toBeNaN();
        });
    })

    describe('Generally', function () {
        it("should be NaN if input is not a number", function () {
            scope.main.num1 = "temp";

            scope.main.add();
            expect(scope.main.result).toBeNaN();

            scope.main.subtract();
            expect(scope.main.result).toBeNaN();

            scope.main.multiply();
            expect(scope.main.result).toBeNaN();

            scope.main.divide();
            expect(scope.main.result).toBeNaN();
        })
    })
})