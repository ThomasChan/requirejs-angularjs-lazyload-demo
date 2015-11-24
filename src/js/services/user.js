define([
    'angular'
], function( angular ){
    angular.module('application.User', [])
        .factory('User', ['$http', '$cookies', '$q', function($http, $cookies, $q){

        return {
            
            'validatePhone': {
                filterParams: function( params ) {
                    if (!params.Phone || !FILTER.isPhone( params.Phone )) {
                        return {code:1,error:'请输入正确的 11 位手机号码'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.validatePhone.url, {params:params} ) }
            }

            ,'updateUserBaseInfo': {
                filterParams: function( params ) {
                    if (!params.Nickname || !FILTER.isNickname( params.Nickname )) {
                        return {code:1,error:'昵称可以是汉字、数字、下划线、大小写字母组成，至少 3 位，至多 20 位'}
                    } else if ( params.Realname && !FILTER.isLegal( params.Realname )) {
                        return {code:1,error:'请输入您的真实姓名'}
                    } else if ( params.Birthday && !FILTER.isBirthday( params.Birthday)) {
                        return {code:1,error:'请输入正确的日期'}
                    } else if ( params.gender && ( params.gender !== 1 || params.gender !== 2)) {
                        return {code:1,error:'性别选择错误'}
                    } else if ( params.nativeplace && !FILTER.isLegal( params.nativeplace )) {
                        return {code:1,error:'含有不合法字符'}
                    } else if ( params.homeaddr && !FILTER.isLegal( params.homeaddr )) {
                        return {code:1,error:'含有不合法字符'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.updateUserBaseInfo.url, {params:params} ) }
            }

            ,'uploadAvatar': {
                do: function( params ) { return $http.post( API.uploadAvatar.url, params ) }
            }

            ,'validateRealName': {
                filterParams: function( params ) {
                    if (!params.Realname || !FILTER.isLegal( params.Realname )) {
                        return {code:1,error:'真实姓名含有不合法字符'}
                    } else if (!params.Idcard || !FILTER.isIdcard( params.Idcard )) {
                        return {code:1,error:'身份证号码格式不正确'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.validateRealName.url, {params:params} ) }
            }

            ,'updatePhone': {
                filterParams: function( params ) {
                    if (!params.Phone || !FILTER.isPhone( params.Phone )) {
                        return {code:1,error:'请输入正确的 11 位手机号码'}
                    } else if (!params.Vcode || !FILTER.isVcode( params.Vcode )) {
                        return {code:1,error:'请输入 6 位数字手机验证码 '}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.updatePhone.url, {params:params} ) }
            }

            ,'updatePassword': {
                filterParams: function( params ) {
                    if (!params.OldPassword || !FILTER.isPassword( params.OldPassword )) {
                        return {code:1,error:'旧密码含有不合法字符'}
                    } else if (!params.NewPassword || !FILTER.isPassword( params.NewPassword )) {
                        return {code:1,error:'新密码含有不合法字符'}
                    } else if (params.OldPassword === params.NewPassword) {
                        return {code:1,error:'新密码不可与旧密码相同'}
                    } else if (!params.ConNewPassword || !FILTER.isPassword( params.ConNewPassword )) {
                        return {code:1,error:'确认密码含有不合法字符'}
                    } else if (params.ConNewPassword !== params.NewPassword) {
                        return {code:1,error:'新密码与确认密码不一致'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.updatePassword.url, {params:params} ) }
            }

            ,'updateHighschoolInfo': {
                filterParams: function( params ) {
                    if ( params.HsCode && !FILTER.isLegal( params.HsCode )) {
                        return {code:1,error:'编码含有不合法字符'}
                    } else if ( params.AdmYear && !FILTER.isLegal( params.AdmYear )) {
                        return {code:1,error:'入学年份含有不合法字符'}
                    } else if ( params.AdmMonth && !FILTER.isLegal( params.AdmMonth )) {
                        return {code:1,error:'入学月份含有不合法字符'}
                    } else if ( params.Grade && !FILTER.isLegal( params.Grade )) {
                        return {code:1,error:'年纪含有不合法字符'}
                    } else if ( params.Class && !FILTER.isLegal( params.Class )) {
                        return {code:1,error:'班级含有不合法字符'}
                    } else if ( params.Stuid && !FILTER.isLegal( params.Stuid )) {
                        return {code:1,error:'学号含有不合法字符'}
                    } else if ( params.HumSci && !FILTER.isLegal( params.HumSci )) {
                        return {code:1,error:'文理科选择有误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.updateHighschoolInfo.url, {params:params} ) }
            }

            ,'updateCollegeInfo': {
                filterParams: function( params ) {
                    if ( params.ColCode && !FILTER.isLegal( params.ColCode )) {
                        return {code:1,error:'编码含有不合法字符'}
                    } else if ( params.AdmYear && !FILTER.isLegal( params.AdmYear )) {
                        return {code:1,error:'入学年份含有不合法字符'}
                    } else if ( params.AdmMonth && !FILTER.isLegal( params.AdmMonth )) {
                        return {code:1,error:'入学月份含有不合法字符'}
                    } else if ( params.Grade && !FILTER.isLegal( params.Grade )) {
                        return {code:1,error:'年纪含有不合法字符'}
                    } else if ( params.Class && !FILTER.isLegal( params.Class )) {
                        return {code:1,error:'班级含有不合法字符'}
                    } else if ( params.Stuid && !FILTER.isLegal( params.Stuid )) {
                        return {code:1,error:'学号含有不合法字符'}
                    } else if ( params.Dept && !FILTER.isLegal( params.Dept )) {
                        return {code:1,error:'院系含有不合法字符'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.updateCollegeInfo.url, {params:params} ) }
            }

            ,'uploadMentorCV': {
                filterParams: function( params ) {
                    // if (!params.CvNo)
                },
                do: function( params ) { return $http.post( API.uploadMentorCV.url+'CvNo=1', params ) }
            }

            ,'applyForMentor': {
                filterParams: function( params ) {
                    if (!params.Tags) {
                        return {code:1,error:'请填写标签'}
                    } else if (!params.Categories) {
                        return {code:1,error:'请选择分类'}
                    } else if (!params.intro || !FILTER.isLegal(params.intro)) {
                        return {code:1,error:'自我介绍含有不合法字符'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.post( API.applyForMentor.url, params.post, {params:params.get} ) }
            }


            ,'getUserBasicInfo': {
                do: function( params ) { 
                    user = $cookies.getObject('user');
                    if (user) {
                        return user
                    } else {
                        return $http.get( API.getUserBasicInfo.url, {params:params} )
                    }
                }
            }
            ,'isLogin': function() {
                return $cookies.getObject('user');
            }
            ,'getUserHighschoolInfo': {
                do: function( params ) { return $http.get( API.getUserHighschoolInfo.url, {params:params} ) }
            }
            ,'getUserCollegeInfo': {
                do: function( params ) { return $http.get( API.getUserCollegeInfo.url, {params:params} ) }
            }
            ,'getMentorInfo': {
                do: function( params ) { return $http.get( API.getMentorInfo.url, {params:params} ) }
                // do: function( params ) {
                //     var defer = $q.defer();
                //     defer.resolve({
                //         "mt_position": "北京大学新闻系2014级",
                //         "mt_highlight": "高考冲刺阶段时间规划",
                //         "mt_short_intro": "高考冲刺阶段争分夺秒，让我带你制定最有效的时间规划方案",
                //         "mt_intro": "北京市高中物理竞赛银奖",
                //         "mt_cee_score": 680,
                //         "mt_awards": "获奖情况",
                //         "mt_course_period": 10,
                //         "mt_follows": 100,
                //         "mt_comments": 34,
                //         "mt_rating": 99,
                //         "mt_portraits": "http://img.laiqujing.com/FhswSlBfMs_qmjUblyiAnvDN4Pzw",
                //         "mt_timeslots_offline":  {"1": ["7-9","19-20" ],
                //             "2": [],"3": [],"4": [], "5": [],"6": [],"7": []},
                //         "mt_price_offline": 100,
                //         "mt_locations": "addr1,addr2",
                //         "mt_validate": 1
                //     });
                //     return defer.promise
                // }
            }
            ,'getOrderMentorList': {
                filterParams: function( params ) {
                    if (params.OrderStatus && (params.OrderStatus !== 1 || params.OrderStatus !== 2 || params.OrderStatus !== 3)) {
                        return {code:1,error:'参数错误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.getOrderMentorList.url, {params:params} ) }
            }
            ,'getRealnameStatus': {
                do: function( params ) { return $http.get( API.getRealnameStatus.url, {params:params} ) }
            }
            ,'getUserHighschoolStatus': {
                do: function( params ) { return $http.get( API.getUserHighschoolStatus.url, {params:params} ) }
            }
            ,'getUserCollegeStatus':{
                do: function( params ) { return $http.get( API.getUserCollegeStatus.url, {params:params} ) }
            }

            ,'addUserTags': {
                filterParams: function( params ) {
                    if (!params.Tag || !FILTER.isLegal(params.Tag)) {
                        return {code:1,error:'参数错误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.addUserTags.url, {params:params} ) }
            }
            ,'deleteUserTags': {
                filterParams: function( params ) {
                    if (!params.Tag || !FILTER.isLegal(params.Tag)) {
                        return {code:1,error:'参数错误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.deleteUserTags.url, {params:params} ) }
            }
            ,'getFollowMentorList': {
                do: function( params ) { return $http.get( API.getFollowMentorList.url, {params: params} ) }
            }
            ,'updateMentorInfo': {
                filterParams: function( params ) {
                    if (!params.slogan || !FILTER.isLegal(params.slogan)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.cee_score || !FILTER.isLegal(params.cee_score)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.cee_hum_sci || !FILTER.isLegal(params.cee_hum_sci)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.cee_ranking || !FILTER.isLegal(params.cee_ranking)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.awards || !FILTER.isLegal(params.awards)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.strength || !FILTER.isLegal(params.strength)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.selfval || !FILTER.isLegal(params.selfval)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.story_title || !FILTER.isLegal(params.story_title)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.story || !FILTER.isLegal(params.story)) {
                        return {code:1,error:'参数错误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.post( API.updateMentorInfo.url, {params: params} ) }
            }
            ,'addOfflineCourse': {
                filterParams: function( params ) {
                    if (!params.title || !FILTER.isLegal(params.title)) {
                        return {code:1,error:'请输入标题'}
                    }else if (!params.desc || !FILTER.isLegal(params.desc)) {
                        return {code:1,error:'请输入正确的描述'}
                    }else if (!params.duration || !FILTER.isLegal(params.duration)) {
                        return {code:1,error:'请选择正确的时间段'}
                    }else if (!params.price || !FILTER.isLegal(params.price)) {
                        return {code:1,error:'请填写正确的金额'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.post( API.addOfflineCourse.url, {params: params} ) }
            }
            ,'updateOfflineCourse': {
                filterParams: function( params ) {
                    if (!params.course_id || isNaN(params.course_id)) {
                        return {code:1,error:'参数错误'}
                    }else if (!params.title || !FILTER.isLegal(params.title)) {
                        return {code:1,error:'请输入标题'}
                    }else if (!params.desc || !FILTER.isLegal(params.desc)) {
                        return {code:1,error:'请输入正确的描述'}
                    }else if (!params.duration || !FILTER.isLegal(params.duration)) {
                        return {code:1,error:'请选择正确的时间段'}
                    }else if (!params.price || !FILTER.isLegal(params.price)) {
                        return {code:1,error:'请填写正确的金额'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.post( API.updateOfflineCourse.url, {params: params} ) }
            }
            ,'getInviteeList': {
                do: function( params ) { return $http.get( API.getInviteeList.url, {params: params} ) }
            }
            ,'validateInviteeEdu': {
                filterParams: function( params ) {
                    if (!params.InviteeId || isNaN(params.InviteeId)) {
                        return {code:1,error:'参数错误'}
                    }
                    return {code:0}
                },
                do: function( params ) { return $http.get( API.validateInviteeEdu.url, {params: params} ) }
            }
        }

        
        // ,'getUserBasicInfo': {
        //     'url': host+'GetUserBasicInfo'
        // }
        // //更新用户基础资料
        // ,'UpdateUserBasicInfo': {
        //     'url': host+'UpdateUserBasicInfo',
        //     'method': 'post',
        //     'params': {
        //         'nickname' : '',
        //         'realname' : '',
        //         'phone': '',
        //         'gender' : '',
        //         'birthday' : '',
        //         'nativeplace' : ''
        //     }
        // }
        // // 上传用户头像
        // ,'uploadAvatar': {
        //     'url': host+'UploadAvatar',
        //     'method': 'post'
        // }
        // ,'getUserHighschoolInfo': {
        //     'url': host+'GetUserHighschoolInfo'
        // }
        // ,'getUserCollegeInfo':{
        //     'url': host+'GetUserCollegeInfo'
        // }
        // ,'getCourseOrderList': {
        //     'url': host+'GetCourseOrderList',
        //     'params': {
        //         'Status': ''
        //     }
        // }
        // ,'getInviteeList': {
        //     'url': host+'GetInviteeList'
        // }
        // ,'validateInviteeEdu': {
        //     'url': host+'ValidateInviteeEdu',
        //     'params': {
        //         'InviteeId':''
        //     }
        // }

    }])
})
