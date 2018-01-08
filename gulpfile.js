var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importcss = require('postcss-import'),
    browserSync = require('browser-sync').create();


gulp.task('default', function(){
    console.log('Huray - you create a gulp task!');
});

gulp.task('html', function(){
    console.log('Imagine something usefull been done to your html here!');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([
            importcss,
            cssvars,
            nested,
            autoprefixer,
            
        ]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

    browserSync.init({
        notify:false,
        server: {
            baseDir: 'app'
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/assets/**/*.css', function(){
        gulp.start ('cssInject');
    })
});

gulp.task('cssInject', ['styles'],function(){
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream()); 
});