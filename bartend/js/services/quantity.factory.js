(function () {
    "use strict";

    angular.module('bartend')
        .factory('Quantity', ['unitConverter', quantityConstructor])

    //////////////////

    function quantityConstructor(convert) {

        /**
         * Constructor for Quantity
         *          
         * @param {number} value - Quantity value
         * @param {string} unit  - Quantity's unit: l, oz, ml or n
         */
        function Quantity(value, unit) {
            this.value = value || 0;
            this.unit = unit || 'n';

            // retain original unit format
            this.o_unit = this.unit;

            // for convenience
            this.unit = this.unit.toLowerCase();
        }

        Quantity.prototype.plus = addtiveFunction(+1);
        Quantity.prototype.minus = addtiveFunction(-1);
        Quantity.prototype.convert = convertQuant;

        return Quantity;

        //////////////////        

        /**
         * Generate additive function that adds or subtracts given quantity from current
         * 
         * @param {number} additive
         *      if -1,      returns a subtraction function 
         *      else if +1, returns an addtionfunction
         */
        function addtiveFunction(additive) {

            // fail safe
            additive = additive < 0 ? -1 : +1;

            return function additiveQuants(q) {

                if (q instanceof Quantity) {

                    // convert to same units
                    var unit = this.unit;
                    this.convert(q.unit, true);

                    // add or subtract
                    this.value += q.value * (additive);

                    // convert back
                    this.convert(unit);

                } else if (typeof q === "number") {

                    this.value -= q;
                }

                return this;
            }
        }

        /**
         * Delegate quantity conversion
         */
        function convertQuant(to, force, precision) {

            var temp = convert(this, to, force, precision);
            this.value = temp.value;
            this.unit = temp.unit;

            return this;
        }
    }

}).call(this)