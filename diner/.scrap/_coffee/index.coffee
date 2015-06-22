# CoffeeScript
Pages = [
    cls: 'home', text: 'Home', ctrl: 'HomeCtrl'
,
    cls: 'res', text: 'Guest', ctrl: 'GuestCtrl'
,
    cls: 'log', text: 'Owner', ctrl: 'OwnerCtrl'
]
    
Pages.getIndexOf = (cls) ->
    return i for p, i in @ when p.cls == cls
    -1
    
Pages.base = 'index'
    
angular.module 'diner', ['ngRoute']
    .factory 'Pages', -> Pages