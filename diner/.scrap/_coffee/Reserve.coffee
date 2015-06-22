# CoffeeScript
class ReserveCtrl
    constructor: ($filter, DetailsDialog) ->
        @showDetails = (i) ->
            DetailsDialog.reset()
            
            do (p = DetailsDialog.params) ->
                p.name = "Gopikrishna Sathyamurthy"
                p.stamp = new Date()
                p.cnf = $filter('padding')(i)
                p.people = i - 499
                p.phone = '7894561230'
                p.email = 'someone@nyc.com'
            
            DetailsDialog.show()
            
        @getDate = -> new Date()

angular.module 'diner'
    .controller 'ReserveCtrl', ReserveCtrl