# CoffeeScript
Range = ->
    (a, r, l) ->
        i = l or 0
        while i < r
            a.push(i++)
        return a

angular.module 'diner'
    .filter 'range', Range