define(["require","angular","ngRoute","ngAnimate","ngResource","ngCachedResource","ngTouch","ngCookies","angular-carousel","ngFileUpload","js/routeResolve","js/api/api"],function(e,o,r,n,i,s,t,l,a,m,v){var c=o.module("application",["ngRoute","ngAnimate","ngResource","ngCachedResource","ngTouch","ngCookies","angular-carousel","ngFileUpload","application.API"]);return window.application=c,c.factory("HttpHeaderCommon",function(e){var o=function(){var e=new Date;return[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),"T",e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),"Z"].join("")};return{request:function(r){return r.headers.Authorization=e.get("token"),r.headers["x-wk-date"]=o(),r}}}),c.config(["$routeProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider",function(e,o,r,n,i,s){var t=v;e.when("/",{reloadOnSearch:!1,templateUrl:"views/index.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/index"])}).when("/find",{reloadOnSearch:!1,templateUrl:"views/find.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/find","js/controllers/find/mentor","js/controllers/find/good","js/controllers/find/new"])}).when("/mentor",{reloadOnSearch:!1,templateUrl:"views/find/mentor/detail.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/find/detail"])}).when("/mentor/comments",{templateUrl:"views/find/mentor/comments.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/find/detail/comments"])}).when("/mentor/demand/create",{reloadOnSearch:!1,templateUrl:"views/find/mentor/demand/create.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/find/detail/demand"])}).when("/search",{templateUrl:"views/search.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/find/search"])}).when("/me",{reloadOnSearch:!1,templateUrl:"views/me.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me"])}).when("/me/education",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"我的资料",templateUrl:"views/me/education.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/education"])}).when("/me/base",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"个人信息",templateUrl:"views/me/base.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/base"])}).when("/me/base/update",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:{updatePhone:"修改手机"},templateUrl:"views/me/base/update.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/base/update"])}).when("/me/mentor/orders",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"我约的导师",templateUrl:"views/me/mentor/orders.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/mentor/orders"])}).when("/me/wishs",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"我的心愿单",templateUrl:"views/me/wishs.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/wishs"])}).when("/me/coupons",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"我的优惠券",templateUrl:"views/me/coupons.html?version="+window.APP_CONFIG.version}).when("/me/mentor/create",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"成为导师",templateUrl:"views/me/mentor/create.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/mentor/create"])}).when("/me/mentor/create/other",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:{gaokao:"高考情况",fangxiang:"擅长方向",huojiang:"获奖情况",activitys:"活动实践",self_recommoned:"自我评价",stories:"成长故事",manifesto:"导师宣言"},templateUrl:"views/me/mentor/create/other.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/mentor/create/other"])}).when("/me/mentor/info",{reloadOnSearch:!1,isMeOptions:!0,requireLogin:!0,meOptions:"导师资料",templateUrl:"views/me/mentor/info.html?version="+window.APP_CONFIG.version}).when("/me/help",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"帮助",templateUrl:"views/me/help.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/help"])}).when("/me/help/about",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"关于我们",templateUrl:"views/me/help/about.html?version="+window.APP_CONFIG.version}).when("/me/help/help",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"使用帮助",templateUrl:"views/me/help/help.html?version="+window.APP_CONFIG.version}).when("/me/help/service",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"联系客服",templateUrl:"views/me/help/service.html?version="+window.APP_CONFIG.version}).when("/me/help/feedback",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"用户反馈",templateUrl:"views/me/help/feedback.html?version="+window.APP_CONFIG.version}).when("/me/signup",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"登录取经",templateUrl:"views/me/sign.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/sign"])}).when("/me/signin",{reloadOnSearch:!1,isMeOptions:!0,meOptions:"注册取经",templateUrl:"views/me/sign.html?version="+window.APP_CONFIG.version,resolve:t.resolve(["js/controllers/me/sign"])}).otherwise({redirectTo:"/"}),window.application.components={controller:o.register,directive:r.directive,filter:n.register,factory:i.factory,service:i.service},s.interceptors.push("HttpHeaderCommon")}]),e(["js/controllers/tabs"]),e(["js/controllers/header"]),c.filter("sanitize",["$sce",function(e){return function(o){return e.trustAsHtml(o)}}]),c.run(function(e,o,r,n,i){e.$on("$locationChangeStart",function(e,i,s){var t=r.routes[o.path()];t&&t.requireLogin&&!n.isLogin()&&(o.path("/me/signin"),e.preventDefault())})}),c});