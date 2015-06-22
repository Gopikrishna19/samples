(function () {
    "use strict";

    angular.module('bartend')
        .factory('recipes', ['Quantity', recipeFactory]);

    //////////////////

    /**
     * Provides list of bar's recipes
     * 
     * @param {class} Quantity - inject Quantity class
     * @see factory.quantity.js for implementation
     */
    function recipeFactory(Quantity) {

        var recipes = {}

        recipes.bloody_mary = {
            vodka: new Quantity(2, 'oz'),
            bloody_mary_mix: new Quantity(4, 'oz'),
            celery_stalks: new Quantity(1)
        }

        recipes.martini = {
            gin: new Quantity(2, 'oz'),
            dry_vermouth: new Quantity(1, 'oz'),
            olives: new Quantity(1)
        }

        recipes.margarita = {
            tequila: new Quantity(2, 'oz'),
            orange_juice: new Quantity(1, 'oz'),
            agave_nectar: new Quantity(1, 'oz'),
            limes: new Quantity(1)
        }

        recipes.screwdriver = {
            vodka: new Quantity(2, 'oz'),
            orange_juice: new Quantity(4, 'oz')
        }

        recipes.manhattan = {
            whiskey: new Quantity(2, 'oz'),
            sweet_vermouth: new Quantity(1, 'oz'),
            cherries: new Quantity(1)
        }

        return recipes;
    }

}).call(this)