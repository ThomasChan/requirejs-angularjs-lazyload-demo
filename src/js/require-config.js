window.APP_CONFIG = {
    host   : 'http://api.test.com:2334/api/',
    dev    : true,
    version: +new Date()
}

window.HTML_CONFIG = {
    // 'me'  : 
}

var baseUrl = APP_CONFIG.dev ? '/src' : '/build';

require.config({
    
    baseUrl: baseUrl,

    paths: {
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        'ngAnimate': 'lib/angular-animate.min',
        'ngResource': 'lib/angular-resource.min',
        'ngCachedResource': 'lib/angular-cached-resource.min',
        'ngTouch': 'lib/angular-touch.min',
        'ngCookies': 'lib/angular-cookies.min',
        'angular-carousel': 'lib/angular-carousel.min',
        'ngFileUpload': 'lib/ng-file-upload-all.min'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
        },
        ngAnimate: {
            deps: ['angular'],
            exports: 'ngAnimate'
        },
        ngResource: {
            deps: ['angular'],
            exports: 'ngResource'
        },
        ngCachedResource: {
            deps: ['angular'],
            exports: 'ngCachedResource'
        },
        ngTouch: {
            deps: ['angular'],
            exports: 'ngTouch'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'ngCookies'
        },
        'angular-carousel': {
            deps: ['angular'],
            exports: 'angular-carousel'
        },
        ngFileUpload: {
            deps: ['angular'],
            exports: 'ngFileUpload'
        }
    }

    ,urlArgs: 'version=' + (+new Date())
    // ,urlArgs: 'version=' + window.APP_CONFIG.version

});

require([
    'js/application'
], function(application){
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['application']);
    });
})

