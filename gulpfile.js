
var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var minify = require('gulp-uglify')

var watch = require('gulp-watch')


var origSrc = gulp.src;
gulp.src = function () {
    return fixPipe(origSrc.apply(this, arguments));
};
function fixPipe(stream) {
    var origPipe = stream.pipe;
    stream.pipe = function (dest) {
        arguments[0] = dest.on('error', function (error) {
            var nextStreams = dest._nextStreams;
            if (nextStreams) {
                nextStreams.forEach(function (nextStream) {
                    nextStream.emit('error', error);
                });
            } else if (dest.listeners('error').length === 1) {
                throw error;
            }
        });
        var nextStream = fixPipe(origPipe.apply(this, arguments));
        (this._nextStreams || (this._nextStreams = [])).push(nextStream);
        return nextStream;
    };
    return stream;
}

gulp.task('uglycss', function() {
    gulp.src('src/css/*.css')
        .pipe(watch('src/css/*.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))   
});

gulp.task('uglyjs', function() {
    gulp.src('src/**/**/*.js')
        .pipe(watch('src/**/**/*.js'))
        .pipe(minify())
        .pipe(gulp.dest('build'))
        .on('error', function( error ) {
            console.log('error is ', error)
        })
});

gulp.task('default', ['uglycss', 'uglyjs'])
