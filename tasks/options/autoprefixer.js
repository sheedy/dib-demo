module.exports = {

  server: {
      files: {
        '<%= temp %>/css/styles.css': '<%= temp %>/css/styles.sass.css'
      }
  },

  build: {
      files: {
        '<%= build %>/css/styles.css': '<%= build %>/css/styles.sass.css'
    }
  }
}
