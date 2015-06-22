# CoffeeScript
Router = ($routeProvider, PagesProvider) ->
    pages = PagesProvider.$get()
    base = pages.base
    
    i = 0
    while i < pages.length
        page = pages[i]
        prop = 
            templateUrl: 'views/' + base + '/' + page.cls + '.html'
            controllerAs: page.cls
        prop.controller = page.ctrl if page.ctrl
        if page.noview
            delete prop.templateUrl
            prop.template = ' '
            
        $routeProvider.when '/' + page.cls, prop
        ++i
        
    $routeProvider.otherwise redirectTo: '/' + pages[0].cls
    
    return
    
angular.module 'diner'
    .config Router