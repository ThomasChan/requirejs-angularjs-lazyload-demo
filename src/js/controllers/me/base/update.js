window.application.components.controller('UpdateBaseInfo', function( $scope, $location, API, $timeout) {


$scope.action = $location.search().action

console.log( $scope.action )


if ($scope.action === 'updatePhone') {

    $scope.update = API.updatePhone.params
    $scope.phoneFormServerError = '';


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
            // filter = API.validatePhone.filterParams($scope.update);
            // if (!filter.code) {
                console.log('start...')
                // API.validatePhone.do( {Phone: $scope.update.Phone} ).then(function requireSmsSuccess(response) {
                    $scope.requireSms.start = true
                    $scope.requireSms.countDown()
                // }, function requireSmsFail(response) {
                    // $scope.registerFormServerError = response
                // })
            // }
        }
    }

    $scope.doUpdate = function() {
        console.log($scope.phoneForm);
        $scope.phoneFormServerError = '';
        // filter = API.updatePhone.filterParams($scope.update);
        // if (!filter.code ) {
            // API.updatePhone.do( $scope.update ).then(function updateSuccess(data) {
                window.history.back();
            // }, function updateFail(response) {
                // $scope.phoneFormServerError = response.data
            // })
        // } else {
            // $scope.phoneFormServerError = filter.error
        // }
    }

    $scope.$on('$locationChangeStart', function(event) { $timeout.cancel( $scope.timer ) })
}

    
})
