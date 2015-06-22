(function () {
    "use strict";

    var Dialog = (function () {

        function Dialog() {

        }

        Object.defineProperties(Dialog.prototype, {
            show: { value: showDialog },
            hide: { value: hideDialog },
            reset: { value: resetDialog }
        });

        return Dialog;

        //////////////////

        function resetDialog() {
            for (var prop in this) {
                if (this.hasOwnProperty(prop))
                    delete this[prop];
            }
        }

        function showDialog() {
            var dialog = document.querySelector("." + this.cls);

            if (!dialog) return false;

            dialog.classList.add('show');

            if (typeof this.onshow === "function") this.onshow();
        }

        function hideDialog() {
            var dialog = document.querySelector("." + this.cls);

            if (!dialog) return false;

            dialog.classList.remove('show');

            if (typeof this.onhide === "function") return this.onhide();
        }
    })();

    angular.module('diner')
        .service('Dialog', [Dialog]);

}).call(this);
