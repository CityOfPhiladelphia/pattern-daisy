module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.config("copy", {
    css: {
      files: [
        // to source, for patternlab compilation
        {expand: true, cwd: "../../tmp/css/", src: "*", dest: "www/source/css/", filter: 'isFile'},
        // to public, for when patternlab compilation is not necessary
        {expand: true, cwd: "../../tmp/css/", src: "*", dest: "www/public/css/", filter: 'isFile'}
      ]
    }
  });
};
