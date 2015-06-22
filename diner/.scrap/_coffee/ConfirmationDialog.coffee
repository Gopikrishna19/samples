# CoffeeScript
class ConfirmationDialogCtrl
    constructor: (Dialog, $scope) ->
        @guest = Dialog
        
        $scope.$watch(
            angular.bind @, -> Dialog.params, 
            (o,n) -> console.log o, n)
        
        @close = ->
            Dialog.hide()

angular.module 'diner'
    .controller 'ConfirmationDialogCtrl', ConfirmationDialogCtrl