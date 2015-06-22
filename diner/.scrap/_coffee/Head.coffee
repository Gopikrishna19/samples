# CoffeeScript
class HeadCtrl
    constructor: ($location, Pages) ->
        @pages = Pages
        
        @currentPage = @pages.getIndexOf $location.path().replace('/', '')
        
        @changePage = (i) -> @currentPage = i
        
angular.module 'diner'
    .controller 'HeadCtrl', HeadCtrl