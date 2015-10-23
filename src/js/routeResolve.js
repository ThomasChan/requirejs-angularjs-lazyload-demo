define(function ( require ) {
    return function () {

        var resolve = function (deps) {
            var routeDef = {
                load: ['$q', '$rootScope', function ($q, $rootScope) {
                    var dependencies = deps;
                    return resolveDependencies($q, $rootScope, dependencies);
                }]
            };

            return routeDef;
        },

        resolveDependencies = function ($q, $rootScope, dependencies) {
            var defer = $q.defer();
            require(dependencies, function () {
                defer.resolve();
                $rootScope.$apply()
            });

            return defer.promise;
        };

        return {
            resolve: resolve
        }
    }();
});
