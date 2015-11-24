window.application.components
    .controller('FindCtrl', 
        [ '$rootScope', '$scope', '$location', 'API', 
        function( $rootScope, $scope, $location, API ) {

    $scope.tabs = {
        tabs: [
            {
                html: '好评',
                index: 1
            },{
                html: '最新',
                index: 2
            },{
                html: '取经故事',
                index: 3
            }
        ]
        ,current : $location.search().t || ~~localStorage.findTabsCurrent || 1
        ,tabsCurrent : function (index) {
            return +$scope.tabs.current == index
        }
        ,tabChange : function (index) {
            localStorage.findTabsCurrent = $scope.tabs.current = index
        }
    }

}]);
