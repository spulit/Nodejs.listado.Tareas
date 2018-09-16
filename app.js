

const argv = require('./config/yargs').argv;
const color = require('colors');

const porHacer  = require ('./por.hacer/por.hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

    break;
    
    case 'listar':

        let listado = porHacer.listar();
        for (let tarea of listado ){
            // console.log('===================');
            console.log('== Listado Tareas =='.green);
            console.log(`${tarea.descripcion}`);
            console.log(tarea.completado);
            console.log('==================='.green);

        }
        console.log('listar');
    break;

    case 'actualizar':
        
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado); 
        console.log (actualizado);
    break;

    default:
        console.log('No se reconoce comando.')

}