
var path = require('path')


module.exports.GetHomepageData = function(req,res) {
    var response = JSON.stringify({
        "star_mentor_list": [
            {
                "user_id": "HFJJK4823A",
                "slogan": "导师宣言",
                "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                "position": "北京大学新闻系2014级",
                "realname": "张晓蕾",
                "cee_ranking": "北京市文科第5",
                "awards": [
                    "第7&8届国际天文与天体物理奥林匹克竞赛银牌",
                    "第31届全国中学生物理竞赛决赛二等",
                    "海淀区三好学生"
                ]
            },{
                "user_id": "HFJJK4823A",
                "slogan": "导师宣言",
                "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                "position": "北京大学新闻系2014级",
                "realname": "张晓蕾",
                "cee_ranking": "北京市文科第5",
                "awards": [
                    "第7&8届国际天文与天体物理奥林匹克竞赛银牌",
                    "第31届全国中学生物理竞赛决赛二等",
                    "海淀区三好学生"
                ]
            }
        ],
        "rec_mentor_list": [
            {
                "user_id": "HFJJK4899F",
                "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                "slogan": "导师宣言",
                "position": "北京大学新闻系2014级",
                "realname": "张晓蕾",
                "rec_tag": "人气",
                "course_list": [
                    {
                        "course_id": "7389FDJJK389",
                        "title": "高考冲刺阶段时间规划ABC"
                    }
                ]
            },{
                "user_id": "HFJJK4899F",
                "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                "slogan": "导师宣言",
                "position": "北京大学新闻系2014级",
                "realname": "张晓蕾",
                "rec_tag": "人气",
                "course_list": [
                    {
                        "course_id": "7389FDJJK389",
                        "title": "高考冲刺阶段时间规划ABC"
                    }
                ]
            },{
                "user_id": "HFJJK4899F",
                "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                "slogan": "导师宣言",
                "position": "北京大学新闻系2014级",
                "realname": "张晓蕾",
                "rec_tag": "人气",
                "course_list": [
                    {
                        "course_id": "7389FDJJK389",
                        "title": "高考冲刺阶段时间规划ABC"
                    }
                ]
            }
        ],
        "qujing_story": {
            "id": "NSDFJK3124",
            "title": "取经故事标题",
            "content_abs": "取经故事内容摘要"
        }
    });
    res.end(response)
}

module.exports.GetRecMentorList = function(req,res) {
    var response = JSON.stringify([
        {
            "user_id": "HFJJK4899F",
            "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
            "slogan":"导师宣言",
            "position": "北京大学新闻系2014级",
            "realname": "张晓蕾",
            "rec_tag":"人气",
            "course_list": [
                {
                "course_id": "7389FDJJK389",
                "title": "高考冲刺阶段时间规划ABC"
                }
            ]
        },{
            "user_id": "HFJJK4899F",
            "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
            "slogan":"导师宣言",
            "position": "北京大学新闻系2014级",
            "realname": "张晓蕾",
            "rec_tag":"人气",
            "course_list": [
                {
                "course_id": "7389FDJJK389",
                "title": "高考冲刺阶段时间规划ABC"
                }
            ]
        },{
            "user_id": "HFJJK4899F",
            "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
            "slogan":"导师宣言",
            "position": "北京大学新闻系2014级",
            "realname": "张晓蕾",
            "rec_tag":"人气",
            "course_list": [
                {
                "course_id": "7389FDJJK389",
                "title": "高考冲刺阶段时间规划ABC"
                }
            ]
        },{
            "user_id": "HFJJK4899F",
            "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
            "slogan":"导师宣言",
            "position": "北京大学新闻系2014级",
            "realname": "张晓蕾",
            "rec_tag":"人气",
            "course_list": [
                {
                "course_id": "7389FDJJK389",
                "title": "高考冲刺阶段时间规划ABC"
                }
            ]
        }
    ]);
    res.end(response)
}



