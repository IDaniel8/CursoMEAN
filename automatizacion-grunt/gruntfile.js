module.exports = function(grunt) {

    let configuration = {

        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"],
                tasks: ["uglify"],
                option: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['./*.js'],
                dest: '<%= pkg.name %>.todo.js'
            }
        }
    };

    grunt.initConfig(configuration);
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('comprime',['uglify']);
    grunt.registerTask('build',['concat']);
    grunt.registerTask('default',['watch']);

    function enUnCambio(accion, rutaFichero, destino){
        grunt.log.writeln(detino+": "+rutaFichero+" tiene "+accion);
    }

    grunt.event.on("watch", enUnCambio);

};