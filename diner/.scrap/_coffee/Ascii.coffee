# CoffeeScript
Ascii = -> (e) -> String.fromCharCode(e)

angular.module 'diner'
    .filter 'ascii', Ascii
    