

const fs = require('fs');


let listadoPorHacer = [];

const guardarBD = () => {

    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

const cargarDB = () => {

    try{
        listadoPorHacer = require('../db/data.json');
        console.log (`recogido de data.jon ${listadoPorHacer[0]} y tiene ${listadoPorHacer.length}`);
    }
    catch(error){
        listadoPorHacer = [];   
    }
    
    
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);

    guardarBD();

    return porHacer;

}

const listar = () => {
    console.log('dentro listado por hacer');
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, terminado = true) => {
    
    console.log (descripcion);

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    console.log ('Index: ' + index + '-' + 'Terminado:' + terminado);
    console.log (index >= 0);
    if (index >= 0){
        console.log('dentro index');
        listadoPorHacer[index].completado = terminado;
        guardarBD(); 
        return true;
    }
    else
        return false;
}

module.exports = {

    crear,
    listar,
    actualizar
};