module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'styles/style.css': 'styles/style.sass'
        }
      }
    },

  jshint: {
    all: ['js/*.js']
  } 

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint']);
};