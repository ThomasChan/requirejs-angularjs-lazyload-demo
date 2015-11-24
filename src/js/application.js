define([
    'require',
    'angular',
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngCachedResource',
    'ngTouch',
    'ngCookies',
    'angular-carousel',
    'ngFileUpload',
    'js/routeResolve',
    'js/api/api'
], function( require, angular, ngRoute, ngAnimate, ngResource, ngCachedResource, ngTouch, ngCookies, ngCarousel, ngFileUpload, routeResolver ) {

    var application = angular.module('application', ['ngRoute', 'ngAnimate', 'ngResource', 'ngCachedResource', 'ngTouch', 'ngCookies', 'angular-carousel', 'ngFileUpload', 'application.API']);

    window.application = application;

    application.factory('HttpHeaderCommon', function( $cookies ) {
        var UTC_date = function(){
            var d = new Date();
            return [d.getUTCFullYear(),
                    d.getUTCMonth() + 1,
                    d.getUTCDate(),
                    'T',
                    d.getUTCHours(),
                    d.getUTCMinutes(),
                    d.getUTCSeconds(),
                    'Z'].join('')
        }
        return {
            'request': function(config) {
                config.headers['Authorization'] = $cookies.get('token');
                config.headers['x-wk-date'] = UTC_date();
                return config;
            }
        };
    })

    application
        .config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
            function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

            var route = routeResolver;

            $routeProvider

                //首页
                .when('/', {
                    reloadOnSearch: false,
                    templateUrl:'views/index.html?version='+window.APP_CONFIG.version,
                    resolve: route.resolve([
                        'js/controllers/index'
                    ])
                })

                //发现
                .when('/find', {
                    reloadOnSearch: false,
                    templateUrl:'views/find.html?version='+window.APP_CONFIG.version,
                    resolve: route.resolve([
                        //发现
                        'js/controllers/find',
                        //发现-圈子
                        'js/controllers/find/mentor',
                        //发现-好评
                        'js/controllers/find/good',
                        //发现-新课程
                        'js/controllers/find/new'
                    ])
                })
                    //导师主页
                    .when('/mentor', {
                        reloadOnSearch: false,
                        templateUrl:'views/find/mentor/detail.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/find/detail'
                        ])
                    })
                        // 导师的评价列表
                        .when('/mentor/comments', {
                            // reloadOnSearch: false,
                            templateUrl:'views/find/mentor/comments.html?version='+window.APP_CONFIG.version,
                            resolve: route.resolve([
                                'js/controllers/find/detail/comments'
                            ])
                        })
                        // 预约导师
                        .when('/mentor/demand/create', {
                            reloadOnSearch: false,
                            templateUrl:'views/find/mentor/demand/create.html?version='+window.APP_CONFIG.version,
                            resolve: route.resolve([
                                'js/controllers/find/detail/demand'
                            ])
                        })

                //搜索
                .when('/search', {
                    // reloadOnSearch: false,
                    templateUrl:'views/search.html?version='+window.APP_CONFIG.version,
                    resolve: route.resolve([
                        'js/controllers/find/search'
                    ])
                })

                //我的
                .when('/me', {
                    reloadOnSearch: false,
                    templateUrl:'views/me.html?version='+window.APP_CONFIG.version,
                    resolve: route.resolve([
                        'js/controllers/me'
                    ])
                })
                    // 我的-教育资料？
                    .when('/me/education', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '我的资料',
                        templateUrl:'views/me/education.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/education'
                        ])
                    })
                    //我的-个人信息
                    .when('/me/base', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '个人信息',
                        templateUrl:'views/me/base.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/base'
                        ])
                    })
                        //我的-修改资料
                        .when('/me/base/update', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            requireLogin: true,
                            meOptions: {
                                'updatePhone': '修改手机'
                            },
                            templateUrl:'views/me/base/update.html?version='+window.APP_CONFIG.version,
                            resolve: route.resolve([
                                'js/controllers/me/base/update'
                            ])
                        })
                    //我的-我约的
                    .when('/me/mentor/orders', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '我约的导师',
                        templateUrl:'views/me/mentor/orders.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/mentor/orders'
                        ])
                    })
                    //我的-心愿单
                    .when('/me/wishs', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '我的心愿单',
                        templateUrl:'views/me/wishs.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/wishs'
                        ])
                    })
                    //我的-优惠券
                    .when('/me/coupons', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '我的优惠券',
                        templateUrl:'views/me/coupons.html?version='+window.APP_CONFIG.version
                    })
                    //我的-成为mentor
                    .when('/me/mentor/create', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '成为导师',
                        templateUrl:'views/me/mentor/create.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/mentor/create'
                        ])
                    })
                        .when('/me/mentor/create/other', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            requireLogin: true,
                            meOptions: {
                                'gaokao': '高考情况',
                                'fangxiang': '擅长方向',
                                'huojiang': '获奖情况',
                                'activitys': '活动实践',
                                'self_recommoned': '自我评价',
                                'stories': '成长故事',
                                'manifesto': '导师宣言'
                            },
                            templateUrl:'views/me/mentor/create/other.html?version='+window.APP_CONFIG.version,
                            resolve: route.resolve([
                                'js/controllers/me/mentor/create/other'
                            ])
                        })
                    //我的-mentor资料
                    .when('/me/mentor/info', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        requireLogin: true,
                        meOptions: '导师资料',
                        templateUrl:'views/me/mentor/info.html?version='+window.APP_CONFIG.version
                    })
                    //我的-帮助
                    .when('/me/help', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        meOptions: '帮助',
                        templateUrl:'views/me/help.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/help'
                        ])
                    })
                        //我的-帮助
                        .when('/me/help/about', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            meOptions: '关于我们',
                            templateUrl:'views/me/help/about.html?version='+window.APP_CONFIG.version
                        })
                        //我的-帮助
                        .when('/me/help/help', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            meOptions: '使用帮助',
                            templateUrl:'views/me/help/help.html?version='+window.APP_CONFIG.version
                        })
                        //我的-帮助
                        .when('/me/help/service', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            meOptions: '联系客服',
                            templateUrl:'views/me/help/service.html?version='+window.APP_CONFIG.version
                        })
                        //我的-帮助
                        .when('/me/help/feedback', {
                            reloadOnSearch: false,
                            isMeOptions: true,
                            meOptions: '用户反馈',
                            templateUrl:'views/me/help/feedback.html?version='+window.APP_CONFIG.version
                        })
                    .when('/me/signup', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        meOptions: '登录取经',
                        templateUrl:'views/me/sign.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/sign'
                        ])
                    })
                    .when('/me/signin', {
                        reloadOnSearch: false,
                        isMeOptions: true,
                        meOptions: '注册取经',
                        templateUrl:'views/me/sign.html?version='+window.APP_CONFIG.version,
                        resolve: route.resolve([
                            'js/controllers/me/sign'
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

            // alternatively, register the interceptor via an anonymous factory
            $httpProvider.interceptors.push('HttpHeaderCommon');
        }]);

    require(['js/controllers/tabs']);
    require(['js/controllers/header']);

    // filter methods
    application.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            // console.log( htmlCode );
            return $sce.trustAsHtml(htmlCode);
        }
    }]);

    application.run(function($rootScope, $location, $route, API, $http) {
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            var nextRoute = $route.routes[$location.path()];

            if (nextRoute && nextRoute.requireLogin && !API.isLogin()) {
                $location.path('/me/signin')
                event.preventDefault()
            }
        })
    });

    return application;

})
