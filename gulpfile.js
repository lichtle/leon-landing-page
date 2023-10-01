const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function styles() {
  // Compilando e comprimindo o Sass
  return gulp
    .src("./src/styles/*.scss") // Arquivo ou arquivos de origem
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/styles")); // Pasta de destino
}

function images() {
  // Comprimindo imagens
  return gulp
    .src("./src/images/*") // Pegar qualquer arquivo dentro da pasta "images", ou seja, todas as imagens
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images")); // Pasta de destino das imagens comprimidas
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
  gulp.watch(
    "./src/styles/*.scss", // Arquivos a serem "vigiados" (nesse caso, qualquer arquivo com extensão .scss que esteja dentro da pasta styles, que está dentro da pasta src)
    gulp.parallel(styles)
  );
};
