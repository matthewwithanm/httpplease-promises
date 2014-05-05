/*jshint strict:false*/

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            testserver: {
                options: {
                    hostname: 'localhost',
                    port: 4001,
                    server: './test/server'
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'Spec',
                    clearRequireCache: true,
                    grep: grunt.option('grep')
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            lib: {
                files: ['lib/**/*.js'],
                tasks: ['build:standalone']
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commit: true,
                commitFiles: ['-a'],
                createTag: true,
                push: false
            }
        }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-bump');

    // Define tasks.
    grunt.registerTask('test', ['runtestserver', 'mochaTest']);
    grunt.registerTask('runtestserver', ['express:testserver']);
};
