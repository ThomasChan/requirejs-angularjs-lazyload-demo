window.application.components
    .controller('SearchCtrl', 
        [ '$rootScope', '$scope', '$location', 'API', 
        function( $rootScope, $scope, $location, API ) {

            $scope.keywords = $location.search().keywords || '';
            $scope.lists = [];
            $scope.doSearch = function() {
                API.go( API.getRecMentorList, {keywords: $scope.keywords}).then(function successCallback(response){
                    $scope.lists = response.data
                }, function errorCallback(response) {
                    $scope.errors = response
                })
            }
            if ($scope.keywords) $scope.doSearch();
            $rootScope.$on('searchKeywords', function(event, data) {
                $scope.keywords = data;
                $scope.doSearch();
            })

            $scope.hotKeywords = [];
            API.go( API.getRecMentorList ).then(function success(response) {
                console.log(response)
                $scope.hotKeywords = response.data
            }, function fail(response) {
                $scope.errors = response
            })

    }]);
