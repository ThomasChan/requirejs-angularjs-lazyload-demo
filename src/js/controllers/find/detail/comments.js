window.application.components
    .controller('CommentsCtrl', [ '$rootScope', '$scope', '$location', 'API', function( $rootScope, $scope, $location, API ) {

        $scope.comments = [];
        API.go( API.getCommentList, false, {MentorId: $location.search().id} ).then(function successCallback(response) {
            angular.forEach(response.data, function(value){
                $scope.comments.push( value );
            });
        }, function errorCallback(response) {
            $scope.comments.push( [] );
        });

    }]);
