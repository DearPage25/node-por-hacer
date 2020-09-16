const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        
    });

}

const cargarDB = () => {
    
    try {

      listadoPorHacer = require('../db/data.json')
        
    } catch (error) {

      listadoPorHacer = [];
    
    }

}






const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();
    return porHacer;
}

const getListado = (completado) => {
    cargarDB()

    if(completado == null) {
        return  listadoPorHacer;
    }  

    let listadoCompletado = listadoPorHacer.filter(tarea => {
        return tarea.completado === completado;
    })

    return listadoCompletado;

}



const actualizar = (descripcion, completado = true ) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });
    
    if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    //alternativa A
    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !=  descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

    ///alternativa B

    // let index = listadoPorHacer.findIndex( tarea => {
    //     return tarea.descripcion === descripcion;
    // })

    // if ( index >= 0 ) {
    //     listadoPorHacer.splice(index, 1)
    //     guardarDB();
    //     return true;
    // } else {
    //     return false;
    // }

    

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}