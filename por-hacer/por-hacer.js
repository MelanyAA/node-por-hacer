const fs = require('fs');

let ListadoporHace = [];



const guardarDB = () => {

    let data = JSON.stringify(ListadoporHace);


    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw err;
        console.log('Datos Guardados');
    });

    console.log(data);

}


const actualizar = (descripcion, completado = true) => {

    CargarDB();

    let index = ListadoporHace.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {

        ListadoporHace[index].completado = completado;

        guardarDB();
        return true;
    } else {
        return false;
    }

}


const CargarDB = () => {

    try {
        ListadoporHace = require('../db/data.json');
    } catch (error) {
        ListadoporHace = [];
    }


    // console.log(ListadoporHace);

}

const crear = (descripcion) => {

    CargarDB();

    let porhacer = {
        descripcion,
        completado: false,
    };

    ListadoporHace.push(porhacer);

    guardarDB();

    return porhacer;

}

const getListar = () => {
    CargarDB();
    return ListadoporHace;
}


const borrar = (descripcion) => {

    CargarDB();

    let elimina = ListadoporHace.filter(map => {

        return map.descripcion !== descripcion;
    });
    //console.log(elimina);
    if (ListadoporHace.length === elimina.length) {

        return false;

    } else {

        ListadoporHace = elimina;

        CargarDB();

        return true;
    }

}

module.exports = {

    crear,
    getListar,
    actualizar,
    borrar
}