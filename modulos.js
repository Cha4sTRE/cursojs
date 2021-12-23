import persona from './modulos/persona.js'
import {presentacion,mascotas} from './modulos/listas.js'


class generoDePersona extends persona{
    constructor(sexo,edad,raza,religion,etnia,nacionalidad, identidad, genero){
        super(sexo,edad,raza,religion,etnia,nacionalidad);

        this.identidad=identidad;
        this.genero=genero;

    }
    caracteristicas(creencia){
        console.log(`este tipo de personas suelen ser adolecentes, son libres en su manera de elegir sus gustos, o intereses, y algunos creen en los ${creencia}`)
    }
}



const colombiano= new persona('masculino','18','blanco','ateo','ninguna','colombiano')
const pNoBinaria= new generoDePersona('femenino',16,'blanca','atea','ninguna','colombiana','trans','bisexual')





console.log(`mi nombre es ${presentacion.nombre} ${presentacion.aprllido}, tengo ${presentacion.edad}`,)
console.log(colombiano)
console.log(pNoBinaria)
pNoBinaria.caracteristicas('horoscopos')
colombiano.necesidades('agua','comida')