// user 相关 API
module.exports.Login = function( req, res ) {
    res.setHeader('token', 'dlafdoisajosfhdajfeaeoqr1h8ru31');
    res.end(JSON.stringify({"code":200,"data":{
                        "nickname": "Lydia",
                        "realname": "沙金",
                        "gender": 1,
                        "birthday": "19970326",
                        "idcard_val": 142629199703265818,
                        "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                        "nativeplace": "河北唐山",
                        "homeaddr": "北京市海淀区中关村南路8号院1号楼一单元101",
                        "role": 1
                    }}))
}

module.exports.Logout = function( req, res ) {
    res.end(JSON.stringify({"code":200,"data":true}))
}

// 注册新用户
module.exports.Register = function( req, res ) {
    res.end(JSON.stringify({
                        "nickname": "Lydia",
                        "realname": "沙金",
                        "gender": 1,
                        "birthday": "19970326",
                        "idcard_val": 142629199703265818,
                        "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                        "nativeplace": "河北唐山",
                        "homeaddr": "北京市海淀区中关村南路8号院1号楼一单元101",
                        "role": 1
                    }))
}

module.exports.GetUserInfo = function( req, res ) {
    res.end(JSON.stringify({"code":200,"data":{
                        "nickname": "Lydia",
                        "realname": "沙金",
                        "gender": 1,
                        "birthday": "19970326",
                        "idcard_val": 142629199703265818,
                        "avatar": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
                        "nativeplace": "河北唐山",
                        "homeaddr": "北京市海淀区中关村南路8号院1号楼一单元101",
                        "role": 1,
                        "isLogin": true
                    }}))
}
module.exports.GetUserHighschoolInfo = function( req, res ) {
    res.end(JSON.stringify({
    "hs_name": "北京市实验中学",
    "hs_adm": "201409",
    "hs_grade": 1,
    "hs_class": 1,
    "hs_stuid": "2014090123",
    "hs_hum_sci": 1,
    "hs_validate": 1
}))
}
module.exports.GetUserCollegeInfo = function( req, res ) {
    res.end(JSON.stringify({
    "col_name": "北京大学新闻系",
    "col_adm": "201409",
    "col_grade": 1,
    "col_class": 1,
    "col_stuid": "T2014090123",
    "col_validate": 1
}))
}
module.exports.GetMentorInfo = function( req, res ) {
    res.end(JSON.stringify({
    "mt_position": "北京大学新闻系2014级",
    "mt_highlight": "高考冲刺阶段时间规划",
    "mt_short_intro": "高考冲刺阶段争分夺秒，让我带你制定最有效的时间规划方案",
    "mt_intro": "北京市高中物理竞赛银奖",
    "mt_cee_score": 680,
    "mt_awards": "获奖情况",
    "mt_course_period": 10,
    "mt_follows": 100,
    "mt_comments": 34,
    "mt_rating": 99,
    "mt_portraits": "http://img.laiqujing.com/FhswSlBfMs_qmjUblyiAnvDN4Pzw",
    "mt_timeslots_offline":  {"1": ["7-9","19-20" ],
        "2": [],"3": [],"4": [], "5": [],"6": [],"7": []},
    "mt_price_offline": 100,
    "mt_locations": "addr1,addr2",
    "mt_validate": 1
}))
}
module.exports.GetCourseOrderList = function( req, res ) {
    var obj = [
{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
},{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
},
{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
},{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
},
{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
},{
    "mentor_realname": "mentor 实名",
    "course_title": "考研压力缓解法则",
    // "timeslot": " {\"1\":[\"7-9\"]}",
    "city": "北京",
    "location": "北京大学一教402室",
    "rating": 95,
    "status": 3
}
];
var status = req._parsedUrl.query.split('&')[1].split('=')[1]

    res.end(JSON.stringify( obj.filter(function( item ) { return item.status==status }) ))
}

// 发送手机验证码
module.exports.ValidatePhone = function( req, res ) {
    

}

//更新用户基础资料
module.exports.UpdateUserInfo = function( req, res ) {
    

}

