define([
    'angular'
], function( angular ){
    angular.module('application.Mentor', [])
        .factory('Mentor', ['$resource', '$cachedResource', '$http', '$q', function($resource, $cachedResource, $http, $q){
        return {
            'list' : {
                query: function( query ) {
                    return $http.get( API.getRecMentorList.url+serialize(query) )
                }
                ,search: function( query ) {
                    return $http.get( API.getRecMentorList.url+serialize(query) )
                }
            }

            ,'detail': {
                query: function( query ) {
                    return $http.get( API.getMentorDetails.url+serialize(query) )
                }
                ,queryComments: function( query ) {
                    return $http.get( API.getCommentList.url+serialize(query) )
                }
            }

            ,'get': {
                hotKeywords : function() {
                    var defer = $q.defer();
                    defer.resolve(['营销' ,'运营', '沙金', 'Lydia' ])
                    return defer.promise;
                }
            }
        }
    }])
})
