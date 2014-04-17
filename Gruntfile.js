module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    paths: {
                        'jquery': 'src/vendors/jquery/dist/jquery',
                        'can': 'src/vendors/canjs/amd/can',
                        'underscore': 'src/vendors/underscore/underscore',
                        'moment': 'src/vendors/momentjs/moment',
                        text: "src/vendors/requirejs-text/text",
                    },
                    baseUrl: ".",
                    name: 'src/vendors/almond/almond.js',
                    include: "src/main.js",
                    out: "js/main.js",
                    optimizeAllPluginResources: true,
                    optimize: 'none'
                }
            }
        },
        less: {
            production: {
                files: {
                    'css/style.css': ['src/less/style.less']
                }
            }
        },
        // concat: {
        //     dist: {
        //         src: [
        //             'css/style.css',
        //             'src/vendors/jqueryui/themes/base/jquery-ui.css',
        //             'src/vendors/jqueryui/themes/<%= pkg.theme %>/jquery-ui.theme.css'
        //         ],
        //         dest: 'css/style.min.css'
        //     }
        // },
        // copy: {
        //     css: {
        //         files: [{
        //             expand: true,
        //             flatten: true,
        //             src: 'src/vendors/jqueryui/themes/base/images/*',
        //             dest: 'css/images'
        //         }, {
        //             expand: true,
        //             flatten: true,
        //             src: 'src/vendors/jqueryui/themes/<%= pkg.theme %>/images/*',
        //             dest: 'css/images'
        //         }, {
        //             expand: true,
        //             flatten: true,
        //             src: 'src/images/*',
        //             dest: 'img'
        //         }]
        //     }
        // },
        watch: {
            requireBuild: {
                files: ['Gruntfile.js', 'src/main.js', 'src/js/**/*.js',
                    'src/js/**/*.mustache'
                ],
                tasks: ['requirejs']
            },
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['watch', 'requirejs', 'less']);
    grunt.registerTask('build', ['requirejs', 'less']);



};