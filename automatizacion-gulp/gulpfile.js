var gulp = require('gulp');
concat = require('gulp-concat');
uglify = require('gulp-uglify');

function taskCompiler(fichero){
    // GLOB
    var glob = gulp.src(['./source/*.js', '!./source/3.js']);
    glob.pipe(concat('funciones.min.js'))
        .pipe(uglify('funciones.min.js'))
        .pipe(gulp.dest('./build'));

    console.log('modificando con gulp: '+fichero.path);
}


gulp.task('default', taskCompiler);
gulp.watch('./source/*.js', taskCompiler);