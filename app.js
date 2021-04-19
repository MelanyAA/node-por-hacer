//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const color = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listad = porHacer.getListar();

        for (let tarea of listad) {
            console.log('===================='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('===================='.green);


        }
        break;

    case 'actualizar':


        let actua = porHacer.actualizar(argv.descripcion, argv.comando);
        console.log(actua);
        break;

    case 'borrar':
        let elim = porHacer.borrar(argv.descripcion);
        console.log(elim);

        break;

    default:
        ('El comando no es reconocido');

}