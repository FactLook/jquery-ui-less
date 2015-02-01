/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    build_dir: 'build',
    compile_dir: 'dist',

    app_files: {
        demodir: 'demo/',
        src: 'less/'
    },
    themes: {
        'standalone': 'themes/standalone.less',
        'default': 'themes/default.less',
        'slate': 'themes/slate.less',
        'cerulean': 'themes/cerulean.less',
        'superhero': 'themes/superhero.less',
        'flatly': 'themes/flatly.less',
    },

    test_files: {
        js: []
    },

    vendor_files: {
        js: [
            'vendor/jquery/dist/jquery.min.js'
        ],
        css: [],
        assets: []
    }
};
