/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    build_dir: 'build',
    compile_dir: 'dist',

    app_files: {
        demodir: 'demo/',
        less: 'less/build.less'
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
