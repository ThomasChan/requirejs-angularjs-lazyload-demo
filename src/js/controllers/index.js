window.application.components
    .controller('IndexController', [ '$rootScope', '$scope', 'API', function( $rootScope, $scope, API ) {

        var pageNum = 0,
            sortBy = '';

        $scope.IndexData = [];
        $scope.loadMore = function(){
            $scope.loadFinish = false;
            API.getIndexLists( pageNum, sortBy ).then(function successCallback(response) {
                angular.forEach(response.data, function(value){
                    $scope.IndexData.push( value );
                });
                $scope.loadFinish = !$scope.loadFinish;
                pageNum++;
            }, function errorCallback(response) {
                $scope.IndexData.push( [] );
            });
        }
        $scope.loadMore();
        
        $scope.sidebarStatus = false;
        $scope.sidebarToggle = function(){
            $scope.sidebarStatus = !$scope.sidebarStatus;
            $rootScope.$broadcast('changeSidebarStatus', $scope.sidebarStatus);
        }

    }]);
