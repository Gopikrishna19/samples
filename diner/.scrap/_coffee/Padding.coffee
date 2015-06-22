# CoffeeScript
Padding = ->
    (e) ->
        n = e.toString(16).toUpperCase()
        if n.length >= 4 then n else new Array(4 - n.length + 1).join(0) + n
        
angular.module 'diner'
    .filter 'padding', Padding