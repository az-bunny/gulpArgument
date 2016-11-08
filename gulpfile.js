var gulp = require('gulp'),
    minimist = require('minimist'),
    postcss = require('gulp-postcss');


/**
 * autoprefixer用ブラウザ指定
 */
var browsers = [
    'Android >= 2.3',
    'ios_saf >= 6'
];
/*
var browsers = [
    'last 2 versions',
    'ie >= 10'
];
*/


/**
 * cssコンパイル
 */
gulp.task('prefix', function() {
    //引数をパース
    var argv = minimist(process.argv.slice(2));
    //ファイルパスを分割
    var dir = argv.file.split('/');
    //ファイル名を抽出
    var fileName = dir[dir.length -1];
    //ディレクトリパスを生成
    dir = argv.file.replace(fileName, '');

    gulp.src(argv.file)
        .pipe(postcss([
            require('autoprefixer')({browsers: browsers}),
        ]))
        .pipe(gulp.dest(dir));
});