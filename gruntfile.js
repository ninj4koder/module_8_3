module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/main.sass'
        }
      }
    },

    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);

};
