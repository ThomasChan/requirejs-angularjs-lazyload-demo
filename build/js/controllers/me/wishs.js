window.application.components.controller("WishList",function(o,n,t){t.go(t.getFollowMentorList).then(function(n){o.lists=n.data},function(o){console.log(o)})});