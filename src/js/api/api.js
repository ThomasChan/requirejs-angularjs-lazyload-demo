define([
    'angular'
], function( angular ){
    angular.module('application.API', [])
        .factory('API', ['$http', '$cookies', '$q', function($http, $cookies, $q){

    var host = window.APP_CONFIG.host + '?Action='

    window.serialize = function(obj, prefix) {
        if (obj) {
            var str = [];
            for(var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                    str.push(typeof v == "object" ?
                    serialize(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
                }
            }
            return '&'+str.join("&");
        } else {
            return ''
        }
    }
    window.FILTER = {
        isPhone: function( phone ) { return /^1\d{10}$/.test(phone) }
        ,isPassword: function( password ) { return /^[a-zA-Z0-9_+=\-@#~,.\[\]()!%^*$]+$/.test(password) }
        ,isVcode: function( vcode ) { return /^[\da-zA-Z]{6}$/.test(vcode) }
        ,isNickname: function( nickname ) { return /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(nickname) }
        ,isLegal: function( string ) { return /^[a-zA-Z0-9_+=\-@#~,.\[\]()!%^*$]+$/.test(string) }
    }

    var go = function( action, params_POST, params_GET ) {
        var url = action.url
        if (!url) return false
        var method = action.method || 'get'
        if (params_GET) url += serialize(params_GET)
        var params = params_POST || {}
        return $http[method]( url, params)
    }


    return {

        go : go
        ,isLogin : function() {
            if ($cookies.get('is_login')) return true;
            return false;
        }
        ,isMentor : function() {
            if ($cookies.get('is_mentor')) return true;
            return false;
        }
        

// 注册&认证
        ,logout: {
            'url': host+'Logout'
        }

        // 发送手机验证码
        ,sendPhoneVcode: {
            'url': host+'SendPhoneVcode',
            'method': 'post',
            'params': {
                'phone' : ''
            }
        }
        ,validatePhone: {
            'url': host+'ValidatePhone',
            'method': 'post',
            'params': {
                'phone' : '',
                'vcode':''
            }
        }
        // 注册新用户
        ,register : {
            'url': host+'RegisterUser',
            'method': 'post',
            'params': {
                'phone' : '',
                'vcode' : '',
                'nickname' : '',
                'password' : '',
                'invcode' : ''
            }
        }
        ,login: {
            'url': host+'LoginUser',
            'method': 'post',
            'params': {
                'phone' : '',
                'password' : ''
            }
        }
        // 实名认证
        ,validateRealName: {
            'url': host+'ValidateRealName',
            'method': 'post',
            'params': {
                'realname': '',
                'idcard' : ''
            }
        }
        // 20151119
        ,getRealnameStatus: {
            'url': host+'GetRealnameStatus'
        }
        // 变更密码
        ,updatePassword: {
            'url': host+'UpdatePassword',
            'method': 'post',
            'params': {
                'old_password' : '',
                'new_password' : ''
            }
        }
        // 更新高中资料
        ,updateUserHighschoolInfo: {
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
        ,getUserHighschoolStatus: {
            'url': host+'GetUserHighschoolStatus'
        }
        // 更新大学资料
        ,updateUserCollegeInfo: {
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
        ,getUserCollegeStatus: {
            'url': host+'GetUserCollegeStatus'
        }
        ,addUserTags: {
            'url': host+'AddUserTags',
            'method': 'post',
            'params': {
                'tag': ''
            }
        }
        ,deleteUserTags: {
            'url': host+'DeleteUserTags',
            'method': 'post',
            'params': {
                'tag': ''
            }
        }

// 用户资料API
        ,getUserBasicInfo: {
            'url': host+'GetUserBasicInfo'
        }
        //更新用户基础资料
        ,UpdateUserBasicInfo: {
            'url': host+'UpdateUserBasicInfo',
            'method': 'post',
            'params': {
                'nickname' : '',
                'realname' : '',
                'phone': '',
                'gender' : '',
                'birthday' : '',
                'nativeplace' : ''
            }
        }
        // 上传用户头像
        ,uploadAvatar: {
            'url': host+'UploadAvatar',
            'method': 'post'
        }
        ,getUserHighschoolInfo: {
            'url': host+'GetUserHighschoolInfo'
        }
        ,getUserCollegeInfo:{
            'url': host+'GetUserCollegeInfo'
        }
        ,getCourseOrderList: {
            'url': host+'GetCourseOrderList',
            'params': {
                'Status': ''
            }
        }
        ,getInviteeList: {
            'url': host+'GetInviteeList'
        }
        ,validateInviteeEdu: {
            'url': host+'ValidateInviteeEdu',
            'params': {
                'InviteeId':''
            }
        }

// mentor 相关 API
        // 获取首页推荐的列表
        ,getRecMentorList: {
            'url': host+'getRecMentorList'
        }
        ,getOrderMentorList: {
            'url': host+'GetOrderMentorList',
            'params': {
                'OrderStatus': ''
            }
        }
        ,getFollowMentorList: {
            'url': host+'GetFollowMentorList'
        }
        // 获取某个 mentor 的详细信息
        ,getMentorHomeInfo: {
            // 'url': window.APP_CONFIG.host+'/',
            'url': host+'GetMentorHomeInfo',
            'params': {
                'MentorId': ''
            }
        }
        ,updateMentorInfo: {
            'url': host+'UpdateMentorInfo',
            'method': 'post',
            'params': {
                "slogan":"",
                "cee_score":"",
                "cee_hum_sci":"",
                "cee_ranking":"",
                "awards": "",
                "strength":"",
                "selfval":"",
                "story_title":"",
                "story":""
            }
        }
        ,getMentorInfo: {
            'url': host+'GetMentorInfo'
        }
        // 上传 mentor 照片
        ,uploadMentorPortrait: {
            'url': host+'UploadMentorPortrait',
            'params': {
                'PortraitNo': ''
            },
            'method': 'post'
        }


// 课程API
        // 获取课程列表
        ,getCourseList: {
            'url': host+'GetCourseList',
            'params': {
                'Sort' : '',
                'Order' : '',
                // 'Category' : '',
                'Tag' : ''
            }
        }
        ,addOfflineCourse: {
            'url': host+'AddOfflineCourse',
            'method': 'post',
            'params': {
                "title":"",
                "desc":"",
                "duration": '',
                "price":''
            }
        }
        ,updateOfflineCourse: {
            'url': host+'UpdateOfflineCourse',
            'method': 'post',
            'params':{
                "course_id":"",
                "title":"",
                "desc":"",
                "duration":'',
                "price":''
            }
        }


// 评论API
        // 获取评论列表
        ,getCommentList: {
            // 'url': window.APP_CONFIG.host+'/',
            'url': host+'GetCommentList',
            'params': {
                'Sort': '',
                'Order': '',
                'MentorId': ''
            }
        }

// 其他API
        ,getHomepageData: {
            'url': host+'GetHomepageData'
        }
        ,getUserCenterData: {
            'url': host+'GetUserCenterData'
        }
// 取经故事
        ,getQujingStoryList: {
            'url': host+'GetQujingStoryList'
        }







        // 变更手机号
        ,updatePhone: {
            'url': host+'UpdatePhone',
            'method': 'post',
            'params': {
                'phone' : '',
                'vcode' : ''
            }
        }

        // // 上传 mentor 申请资料
        // ,uploadMentorCV: {
        //     'url': host+'UploadMentorCV',
        //     'params': {
        //         'CvNo' : ''
        //     },
        //     'method': 'post'
        // }

        // // mentor 资格申请
        // ,applyForMentor: {
        //     'url': host+'ApplyForMentor',
        //     'params': {
        //         'Tags' : '',
        //         'Categories': ''
        //     },
        //     'method': 'post'
        // }



        // // 获取某个 mentor 的课程列表
        // ,getMentorCourseList: {
        //     'url': host+'GetMentorCourseList',
        //     'params': {
        //         'PortraitNo': ''
        //     }
        // }





    }

}])})
