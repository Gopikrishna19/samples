# CoffeeScript
class EditReservationDialogCtrl
    constructor: (Dialog) ->
        @params = Dialog.params
        
        @close = ->
            Dialog.hide()

angular.module 'diner'
    .controller 'EditReservationDialogCtrl', EditReservationDialogCtrl