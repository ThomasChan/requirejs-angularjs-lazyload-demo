define([
    'angular',
    'ngRoute',
    'js/routeResolve'
], function( angular, ngRoute, routeResolver ) {

    var application = angular.module('application', ['ngRoute']);

    window.application = application;

    application
        .config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 
            function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

            var route = routeResolver;

            $routeProvider
                .when('/', {
                    reloadOnSearch: false,
                    templateUrl:'views/index.html',
                    resolve: route.resolve([
                        'js/services/api',
                        'js/controllers/index',
                        'js/controllers/sidebar'
                    ])
                })
                .when('/shijie/:id', {
                    reloadOnSearch: false,
                    templateUrl:'views/detail.html',
                    resolve: route.resolve([
                        'js/services/api',
                        'js/controllers/detail'
                    ])
                })
                .otherwise({
                    redirectTo:'/'
                });


            window.application.components = {
                controller : $controllerProvider.register,
                directive  : $compileProvider.directive,
                filter     : $filterProvider.register,
                factory    : $provide.factory,
                service    : $provide.service
            }

        }]);

    return application;

})
