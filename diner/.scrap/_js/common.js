/**
 * Common functions for the application
 * 
 */

var Common = {
    // Guest class
    Guest: function () {
        var _name, _people, _stamp, _cnf, _phone, _email, _special, _assign, _noedit;

        Object.defineProperties(this, {
            cnf: { get: function () { return _cnf; }, set: function (v) { _cnf = v } },
            name: { get: function () { return _name; }, set: function (v) { _name = v } },
            stamp: { get: function () { return _stamp; }, set: function (v) { _stamp = v } },
            phone: { get: function () { return _phone; }, set: function (v) { _phone = v } },
            email: { get: function () { return _email; }, set: function (v) { _email = v } },
            assign: { get: function () { return _assign; }, set: function (v) { _assign = v } },
            people: { get: function () { return _people; }, set: function (v) { _people = v } },
            noedit: { get: function () { return _noedit; }, set: function (v) { _noedit = v } },
            special: { get: function () { return _special; }, set: function (v) { _special = v } },
            reset: { value: function () { _name = _people = _stamp = _cnf = _phone = _email = _special = _assign = _noedit = null } }
        })
    },
    // Extend pages with a finder
    Pages: function (pages) {
        pages.getIndexOf = function (cls) {
            for (var i = 0; i < this.length; ++i)
                if (this[i].cls == cls) return i;
            return -1;
        }
        return pages;
    },
    // Controller for header/navigation section
    headController: function ($scope, $location, pages) {
        $scope.pages = pages;
        $scope.currentPage = pages.getIndexOf($location.path().replace('/', ''));

        $scope.changePage = function (i) { $scope.currentPage = i; }
    },

    // Configuration function that set the routes
    routeConfigure: function ($routeProvider, pagesProvider, base) {
        var pages = pagesProvider.$get();
        pages.forEach(function (e, i) {
            var prop = { templateUrl: 'views/' + base + '/' + e.cls + '.html' }
            if (e.ctrl) prop.controller = e.ctrl;
            if (e.noview) {
                delete prop.templateUrl;
                prop.template = " ";
            }

            $routeProvider.when('/' + e.cls, prop);
        });
        $routeProvider.otherwise({ redirectTo: '/' + pages[0].cls });
    },
    // Confirmation number gen
    Padding: function (e) {
        n = e.toString(16).toUpperCase();
        return n.length >= 4 ? n : new Array(4 - n.length + 1).join(0) + n;
    },

    // Show Dialog
    showDialog: function (dlg) {
        document.querySelectorAll('.' + dlg)[0].classList.add('show');
    },

    // Hide Dialog
    closeDialog: function (dlg) {
        document.querySelectorAll('.' + dlg)[0].classList.remove('show');
    }
}




