window.application.components.controller('BaseInfo', function($scope, $location, $cookies, API) {
    
    $scope.user = $cookies.getObject('user')
    $scope.user = {
        "nickname": "小白菜",
        "realname": "肖柏采",
        "realname_status": 1,
        "phone": "13812345678",
        "gender": 1,
        "birthday": "19880909",
        "avatar": "http://img.laiqujing.com/FhswSlBfMs_qmjUblyiAnvDN4Pzw!avatar",
        "nativeplace": "河北唐山"
    }
    

    $scope.fields = [
        {
            html: '昵称',
            value: $scope.user.nickname
        },
        {
            html: '真实姓名',
            value: $scope.user.realname
        },
        {
            html: '性别',
            value: '女'
        },
        {
            link: '#/me/base/update?action=updatePhone',
            html: '手机号',
            value: '18610472034'
        },
        {
            html: '籍贯',
            value: '河北'
        },
        {html:false}
        ,{
            html: '学校',
            value: 'xxx 大学'
        },
        {
            html: '院系',
            value: 'xxx 系'
        },
        {
            html: '年纪',
            value: 'x 大'
        },
        {
            html: '班级',
            value: 'x 班'
        },
        {
            html: '入学时间',
            value: 'yyyy-mm'
        },
        {
            html: '毕业时间',
            value: 'yyyy-mm'
        },
        {
            html: '认证'
        },
        {
            html:false
        },
        {
            html: '学校',
            value: 'xxx 中学'
        },
        {
            html: '文理',
            value: '文'
        },
        {
            html: '年级',
            value: '高三'
        },
        {
            html: '班级',
            value: 'x 班'
        },
        {
            html: '入学时间',
            value: 'yyyy-mm'
        },
        {
            html: '毕业时间',
            value: 'yyyy-mm'
        },
        {
            html: '认证'
        }
    ]

    $scope.doLogout = function() {
        API.go( API.logout ).then(function(response){
            $cookies.remove('user');
            $cookies.remove('is_login');
            $cookies.remove('is_mentor');
            $location.path('/signin');
        }, function(response){
            console.log(response)
        })
    }
})
