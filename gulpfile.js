var gulp = require("gulp"),
	livereload = require("gulp-livereload");

gulp.task("reload", function(){
	// ����
	livereload.listen();
	// watch
	gulp.watch("**/*.*").on("change", function(event){
		livereload.changed(event.path);
	});
});