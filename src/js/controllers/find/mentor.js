window.application.components
    .controller('PeopleCtrl', [ '$rootScope', '$scope', '$location', 'API', function( $rootScope, $scope, $location, API ) {

        $scope.lists = [];
        API.go( API.getQujingStoryList ).then(function successCallback(response) {
            angular.forEach(response.data, function(value){
                $scope.lists.push( value );
            });
        }, function errorCallback(response) {
            $scope.lists.push( [] );
        });

    }]);
