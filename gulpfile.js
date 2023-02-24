const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const tsProject = ts.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// Rutas de los archivos
const paths = {
    scripts: [
        'src/utils/*.ts',
        'src/types/*.ts',
        'src/services/*.ts',
        'src/components/**/*.ts',
        'src/pages/**/*.ts',
    ]
};

// Tarea para concatenar y minimizar los scripts
const build = () => {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(tsProject()) // hacemos que sea el proyecto de TS
        .pipe(sourcemaps.write('.'))
        .pipe(concat('bundle.js')) // Concatenamos todos los archivos en uno solo
        .pipe(rename({ suffix: '.min' })) // Renombramos el archivo resultante añadiéndole un sufijo '.min'
        .pipe(gulp.dest('build')) // Lo guardamos en la carpeta 'public/js'

}

exports.build = build;
exports.default = build;