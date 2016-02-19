module.exports = function(grunt){
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    babel : {
      options : {
        sourceMap : true,
        presets: ['es2015']
      },
      dist : {
        files : [{
          expand: true,
          src: ['./src/*.js'],
          dest: 'dist',
          ext: ".js"
        }]
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
}
