const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");

function styles() {
  // Compilando e comprimindo o Sass
  return gulp
    .src("./src/styles/*.scss") // Arquivo ou arquivos de origem
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/styles")); // Pasta de destino
}

function images() {
  return gulp
    .src("./src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

exports.default = function () {
  gulp.watch(
    "./src/styles/*.scss",
    { ignoreInitial: false },
    gulp.parallel(styles)
  );

  gulp.watch("./src/images/*", { ignoreInitial: false }, gulp.parallel(images));
};
