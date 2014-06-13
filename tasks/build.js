module.exports = function(grunt) {

	grunt.registerTask('build', [
		'clean:build',
		'assemble:server',
		'sass:server',
		'copy:pre_concat',
		'grunticon',
		'useminPrepare',
		'concurrent:build',
		'concat',
		'copy:post_concat',
		'usemin',
		'replace', // hack to make up for usemin's inability to resolve relative paths
		'prettify:all',
		'open:build'
	]);

}