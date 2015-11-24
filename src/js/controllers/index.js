window.application.components
    .controller('IndexCtrl', 
        [ '$rootScope', '$scope', '$location', 'API', 
        function( $rootScope, $scope, $location, API ) {
            
            API.go( API.getHomepageData ).then(function getListsSuccess(response) {
                // if (data.status === 200) {
                    $scope.star_mentor_list = response.data.star_mentor_list;
                    $scope.rec_mentor_list = response.data.rec_mentor_list;
                    $scope.qujing_story = response.data.qujing_story;
                    // console.log($scope.star, $scope.lists)
                // } else {
                    // $scope.ServerError = data.statusText
                // }
            }, function getListsFail(response) {
                // alert(response);
                $scope.ServerError = response
            })

    }]);
