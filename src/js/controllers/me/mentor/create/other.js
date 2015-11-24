window.application.components.controller('UpdateCreateMentorInfo', function( $scope, $location, API, $timeout) {


$scope.action = $location.search().action;

$scope.errorMsg = '';
$scope.successMsg = false;

console.log( $scope.action )

$scope.gaokao = {
    "cee_score":"",
    "cee_hum_sci":"",
    "cee_ranking":"",
}//高考情况',
$scope.fangxiang = {
    "strength":""
}//擅长方向',
$scope.huojiang = {
    "awards": ""
}//获奖情况',
$scope.activitys = {
    "activities":""
}//活动实践',
$scope.self_recommoned = {
    "selfval":""
}//自我评价',
$scope.stories = {
    "story_title":"",
    "story":""
}//成长故事',
$scope.manifesto = {
    "slogan":""
}//导师宣言'

$scope.doUpdate = {
    status: false,
    button: '提交',
    go: function() {
        if ($scope.UpdateCreateMentorInfoForm.$valid) {
            console.log( $scope[ $scope.action ] )
            $scope.doUpdate.status = true;
            $scope.doUpdate.button = '更新中...';
            API.go( API.updateMentorInfo, $scope[ $scope.action ] ).then(function updateSuc(response) {
                // 
                $scope.successMsg = true;
                $scope.doUpdate.status = false;
                $scope.doUpdate.button = '提交';
            }, function updateFail(response) {
                // 
                $scope.errorMsg = response
            })
        }
    }
}
    
})
