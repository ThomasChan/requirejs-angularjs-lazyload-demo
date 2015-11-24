window.application.components.controller('CreateMentor', function( $rootScope, $scope, $location, $timeout, Upload, API) {

    // API.go( API.getRealnameStatus ).then(function getSuc(response) {
        response = {data:{realname_status:0}}
        $scope.steps = {
            steps: [
                {
                    html: '实名认证',
                    index: 1
                },{
                    html: '教育认证',
                    index: 2
                },{
                    html: '设置课程',
                    index: 3
                },{
                    html: '完善资料',
                    index: 4
                }
            ]
            ,current : response.data.realname_status ? 2 : 1
            ,stepsCurrent : function (index) {
                return +$scope.steps.current == index
            }
            ,nextStep : function (index) {
                $scope.steps.current = index;
                var a = $scope.steps.steps[index-1].html;
                $rootScope.$broadcast('createMentorStep', a);
            }
        }
        $timeout(function(){ $scope.steps.nextStep( $scope.steps.current ); })

        $scope.uploadfiles = {
            progress: 0,
            src: '',
            button: '点击上传资料',
            disabled: false
        }

        $scope.uploadFiles = function(file, errFiles) {
            $scope.errFile = errFiles && errFiles[0];
            console.log( file );
            if (file) {
                $scope.uploadfiles.disabled = true;
                $scope.uploadfiles.button = '正在上传...';
                file.upload = Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {file:file}
                })
                file.upload.then(function (response) {
                    $timeout(function () {
                        console.log( response )
                        $scope.uploadfiles.src = response.data;
                        $scope.uploadfiles.button = '重新选择上传';
                        $scope.uploadfiles.disabled = false;
                        // file.result= response.data;
                    })
                }, function (response) {
                    if (response.status > 0) {
                        $scope.uploadfiles.disabled = false;
                        $scope.errorMsg = response.status + ': ' + response.data;
                    }
                }, function (evt) {
                    $scope.uploadfiles.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total))
                })
            }
        }

    // }, function getFail(response) {
        // 
    // })


})
