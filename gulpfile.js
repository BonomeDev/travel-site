var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', function(){
    console.log('Huray - you create a gulp task!');
});

gulp.task('html', function(){
    console.log('Imagine something usefull been done to your html here!');
});

gulp.task('style', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([
            cssvars,
            nested,
            autoprefixer
        ]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start ('html');
    });
    watch('./app/assets/**/*.css', function(){
        gulp.start ('style');
    })
});