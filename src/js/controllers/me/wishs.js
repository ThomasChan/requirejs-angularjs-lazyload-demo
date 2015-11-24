window.application.components.controller('WishList', function($scope, $location, API) {
    
    API.go( API.getFollowMentorList ).then(function getSuc(response) {
        $scope.lists = response.data
    }, function getFail(response) {
        console.log(response)
    })

})
