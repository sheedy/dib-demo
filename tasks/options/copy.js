module.exports = {

	// Copy files and folders
	// https://github.com/gruntjs/grunt-contrib-copy

	// Build
	pre_concat: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>',
				dest: '<%= temp %>',
				src: [
					'js/**/*.js',
					'bower_components/**/*.js'
				]
			}
		]
	},

	post_concat: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>',
				dest: '<%= build %>',
				src: [
          '<%= temp %>/**/*.html',
					'*.{ico,png}',
          '!fonts/*.css',
          'fonts/*',
					'.htaccess',
					'images/**/*.{png,gif,jpg,jpeg,svg}'
				]
			}
		]
	},

	// Server/livereload
	server: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>',
				dest: '<%= temp %>',
				src: [
					'js/**/*.js',
					'images/**/*',
          '!fonts/*.css',
          'fonts/*'
				]
			}
		]
	},

	js: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>',
				dest: '<%= temp %>',
				src: ['js/**/*.js']
			}
		]
	},

	images: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>/images',
				dest: '<%= temp %>/images',
				src: [ '{!(svg-src),!(svg-build),**}/**' ]
			}
		]
	},

	svg_build: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: '<%= src %>/images/svg-build/png/',
				dest: '<%= temp %>/images/svg-build/png/',
				src: [ '*.png' ]
			}
		]
	},

	bower_components: {
		files: [
			{
				expand: true,
				dot: true,
				cwd: 'vendor/bower_components',
				dest: '<%= temp %>/bower_components',
				src: [ '**/*.js', '**/*.css' ]
			}
		]
	}

}
