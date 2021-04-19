const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion e la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente'

};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion e la tarea por hacer'
        // }
    }).command('actualizar', 'Actualizar el listado completado Tarea', {
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion en la tarea por hacer'
        // },
        // completado: {
        //     default: true,
        //     alias: 'c',
        //     desc: 'Marca como completado o pendiente'


        // }
        descripcion,
        completado

    })
    .command('borrar', 'borrada una tarea', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Borrado'
        // }
    })

.help()
    .argv;

module.exports = {
    argv
}