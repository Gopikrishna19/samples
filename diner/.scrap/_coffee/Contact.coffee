# CoffeeScript
ContactCtrl = ->
    @currentFilter = 65
    @filterCnts = (i) ->
        @currentFilter = i

angular.module 'diner'
    .controller 'ContactCtrl', ContactCtrl