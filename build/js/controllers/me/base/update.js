window.application.components.controller("UpdateBaseInfo",function(e,r,o,n){e.action=r.search().action,console.log(e.action),"updatePhone"===e.action&&(e.update=o.updatePhone.params,e.phoneFormServerError="",e.timer=null,e.requireSms={text_when_sms:"发送验证码",counter:60,start:!1,countDown:function(){e.timer=n(function(){e.requireSms.counter>0&&e.requireSms.start?(e.requireSms.counter--,e.requireSms.text_when_sms=e.requireSms.counter+" 秒后重新获取",e.requireSms.countDown()):(e.requireSms.start=!1,e.requireSms.text_when_sms="重新获取验证码",e.requireSms.counter=60,n.cancel(e.timer)),console.log("counter...",e.requireSms.counter)},1e3)},"do":function(){console.log("start..."),e.requireSms.start=!0,e.requireSms.countDown()}},e.doUpdate=function(){console.log(e.phoneForm),e.phoneFormServerError="",window.history.back()},e.$on("$locationChangeStart",function(r){n.cancel(e.timer)}))});