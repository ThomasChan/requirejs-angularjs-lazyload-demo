window.application.components.controller('OrdersCtrl', function( $scope, $location, API) {


    $scope.tabs = {
        tabs: [
            {
                html: '进行中',
                index: 1
            },{
                html: '未评价',
                index: 2
            },{
                html: '已结束',
                index: 3
            }
        ]
        ,current : ~~localStorage.ordersTabsCurrent || 1
        ,tabsCurrent : function (index) {
            return +$scope.tabs.current == index
        }
        ,tabChange : function (index) {
            localStorage.ordersTabsCurrent = $scope.tabs.current = index
        }
    }
    $scope.lists = {
        1 : [],
        2 : [],
        3 : []
    }

    $scope.tabs.tabs.forEach(function( tab ) {
        API.go( API.getOrderMentorList, false, {OrderStatus: tab.index} ).then(function loadSuccess(response) {
            $scope.lists[tab.index] = response.data
        }, function loadFail(response) {
            // 
        })
    })

})
