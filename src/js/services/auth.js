define([
    'angular'
], function( angular ){
    angular.module('application.Auth', ['application.Mentor', 'application.User'])
        .factory('Auth', ['$http', '$cookies', '$q', function($http, $cookies, $q){

    var storeToken = function( token ) {
        $cookies.put('token', token);
    }

    var destoryToken = function() {
        $cookies.remove('token');
    }

    var register = { 
        filterParams: function( params ) {
            if (!params.phone || !FILTER.isPhone( params.phone )) {
                return {code:1,error:'请输入正确的 11 位手机号码'}
            } else if (!params.vcode || !FILTER.isVcode( params.vcode )) {
                return {code:1,error:'请输入 6 位数字手机验证码'}
            } else if (!params.nickname || !FILTER.isNickname( params.nickname )) {
                return {code:1,error:'昵称可以是汉字、数字、下划线、大小写字母组成，至少 3 位，至多 20 位'}
            } else if (!params.password || !FILTER.isPassword( params.password )) {
                return {code:1,error:'密码含有不合法字符'}
            }
            return {code:0}
        },
        do: function( params ) { return $http.post( API.register.url, {params:params} ) }
    }

    var login = { 
        filterParams: function( params ) {
            console.log( params );
            if (!params.phone || !FILTER.isPhone( params.phone )) {
                return {code:1,error:'请输入正确的 11 位手机号码'}
            } else if (!params.password || !FILTER.isPassword( params.password )) {
                return {code:1,error:'密码含有不合法字符'}
            }
            return {code:0}
        },
        do: function( params ) {
            return $q(function(resolve, reject){
                $http.post( API.login.url, {params:params} ).then(function loginSuccess(response) {
                    // if (response.status === 200 && response.data.code === 200) {
                        storeToken( response.data.token );
                        $cookies.put('is_login', true)
                        // $cookies.putObject('user', response.data.data);
                        // if (response.data.data.is_mentor) $cookies.put('is_mentor', true);
                        resolve(response)
                    // } else {
                        // reject(response)
                    // }
                }, function loginFail(response) {
                    reject(response)
                })
            })
        }
    }

    var logout = {
        do: function() { 
            return $q(function(resolve, reject) {
                $http.get( API.logout.url ).then(function logoutSuccess(response) {
                    if (response.status === 200 && response.data.code === 200) {
                        destoryToken();
                        $cookies.remove('is_login')
                        if ($cookies.get('is_mentor')) $cookies.remove('is_mentor');
                        resolve(response)
                    } else {
                        reject(response)
                    }
                }, function logoutFail(response) {
                    reject(response)
                })
            })
        }
    }

    var isLogin = function() {
        if ($cookies.get('is_login')) return true;
        return false;
    }

    var isMentor = function() {
        if ($cookies.get('is_mentor')) return true;
        return false;
    }


    return {
        isLogin: isLogin,
        isMentor: isMentor,
        register: register,
        login: login,
        logout: logout

        // 发送手机验证码
        ,'sendPhoneVcode': {
            do: function( params ) { return $http.post( API.sendPhoneVcode.url, params)},
            'url': host+'SendPhoneVcode',
            'method': 'post',
            'params': {
                'phone' : ''
            }
        }
        ,'validatePhone': {
            'url': host+'ValidatePhone',
            'method': 'post',
            'params': {
                'phone' : '',
                'vcode':''
            }
        }
        // 实名认证
        ,'validateRealName': {
            'url': host+'ValidateRealName',
            'method': 'post',
            'params': {
                'realname': '',
                'idcard' : ''
            }
        }
        // 20151119
        ,'getRealnameStatus': {
            'url': host+'GetRealnameStatus'
        }
        // 变更密码
        ,'updatePassword': {
            'url': host+'UpdatePassword',
            'method': 'post',
            'params': {
                'old_password' : '',
                'new_password' : ''
            }
        }
        // 更新高中资料
        ,'updateUserHighschoolInfo': {
            'url': host+'UpdateUserHighschoolInfo',
            'method': 'post',
            'params': {
                "hs_name": "",
                "hs_adm_year": '',
                "hs_adm_month": '',
                "hs_gra_year": '',
                "hs_gra_month": '',
                "hs_grade": "",
                "hs_class": "",
                "hs_stuid": "",
                "hs_hum_sci": '',
                "hs_status": ''
            }
        }
        ,'getUserHighschoolStatus': {
            'url': host+'GetUserHighschoolStatus'
        }
        // 更新大学资料
        ,'updateUserCollegeInfo': {
            'url': host+'UpdateUserCollegeInfo',
            'method': 'post',
            'params': {
                "col_name":"",
                "col_dept": "",
                "col_adm_year": '',
                "col_adm_month": '',
                "col_gra_year": '',
                "col_gra_month": '',
                "col_grade": "",
                "col_class": "",
                "col_stuid": "",
                "col_status": ''
            }
        }
        ,'getUserCollegeStatus': {
            'url': host+'GetUserCollegeStatus'
        }
        ,'addUserTags': {
            'url': host+'AddUserTags',
            'method': 'post',
            'params': {
                'tag': ''
            }
        }
        ,'deleteUserTags': {
            'url': host+'DeleteUserTags',
            'method': 'post',
            'params': {
                'tag': ''
            }
        }
    }

}])})
