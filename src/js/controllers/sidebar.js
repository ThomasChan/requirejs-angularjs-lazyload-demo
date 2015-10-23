window.application.components
    .controller('SideController', [ '$scope', 'API', function( $scope, API ) {
        $scope.sidebarStatus = false;
        $scope.$on('changeSidebarStatus', function(event, data) {
            $scope.sidebarStatus = data;
        })
    }]);
