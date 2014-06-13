module.exports = function(grunt) {

	grunt.registerTask('server', [
		'clean:server',
		'concurrent:server',
		'grunticon',
    'autoprefixer:server',
		'copy:server',
    'copy:bower_components',
		'connect:livereload',
		'open:server',
		'watch'
	]);

}