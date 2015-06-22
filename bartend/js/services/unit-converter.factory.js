(function () {
    "use strict";

    angular.module('bartend')
        .factory('unitConverter', ['$filter', unitConverterFactory]);

    /**
     * Just for the sake of injection and convenience
     * 
     * like instead of injecting $filter and accessing the `convert` using `$filter('convert')` everytime,
     * just inject unitConverter (which does samething, eventually) and enjoy
     * 
     * @returns convertFilter
     * @see     filter.convert.js for implementation
     */
    function unitConverterFactory($filter) {
        return $filter('convert');
    }

}).call(this);