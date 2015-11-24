window.application.components
    .controller('SignCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$timeout', 'API', function($rootScope, $scope, $location, $cookies, $timeout, API) {

        if (API.isLogin()) $location.path('/me');

        switch ($location.path()) {
            case '/me/signin': $scope.signTabs = '登录取经';break;
            case '/me/signup': $scope.signTabs = '注册取经';break;
        }
        $scope.tabsChange = function( action ) {
            $scope.signTabs = action
            $rootScope.$broadcast('signTabChange', action)
        }

        $scope.login = API.login.params
        $scope.loginFormServerError = '';

        $scope.doLogin = function() {
            console.log($scope.login);
            $scope.loginFormServerError = '';
            // filter = API.login.filterParams($scope.login);
            // if (!filter.code ) {
                API.go( API.login, $scope.login ).then(function loginSuccess(response) {
                    var a = response.data.expire_time;
                    $cookies.put('is_login', true, {
                        expires: new Date( +new Date() + 6000000 )
                    })
                    API.go( API.getUserCenterData ).then(function getSuc(response) {
                        $cookies.putObject('user', response.data);
                        API.go( API.getMentorInfo ).then(function getSuc(response) {
                            if (response.data.mt_validate) {
                                $cookies.put('is_mentor', true);
                            }
                        }, function getFail(response){})
                    }, function getFail(response){})
                    $location.path('/me')
                }, function loginFail(response) {
                    $scope.loginFormServerError = response.data
                })
            // } else {
            //     $scope.loginFormServerError = filter.error
            // }
        }



        $scope.register = API.register.params
        $scope.registerFormServerError = '';

        $scope.timer = null;
        $scope.requireSms = {
            'text_when_sms' : '发送验证码',
            'counter' : 60,
            'start' : false,
            'countDown': function() {
                $scope.timer = $timeout(function(){
                    if ($scope.requireSms.counter > 0 && $scope.requireSms.start) {
                        $scope.requireSms.counter--;
                        $scope.requireSms.text_when_sms = $scope.requireSms.counter+' 秒后重新获取';
                        $scope.requireSms.countDown();
                    } else {
                        $scope.requireSms.start = false;
                        $scope.requireSms.text_when_sms = '重新获取验证码';
                        $scope.requireSms.counter = 60;
                        $timeout.cancel( $scope.timer );
                    }
                    console.log( 'counter...', $scope.requireSms.counter);
                }, 1000)
            },
            'do': function() {
                // filter = User.validatePhone.filterParams($scope.register);
                // if (!filter.code) {
                    console.log('start...')
                    API.go( API.sendPhoneVcode, {phone: $scope.register.phone} ).then(function requireSmsSuccess(response) {
                        $scope.requireSms.start = true
                        $scope.requireSms.countDown()
                    }, function requireSmsFail(response) {
                        $scope.registerFormServerError = response
                    })
                // }
            }
        }
        $scope.$on('$locationChangeStart', function(event) { $timeout.cancel( $scope.timer ) })
        $scope.doRegister = function() {
            console.log( $scope.register );
            // filter = API.register.filterParams($scope.register);
            // if (!filter.code ) {
                API.go( API.register, $scope.register ).then(function registerSuccess(data) {
                    $cookies.put('is_login', true, {
                        expires: new Date( +new Date() + 6000000 )
                    })
                    $cookies.putObject('user', data.data, {
                        // path: '/',
                        // domain: 'qujing.com',
                        expires: new Date( +new Date() + 6000000 ),
                        // secure: true
                    })
                    $location.path('/me')
                }, function registerFail(response) {
                    $scope.registerFormServerError = response.data
                })
            // } else {
                // $scope.registerFormServerError = filter.error
            // }
        }

    }])