// 上传用户头像
module.exports.UploadAvatar = function( req, res ) {
    

}

// 实名认证
module.exports.ValidateRealName = function( req, res ) {
    

}

// 变更手机号
module.exports.UpdatePhone = function( req, res ) {
    

}

// 变更密码
module.exports.UpdatePassword = function( req, res ) {
    

}

// 更新高中资料
module.exports.UpdateHighschoolInfo = function( req, res ) {
    

}

// 更新大学资料
module.exports.UpdateCollegeInfo = function( req, res ) {
    

}

// 上传 mentor 申请资料
module.exports.UploadMentorCV = function( req, res ) {
    

}

// mentor 资格申请
module.exports.ApplyForMentor = function( req, res ) {
    

}

// 上传 mentor 照片
module.exports.UploadMentorPortrait = function( req, res ) {
    

}


// mentor 相关 API
// 获取首页推荐的列表
module.exports.GetRecMentorLis = function( req, res ) {
    res.end(JSON.stringify([
    {
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶<br/>段争分夺秒，让我带你制定最有效的时间规划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲<br/>刺阶段争分夺秒，让我带你制定最有效的时间规划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶段争分<br/>夺秒，让我带你制定最有效的时间规划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶段争分夺秒，让我带你制定最<br/>有效的时间规划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶段争分夺秒，让我带<br/>你制定最有效的时间规划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶段争分夺秒，让我带你制定最有效的时间规<br/>划方案"
    },{
        "user_id": "103",
        "portrait": "//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
        "highlight": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "short_intro": "高考冲刺阶段争分夺秒，让我带你制定最有效的时间规划方<br/>案"
    }
]))
}

// 获取某个 mentor 的详细信息
module.exports.GetMentorDetails = function( req, res ) {
    res.end(JSON.stringify({
    "user_id": 103,
    "portraits": "http://img.laiqujing.com/FhswSlBfMs_qmjUblyiAnvDN4Pzw,http://img.laiqujing.com/Fl8rTIsI89tIeQ0Qyfo-t1nN5Zuq",
    "position": "北京大学新闻系2014级",
    "realname": "张晓蕾",
    "cee_score": 680,
    "awards": "北京市高中物理竞赛银奖",
    "course_period": 10,
    "follows": 13,
    "comments": 30,
    "rating": 98,
    "timeslots_offline": {
        "1": ["7-9","19-20" ],
        "2": [],"3": [],"4": [], "5": [],"6": [],"7": []
    },
    "price_offline": 100,
    "locations": "北大图书馆",
    "intro": "高考冲刺阶段争分夺秒<br/>让我带你制定最有效的时间规划方案",
    "last_comment": {
        "user_id": 1004,
        "avatar": "http://img.laiqujing.com/FhswSlBfMs_qmjUblyiAnvDN4Pzw!avatar",
        "nickname": "蘑菇小姐",
        "title": "高考冲刺阶段的时间规划方案",
        "date": "2015-11-08"
    },
    "course_list": [
        {
            "course_id": 2009,
            "title": "高考冲刺阶段时间规划ABC",
            "intro": "帮你详细规划高考冲刺阶段时间规划",
            "duration": 45,
            "rating": 98
        },{
            "course_id": 2009,
            "title": "高考冲刺阶段时间规划ABC",
            "intro": "帮你详细规划高考冲刺阶段时间规划",
            "duration": 45,
            "rating": 98
        },{
            "course_id": 2009,
            "title": "高考冲刺阶段时间规划ABC",
            "intro": "帮你详细规划高考冲刺阶段时间规划",
            "duration": 45,
            "rating": 98
        }
    ]
}))
}

