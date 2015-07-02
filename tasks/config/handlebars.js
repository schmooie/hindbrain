module.exports = function(grunt) {
  grunt.config.set('handlebars', {
    dev: {
      files: {
        '.tmp/public/templates.js': require('../pipeline').templateFilesToInject
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
}