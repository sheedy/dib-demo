module.exports = {

	// Static file generation from Handlebars templates
	// http://assemble.io/docs/

	options: {
		flatten: true,
		assets: '<%= temp %>',
		data: [
			'<%= src %>/data/*.json'
		],
		partials: [
			'<%= src %>/content/partials/**/*.hbs',
			'<%= src %>/content/layouts/*.hbs'
		],
		layoutdir: 'src/content/templates',
		layout: "default.hbs",
	},

	// Splitting the targets below don't allow for the dynamic status page list
	// From the docs (http://assemble.io/docs/Collections.html):
	// For any given collection, only items found in the [current target] will be added to the collection by Assemble.
	// For example, if we wish to render a list of all of the pages in the pages collection, we will only see the pages in the "current target".

	// All pages
	server: {
		files: {
			'<%= temp %>/': '<%= src %>/content/pages/*.hbs'
		}
	}

}
