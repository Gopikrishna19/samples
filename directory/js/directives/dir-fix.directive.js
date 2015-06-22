(function () {
    "use strict";

    function dirFixDirective($window) {

        var win = angular.element($window);

        var Directive = {
            transclude: true,
            template: '<ng-transclude></ng-transclude>',
            link: function (scope, ele, attr) {
                var offset = ele[0].offsetTop;

                win.on('scroll', function (e) {
                    if ($window.scrollY > offset) {
                        ele.addClass('fix');
                        ele.css({ 'top': $window.scrollY - offset + 'px' });
                    } else {
                        ele.removeClass('fix');
                        ele.css({ 'top': 0 });
                    }
                })
            }
        }

        return Directive;
    }

    angular.module('directory')
        .directive('dirFix', ['$window', dirFixDirective]);

}).call(this)