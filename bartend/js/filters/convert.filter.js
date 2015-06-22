(function () {
    "use strict";

    angular.module('bartend')
        .filter('convert', [getFilter]);

    //////////////////

    function getFilter() {
        return convertFilter;
    }

    /**
     * Units and their conversion factors
     */
    var units = ['l', 'oz', 'ml'];
    var factors = [1000, 29.5735];

    /** 
     * Converts from one unit to another
     * 
     * @name: convert
     * 
     * @param {Quantity}  from        - convert from, format: { value: X, unit: Y }
     * @param {string}  to            - unit to which to convert, accepts: l, ml, oz
     * @param {boolean} [force=false] - boolean, optional, force scaling to 0.0~ decimals
     * @param {number}  [precision=2] - number of precision points
     */
    function convertFilter(from, to, force, precision) {

        if (!from || !from.value || !from.unit || !to || units.indexOf(from.unit) < 0 || units.indexOf(to) < 0) {
            /**
             * return Original
             * @ being `undefined`
             * @ has no `value` property
             * @ has no `unit` property
             * @ no `to` unit mentioned
             * @ has no convertable unit
             * @ cannot convert to `to` unit
             */
            return from;
        }

        var fromunit = units.indexOf(from.unit);
        var tounit = units.indexOf(to);
        var newQuant = false;

        if (fromunit == tounit) {
            return roundOff(from, precision);
        } else if (fromunit < tounit) {
            newQuant = downScale(from, fromunit, tounit, force);
        } else {
            newQuant = upScale(from, fromunit, tounit, force);
        }

        return roundOff(newQuant, precision);
    }

    /**
     * Recursive downScale function
     */
    function downScale(quant, from, to, force) {
        if (from == to) return quant;

        var temp = quant.value * factors[from];

        // downscale recursively
        //
        // if converted value is 0.0~ and force scaling
        if ((temp < 1 && force) || temp >= 1) {

            quant.value = temp;
            quant.unit = units[from + 1];

            return downScale(quant, from + 1, to);
        } else {

            return quant;
        }
    }

    /**
     * Recursive upScale function
     */
    function upScale(quant, from, to, force) { // 2, 1        
        if (from == to) return quant;

        var temp = quant.value / factors[from - 1];

        // upscale recursively
        //
        // if converted value is 0.0~ and force scaling
        if ((temp < 1 && force) || temp >= 1) {

            quant.value = temp;
            quant.unit = units[from - 1];

            return upScale(quant, from - 1, to);
        } else {

            return quant;
        }
    }

    /**
     * Round Off value
     */
    function roundOff(quant, precision) {

        var decimals = Math.pow(10, precision === undefined ? 2 : precision);
        quant.value = Math.round(quant.value * decimals) / decimals;

        return quant;
    }

}).call(this);