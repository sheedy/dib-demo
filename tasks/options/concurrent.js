module.exports = {

	// Run grunt tasks concurrently
	// https://github.com/sindresorhus/grunt-concurrent

	server: [
		'sass:server',
		'assemble:server'
	],
	build: [
		// 'compass',
		// 'sass:build',
		'imagemin',
		'htmlmin'
	]
}
