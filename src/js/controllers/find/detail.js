window.application.components
    .controller('mentorDetail', [ '$rootScope', '$scope', '$location', '$routeParams', 'API', function( $rootScope, $scope, $location, $routeParams, API ) {

        user_id = $location.search().id

        $scope.mentor = {};
        API.go( API.getMentorHomeInfo, false, {MentorId: user_id} ).then(function successCallback(response) {
            $scope.mentor = response.data;
        }, function errorCallback(response) {
            console.log(response);
        })
        
    }]);
