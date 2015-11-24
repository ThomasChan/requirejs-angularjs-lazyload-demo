window.application.components
    .controller('MeCtrl', 
        [ '$rootScope', '$scope', '$location', '$cookies', 'API',
        function( $rootScope, $scope, $location, $cookies, API) {

            $scope.isLogin = API.isLogin();
        
            if ($scope.isLogin) $scope.user = API.go( API.getUserCenterData ),isMentor = API.isMentor();

            $scope.options = [
                {
                    'needLogin': true,
                    'html': '我约的导师',
                    'link': '#/me/mentor/orders'
                },{
                    'needLogin': true,
                    'html': '我的心愿单',
                    'link': '#/me/wishs'
                }
                // ,{
                //     'needLogin': true,
                //     'html': '我的优惠券',
                //     'link': '#/me/coupons'
                // },{
                //     'needLogin': true,
                //     'html': '我的圈子',
                //     'link': '#/me/my-people'
                // }
                ,{'html':false,'link':false}
            ]

            if ($scope.isLogin && isMentor) {
                $scope.options.push({
                    'needLogin': true,
                    'html': '导师资料',
                    'link': '#/me/mentor/info'
                })
            } else {
                $scope.options.push({
                    'needLogin': true,
                    'html': '成为导师',
                    'link': '#/me/mentor/create'
                })
            }

            $scope.options.push(
                {
                    'needLogin': true,
                    'html': '我教的课程',
                    'link': '#/me/course/list'
                },{
                    'needLogin': true,
                    'html': '课程安排',
                    'link': '#/me/course/plan'
                }
                ,{'html':false,'link':false}
                ,{
                    'needLogin': true,
                    'html': '我的帐号',
                    'link': '#/me/base'
                },{
                    'needLogin': false,
                    'html': '帮助',
                    'link': '#/me/help'
                }
                // ,{'html':false,'link':false},{
                //     'needLogin': false,
                //     'html': '在线客服',
                //     'link': '#/kefu'
                // }
            )
}]);
