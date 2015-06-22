# CoffeeScript
class DetailsDialogCtrl
    constructor: (Dialog) ->
        @params = Dialog.params
        
        @saveGuest = ->
            # yet to implement
            @close()
        
        @deleteGuest = ->
            # yet to implement
            @close()
        
        @closeDialog = do (c = @) ->
            Dialog.hide()

angular.module 'diner'
    .controller 'DetailsDialogCtrl', DetailsDialogCtrl