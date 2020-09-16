const { boolean } = require('yargs');

let descripcion = {
        demand: true,
        default: '',
        alias: 'd',
        desc: 'Descripcion por la tarea por hacer'
}

const completado = {
    type: 'boolean',
    alias: 'c',
    desc: 'Marcar como completado una tarea'
}

const argv = require('yargs')
                .command('crear', 'Genera una tarea nueva', {descripcion})
                .command('actualizar', 'Actualiza una tarea ya existente', {descripcion})
                .command('borrar', 'Borrar una tarea ya existente', {descripcion})
                .command('listar', 'trae todas las tareas por hacer, si usa --completado traera aquellas tareas completas', 
                ( completado != null) ? {completado} : null )
                .help()
                .argv;

module.exports = {
    argv
}


// comando crear --descripcion -d
// comando actualizar --descripcion -d --completado -c= true
//--help