// 获取课程列表
module.exports.GetCourseList = function( req, res ) {
    res.end(JSON.stringify([
    {
        "course_id": 20092,
        "avatar": "http://img.laiqujing.com/6663-693090-34-994-86126-24!avatar",
        "title": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "pub_time": "1小时前",
        "rating":98
    },
   {
        "course_id": 20092,
        "avatar": "http://img.laiqujing.com/6663-693090-34-994-86126-24!avatar",
        "title": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "pub_time": "1小时前",
        "rating":98
    },{
        "course_id": 20092,
        "avatar": "http://img.laiqujing.com/6663-693090-34-994-86126-24!avatar",
        "title": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "pub_time": "1小时前",
        "rating":98
    },{
        "course_id": 20092,
        "avatar": "http://img.laiqujing.com/6663-693090-34-994-86126-24!avatar",
        "title": "高考冲刺阶段时间规划ABC",
        "position": "北京大学新闻系2014级",
        "realname": "张晓蕾",
        "pub_time": "1小时前",
        "rating":98
    }
]))
}

// 获取某个 mentor 的课程列表
module.exports.GetMentorCourseList = function( req, res ) {
    res.statusCode = 301;
    res.end('sever do not support this api any more')
}

// 获取评论列表
module.exports.GetCommentList = function( req, res ) {
    res.end(JSON.stringify([
  {
    "user_id": 1002,
    "avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "nickname": "小桃子",
    "tags":"二次元",
    "title": "高三时间管理",
    "content":"收获很大，对自己的时间安排有了明确的改善计划",
    "date": "2015-11-10",
    "passed_time":"1小时前",
    "mentor_id":203,
    "mentor_avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "mentor_realname":"李源",
    "position":"清华国际关系系大二",
    "highlight":"将你如何做时间的主人"
  },{
    "user_id": 1002,
    "avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "nickname": "小桃子",
    "tags":"二次元",
    "title": "高三时间管理",
    "content":"收获很大，对自己的时间安排有了明确的改善计划",
    "date": "2015-11-10",
    "passed_time":"1小时前",
    "mentor_id":203,
    "mentor_avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "mentor_realname":"李源",
    "position":"清华国际关系系大二",
    "highlight":"将你如何做时间的主人"
  },{
    "user_id": 1002,
    "avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "nickname": "小桃子",
    "tags":"二次元",
    "title": "高三时间管理",
    "content":"收获很大，对自己的时间安排有了明确的改善计划",
    "date": "2015-11-10",
    "passed_time":"1小时前",
    "mentor_id":203,
    "mentor_avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "mentor_realname":"李源",
    "position":"清华国际关系系大二",
    "highlight":"将你如何做时间的主人"
  },{
    "user_id": 1002,
    "avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "nickname": "小桃子",
    "tags":"二次元",
    "title": "高三时间管理",
    "content":"收获很大，对自己的时间安排有了明确的改善计划",
    "date": "2015-11-10",
    "passed_time":"1小时前",
    "mentor_id":203,
    "mentor_avatar":"//chenjunhao.cn/assets/images/wallhaven-181154.jpg",
    "mentor_realname":"李源",
    "position":"清华国际关系系大二",
    "highlight":"将你如何做时间的主人"
  }
]
))
}



module.exports.GetFollowMentorList = function( req, res ) {
    res.end(JSON.stringify(

[
    {
        "user_id": "user_id",
        "avatar":"头像 url",
        "position": "导师院校/年级",
        "realname": "导师实名",
        "course_list": [
            {
            "course_id": "course_id",
            "title": "高考冲刺阶段时间规划ABC",
            "duration": 45,
            "price_offline":100,
            },{
            "course_id": "course_id",
            "title": "高考冲刺阶段时间规划ABC",
            "duration": 45,
            "price_offline":100,
            }
        ]
    },{
        "user_id": "user_id",
        "avatar":"头像 url",
        "position": "导师院校/年级",
        "realname": "导师实名",
        "course_list": [
            {
            "course_id": "course_id",
            "title": "高考冲刺阶段时间规划ABC",
            "duration": 45,
            "price_offline":100,
            },{
            "course_id": "course_id",
            "title": "高考冲刺阶段时间规划ABC",
            "duration": 45,
            "price_offline":100,
            }
        ]
    }
]

        ))
}
