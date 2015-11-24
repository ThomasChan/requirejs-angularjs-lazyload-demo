window.application.components
    .controller('HeaderCtrl', 
        [ '$rootScope', '$scope', '$location', 'API', '$route', '$timeout',
        function( $rootScope, $scope, $location, API, $route, $timeout ) {

            $scope.isIndex = $location.path() == '/' ? true : false;
            $scope.isFind  = $location.path() == '/find' ? true : false;
            $scope.isMe    = $location.path() == '/me' ? true : false;
            $scope.isDetail = $location.path() == '/mentor' ? true : false;
            $scope.isComments = $location.path() == '/mentor/comments' ? true : false;
            $scope.isSearch = $location.path() == '/search' ? true : false;

            if ($scope.isComments) {
                $scope.mentorName = $location.search().mentor || '评论';
            }

            $scope.search = {
                keywords: $location.search().keywords || '',
                do : function() {
                    if ($scope.search.keywords && FILTER.isLegal($scope.search.keywords)) {
                        $rootScope.$broadcast('searchKeywords', $scope.search.keywords)
                    }
                }
            };

            $scope.goBack = function() {
                window.history.back();
            }


            var current = $route.routes[$location.path()];
            $scope.isMeOptions = current.isMeOptions;
            if ($scope.isMeOptions) {
                $scope.meOptions = current.meOptions;
                if ($location.path() == '/me/base/update' || $location.path() == '/me/mentor/create/other') {
                    $scope.meOptions = current.meOptions[$location.search().action];
                    if (!$scope.meOptions) {
                        $location.path('/')
                    }
                }
                $scope.$on('signTabChange', function(event, data) {
                    $scope.meOptions = data;
                })
                $rootScope.$on('createMentorStep', function(event, data) {
                    console.log('headerjs...', data)
                    $timeout(function() {$scope.meOptions = data;})
                })
            }

    }]);
