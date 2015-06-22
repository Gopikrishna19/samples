# CoffeeScript
class Dialog
    constructor: ->
        Object.defineProperties @, 
            reset: 
                value: ->
                    for prop of @
                        delete @prop
                    return
            show:
                value: ->
                    dialog = document.querySelectorAll(".#{@cls}")[0]
                    return false if not dialog
                    dialog.classList.add 'show'
                    @onshow() if typeof @onshow is "function"
                enumerable: false
            hide:
                value: ->
                    dialog = document.querySelectorAll(".#{@cls}")[0]
                    return false if not dialog
                    dialog.classList.remove 'show'
                    @onhide() if typeof @onhide is "function"
                enumerable: false

angular.module 'diner'
    .service 'Dialog', Dialog