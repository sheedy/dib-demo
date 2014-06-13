module.exports = {

	// Grunt task to compile Sass SCSS to CSS
	// https://github.com/gruntjs/grunt-contrib-sass

  options: {              // Target options
    precision: 6,
    trace: false,
    noCache: false,
    cacheLocation: '<%= temp %>/.sass-cache',
    loadPath: ["vendor/bower_components"],
    // require: "susy",
    bundleExec: true,
    quiet: true,
    // banner: "/* Test banner */", // Can't be used if you use the sourcemap option.
  },

	// Save to .sass.css for autoprefixer
    server: {
      options: {              // Target options
        style: 'expanded', // nested | compact | compressed | expanded
        sourcemap: false,
        debugInfo: false,
        lineNumbers: false,
      },
      files: [
        {
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: '<%= temp %>/css',
          ext: '.sass.css'
        },
        {
          expand: true,
          cwd: 'src/_project/css',
          src: ['*.scss'],
          dest: '<%= temp %>/_project/css',
          ext: '.sass.css'
        }
      ]
    },

    // Turn on sourcemaps
    debug: {               // Target
      options: {              // Target options
        style: 'expanded', // nested | compact | compressed | expanded
        sourcemap: true,
        debugInfo: true,
        lineNumbers: true,
      },
      files: [
        {
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: '<%= temp %>/css',
          ext: '.sass.css'
        },
        {
          expand: true,
          cwd: 'src/_project/css',
          src: ['*.scss'],
          dest: '<%= temp %>/_project/css',
          ext: '.sass.css'
        }
      ]
    }

}
