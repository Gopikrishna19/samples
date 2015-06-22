# CoffeeScript
class HomeCtrl
    constructor: ->
        @startTime = "10:00 AM"
        @endTime = "10:00 PM"
    
angular.module 'diner'
    .controller 'HomeCtrl', HomeCtrl