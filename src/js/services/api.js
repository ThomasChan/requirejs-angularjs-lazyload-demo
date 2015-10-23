window.application.components
    .service('API', ['$http', function($http){
        var getIndexLists = function(){
            return $http.get('/api/list.json?t='+(+new Date()), {})
        }

        return {
            getIndexLists: getIndexLists
        }
    }])
