# CoffeeScript
class GuestCtrl
    constructor: (Dialog, $filter) ->
        @guest = {}
        
        @save = ->
            Dialog.reset()
            Dialog.cls = "cnf-dlg"
            
            do (p = Dialog, g = @guest) ->
                p.name = g.name;
                p.stamp = g.stamp;
                p.cnf = $filter('padding')(205);
            
            Dialog.onopen = ->
                console.log Dialog
            
            Dialog.show();
            
            Dialog.onclose = ->
                @reset
            
        @edit = ->
            Dialog.reset()
            Dialog.cls = "edt-dlg"
            
            Dialog.show();
            
        @reset = ->
            @guest = null
            
angular.module 'diner'
    .controller 'GuestCtrl', GuestCtrl