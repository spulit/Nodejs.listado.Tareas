let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

let completado = {
    default : true,
    alias: 'c',
    desc : 'Marca como completado o pendiente la tarea'

};

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                    descripcion
                })
            .command('actualizar', 'Actualiza un elemento por hacer', {
                descripcion,
                completado
            })
           .help()
            .argv;

module.exports = {
    argv
}