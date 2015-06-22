# CoffeeScript
Pages = [
    cls: 'rsrv', text: 'Reservations', ctrl: 'ReserveCtrl'
,
    cls: 'seat', text: 'Seating', ctrl: 'SeatCtrl'
,
    cls: 'prof', text: 'Profile'
,
    cls: 'cnts', text: 'Contacts', ctrl: 'ContactCtrl'
,
    cls: 'setn', text: 'Settings'
,
    cls: 'lout', text: 'Logout', noview: true
]
    
Pages.getIndexOf = (cls) ->
    return i for p, i in @ when p.cls == cls
    -1
    
Pages.base = 'owner'
    
angular.module 'diner', []
    .factory 'Pages', -> Pages