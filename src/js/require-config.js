require.config({
    
    baseUrl: '/src',

    paths: {
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
        }
    },

    urlArgs: 'v='+(+new Date())

});


require([
    'js/application'
], function(application){
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['application']);
    });
})

