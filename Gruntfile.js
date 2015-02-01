module.exports = function ( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-gh-pages');

    var userConfig = require( './build.config.js' );

    var taskConfig = {
        pkg: grunt.file.readJSON("package.json"),
        filename: '<%= pkg.name %>-<%= pkg.version %>',
        default_locale: 'en',

        meta: {
            banner:
            '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Dual-licensed under the MIT and GPL-2.0 licenses.\n' +
                ' */\n'
        },

        bump: {
            options: {
                files: [
                    "package.json",
                    "bower.json"
                ],
                commit: true,
                commitMessage: 'release v%VERSION%',
                commitFiles: [
                    "package.json",
                    "bower.json"
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        },

        clean: {
            build: [
            '<%= build_dir %>'
            ],
            compile: [
            '<%= compile_dir %>'
            ],
            docs: [
            '<%= build_dir %>/docs'
            ],
        },

        copy: {
            compile_compressed: {
                files: [
                    {
                        src: [ '<%= filename %>.min.*' ],
                        dest: '<%= compile_dir %>/',
                        cwd: '<%= build_dir %>/',
                        expand: true
                    }
                ]
            },
            compile_uncompressed: {
                files: [
                    {
                        src: [ '<%= filename %>.*' ],
                        dest: '<%= compile_dir %>/',
                        cwd: '<%= build_dir %>/',
                        expand: true
                    }
                ]
            },
            compile_vendorjs: {
                files: [
                    {
                        src: [ '**/*.js' ],
                        dest: '<%= compile_dir %>/vendor',
                        cwd: 'bower_components/jquery/dist/',
                        expand: true
                    }
                ]
            },
            build_demo: {
                files: [
                    {
                        src: [ 'index.html' ],
                        dest: '<%= build_dir %>/',
                        cwd: '<%= app_files.demodir %>',
                        expand: true
                    },
                    {
                        src: [ '**/*.*' ],
                        dest: '<%= build_dir %>/assets',
                        cwd: '<%= app_files.demodir %>/assets/',
                        expand: true
                    },
                    {
                        src: [ 'fonts/*.*' ],
                        dest: '<%= build_dir %>/assets',
                        cwd: 'bower_components/bootstrap/dist/',
                        expand: true
                    }
                ]
            }
        },

        concat: {
        },

        less: {
            build: {
                files: {
                    '<%= build_dir %>/<%= filename %>.css': '<%= themes.standalone %>',
                    '<%= build_dir %>/assets/css/default.css': '<%= themes.default %>',
                    '<%= build_dir %>/assets/css/slate.css': '<%= themes.slate %>',
                    '<%= build_dir %>/assets/css/superhero.css': '<%= themes.superhero %>',
                    '<%= build_dir %>/assets/css/flatly.css': '<%= themes.flatly %>',
                    '<%= build_dir %>/assets/css/cerulean.css': '<%= themes.cerulean %>'
                }
            },
            compile: {
                files: {
                    '<%= build_dir %>/<%= filename %>.min.css': '<%= themes.default %>'
                },
                options: {
                    cleancss: true,
                    compress: true
                }
            }
        },

        delta: {
            options: {
                livereload: true
            },

            gruntfile: {
                files: 'Gruntfile.js',
                options: {
                    livereload: false
                }
            },

            less: {
                files: [ 'themes/*.less', 'less/*.less' ],
                tasks: [ 'less:build' ]
            },
            demo: {
                files: [ '<%= app_files.demodir %>/**/*.*' ],
                tasks: [ 'copy:build_demo' ]
            }
        },
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['**']
        },
    };

    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    grunt.renameTask( 'watch', 'delta' );
    grunt.registerTask( 'watch', [ 'build', 'delta' ] );

    grunt.registerTask( 'default', [ 'build', 'compile' ] );

    grunt.registerTask( 'build', [
        'clean:build', 'less:build',
        'copy:build_demo'
    ]);

    grunt.registerTask( 'compile', [
        'clean:compile', 'less:compile', 'copy:compile_compressed'
    ]);
};
