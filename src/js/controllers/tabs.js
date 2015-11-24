window.application.components
    .controller('TabsCtrl', 
        [ '$rootScope', '$scope', '$location',
        function( $rootScope, $scope, $location ) {

            $scope.isIndex = $location.path() == '/' ? 'tabs-button-active' : '';
            $scope.isFind  = $location.path() == '/find' ? 'tabs-button-active' : '';
            $scope.isMe    = $location.path() == '/me' ? 'tabs-button-active' : '';

    }]);
