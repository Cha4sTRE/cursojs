/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


function contar(){
    /* fraseContar= prompt('frase:') */
    total= fraseContar.length
    console.log(total)
}
/* 
const recortarTexto=()=>{
    fraseCortar=prompt('frase para cortar')
    if(isNaN(fraseCortar)){
        cortar=prompt('ancho a cortar')
        resultadoCortar= alert(fraseCortar.slice(0,cortar))
    }else{
        return alert('solo texto')
    }
} */
    

const separar= (s)=>{
    separarCadena= 'Oh brave new world that has such people in it.'
    result= separarCadena.split(s)
    console.log(result)
}
const repiteCadena= (F,R)=>{
    let repSalida= F.repeat(R);
    console.log(repSalida)
}

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const invertir= ()=>{
    textoInvertir= prompt('frase a invertir:');
   
    if(!textoInvertir) return alert('no hay texto');
    if(!isNaN(textoInvertir)) return alert('no es un texto');

    alert(textoInvertir.split('').reverse().join(''))
}

const palabrasRepetidas=()=>{
    let bPalabras= prompt('frase:').split(' ')
    let palabraAEncontrar= prompt('buscar palabra')
    console.log(bPalabras)
    //valida si existe o no una frase
    if(!bPalabras) return alert('no hay texto');
    //valida si es otro tipo de dato
    if(!isNaN(bPalabras)) return alert('no es un texto')
    //valida si se ingreso dato
    if(!palabraAEncontrar) return alert('no ingresaste la palabra clave');

    //index o posicision
    let i=0
    //cuenta las palabras repetidas
    let contador=0

    while(i!==-1){
        //si i no es igual a -1, indexOf busca
        i= bPalabras.indexOf(palabraAEncontrar,i)
        //la variable i y contador incrementa 1 vez si la condicion
        //es diferente de -1 (valor de retorno cuando no encuentra coincidencia)
        if(i!==-1){
            i++
            contador++
        }
    //re repite el bucle hasta que i sea igual a -1
    }
    alert(`la palabra "${palabraAEncontrar}" se repite ${contador}`)

}

const polindromo= ()=>{
    let primeFrase= prompt('frase:').toLowerCase()
    let fraInvertida= primeFrase.split('').reverse().join('')

    if(!primeFrase) return alert('no hay texto')
    if(!isNaN(primeFrase)) return alert('solo texto')

    (primeFrase === fraInvertida)
        ? alert(`la frase "${primeFrase}" es un polindromo. al revez es "${fraInvertida}"`)
        :alert('no es un polindromo')


}
 const eliminarPatron= (frase,patron)=>{
    (!frase)? console.warn('no ingresaste la frase')
        :(!patron)? console.warn('no ingresaste patron')
        :console.log(frase.replace(new RegExp(patron,'ig'),' '))
 }

 

 
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const numRandom= ()=> console.log(Math.round((Math.random()*100)+500))


const factorial= (n1=undefined)=>{
    if(typeof n1 !== 'number') return console.warn('se ermiten solo numeros')
    if(Math.sign === -1) return console.warn('console.warn no numeros negativos')

    let factorial=1
    for(i=n1;i>1;i--){
        factorial *=i
    }

    console.log(factorial)
}
factorial(8)

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const numeroPrimo= ()=>{
    numero=prompt('revisa si tu nuemero es primo:')

    if(!numero) return alert ('no ingresaste el numero');
    if(isNaN(numero)) return alert('solo numeros');
    if(Math.sign(numero)===-1) return alert('no numeros negativos');


    let divisible= false;
    for(i=2;i<numero;i++){
        if((numero%i)===0){
            divisible=true;
            break;
        }
    }

    return (divisible)
    ? alert(`el numero ${numero} no es primo`)
    :alert(`el numero ${numero} si es primo`)
}

const numeroPar=()=>{
    let numeroPar=prompt('numero par o inpar')

    if(!numeroPar) return alert('no ingreso dato')
    if(isNaN(numeroPar)) return alert('solo numeros')

    return ((numeroPar%2)===0)
    ? alert(`el numero ${numeroPar} es par`)
    : alert(`el numero ${numeroPar} es impar`)

}


const convertirGrados=(n=undefined,u=undefined)=>{
    if(n === undefined) console.warn('no has ingresado una valor de unidad')
    if(u === undefined) console.warn('no has ingresado una unidad')
    if(typeof n !== 'number')return console.warn('solo numeros')
    if(typeof u !== 'string' || !/(C|F)/.test(u)) return console.warn('el valor de unidad no es valido')

    if(u==='C'){
        return console.info(`${n}°C = ${n*(9/5)+32}°F`)
    }else if(u === 'F'){
        return console.info(`${n}°F = ${(n-32)*(5/9)}°C`)
    }

}



/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const binarioADecimal=(n=undefined,b=undefined)=>{
    if(n===undefined)return console.warn('no ingresaste un numero')   
    if(b===undefined)return console.warn ('no ingresaste la base')
    if(typeof n !== 'number')return console.warn('no ingresaste un numero')
    if(typeof b !== 'number' || !/(2|10)/.test(b))return console.warn('no ingresaste una base valida')

    if(b===2){
        return console.info(`el numero ${n} es ${parseInt(n,b)} en base 2 o decimal`)
    }else if(b===10){
        return console.info(`el numero ${n} es ${n.toString(b)} en base 2 o decimal`)
    }
}




const descuento=(valor,descuento=0)=>
    (descuento===0)
    ?console.warn('el descuento no es valido')
    :console.info(valor-((valor*descuento)/100))



const fechaPasada= (fecha=undefined)=>{
    if(fecha===undefined)return console.warn('no ingresaste nada')
    if(!(fecha instanceof Date))return console.warn('tipo de dato invalido')

    let year= new Date().getTime() - fecha.getTime();
    let yearInMilisecond= 1000*60*60*24*365;
    let result= Math.floor(year / yearInMilisecond);

    return (Math.sign(result)===-1)
        ?console.info(`faltan ${Math.abs(result)} años para ${fecha.getFullYear()}`)
        :(Math.sign(result)===1)
        ? console.info(`han pasado ${result} desde ${fecha.getFullYear()}`)
        : console.info(`estamos en ${fecha.getFullYear()}`)

}

fechaPasada(new Date(2004,1,20))

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const contarLetras=()=>{
    let frase= prompt('frase a analizar');

    if(!frase) return alert('no hay nada que analizar')
    if(!isNaN(frase))return alert('tipo de dato invalido')

    //contadores
    let vocales=0;
    let consonantes=0;

    for (const letras of frase) {
        if(/[aeiouáéíóúü]/i.test(letras)) vocales++
        if(/[BCDFGHJKLMNÑPQRSTVXZWY]/i.test(letras)) consonantes++;

    }
    alert(`la frase ${frase} tiene ${vocales} vocales y ${consonantes} consonantes`)
}



validaNombre=(nombre)=>{
    let valida= /^[a-zA-ZÑñáÁÉéÍíÓóÚu\s]+$/g.test(nombre)

    return (valida) ?console.info(`${nombre} si es un nombre valido`)
    :console.warn('no es un nombre valido')

} 

validaNombre('jeff3rsonc chautres')

validaCorreo=(email)=>{
    let expEmail=  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (expEmail) ?console.info(`${email} si es un correo valido`):console.warn('no es un correo valido')
}


/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const numElevados=(nums=undefined)=>{
    if(nums === undefined) return console.warn('no ingresaste nada')
    if(!(nums instanceof Array)) return console.warn('tipo de dato no valido')
    if(nums.length === 0) return console.warn('el array esta vacio')

    for (const numeros of nums) {
        if(typeof numeros !== 'number') return console.warn(`"${numeros}" no esta admitido`)
    }

    let elevadoCuadrado= nums.map(el=>el*el)

    return console.info(`arreglo original ${nums}. es ${elevadoCuadrado}`)
}

numElevados([1,2,3,4])

const NumMinMax=(arr=undefined)=>{
    if(arr === undefined) return console.warn('no ingresaste nada')
    if(!(arr instanceof Array)) return console.warn('tipo de dato no valido')
    if(arr.length === 0) return console.warn('el array esta vacio')

    for (const numeros of arr) {
        if(typeof numeros !== 'number') return console.warn(`"${numeros}" no esta admitido`)
    }
    console.info(`el mayor de ${arr} es : ${Math.max(...arr)}`)
    return console.info(`el menor de ${arr} es : ${Math.min(...arr)}`)
}



const filtrarNumeros= (nums=undefined)=>{
    if(nums === undefined) return console.warn('no ingresaste nada')
    if(!(nums instanceof Array)) return console.warn('tipo de dato no valido')
    if(nums.length === 0) return console.warn('el array esta vacio')

    for (let numeros of nums) {
        if(typeof numeros !== 'number') return console.warn(`"${numeros}" no esta admitido`)
    }

    return console.log({
        pares: nums.filter(numeros => numeros %2 === 0),
        impares: nums.filter(numeros => numeros %2 === 1)
    })

}



/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const ordenAcDesc= (dig=undefined)=>{
    if(dig === undefined) return console.error('no hoy ningun dato');
    if(!(dig instanceof Array)) return console.error('tipo de dato no valido');
    if(dig.length === 0) return console.error('el array esta vacio');
    for (let nums of dig) {
        if(typeof nums !== 'number') console.error(`el "${nums}" no es un numero`)
    }

    console.info({
        original: dig,
        asc: dig.map(el=>el).sort(),
        desc: dig.map(el=>el).sort().reverse()
    })
}



const eliminarDuplicados= (arr)=>{
    if(arr === undefined) return console.error('no hoy ningun dato');
    if(!(arr instanceof Array)) return console.error('tipo de dato no valido');
    if(arr.length === 0) return console.error('el array esta vacio');

    console.info({
        original: arr,
        sinDuplicados: 
        //arr.filter((value,index,self) => self.indexOf(value) === index)
        [...new Set(arr)]
    })
}

eliminarDuplicados((["x", 10, "x", 2, "10", 10, true, true]))

const promedio= (nums)=>{
    if(nums === undefined) return console.warn('no ingresaste nada')
    if(!(nums instanceof Array)) return console.warn('tipo de dato no valido')
    if(nums.length === 0) return console.warn('el array esta vacio')

    for (let numeros of nums) {
        if(typeof numeros !== 'number') return console.warn(`"${numeros}" no esta admitido`)
    }

    return console.info(nums.reduce((total,numeros,index,nums)=>{
        total+=numeros
        if(index === nums.length-1){
            return `el promedio de ${nums.join(' + ')} es ${total / nums.length}`
        }else{
            return total
        }
    }))
}
promedio([1,2,3,4,5,6,7,8,9,0])

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
        aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
        instancias de la clase de forma automatizada e imprime la ficha técnica 
        de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class peliculas{
    constructor({id,titulo,director,año,pais,generos,clasificacionIMBD}){
       this.id=id;
       this.titulo=titulo;
       this.director=director;
       this.año=año;
       this.pais=pais;
       this.generos=generos;
       this.clasificacionIMBD=clasificacionIMBD;
        
       this.validarIMDB(id)
       this.validaTitulo(titulo)
       this.validaDirector(director)
       this.validaElAño(año)
       this.paisOpaises(pais)
       this.validarGeneros(generos)
    }

    static get listGeneros(){
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
    }

    static generosAceptados(){
        return console.info(`los generos aceptados son: ${peliculas.listGeneros.join(',')}`)
    }

   validacionesStrings(propiedad,valor){
       if(!valor) return console.error(`${propiedad} esta vacio`)
       if(typeof valor !== 'string')  return console.error(`${propiedad} ${valor} no es un string`)

       return true
   }

   validaLongitud(propiedad,valor,longitud){
        if(valor.length>longitud) return console.error(`el ${propiedad} revasa el limite impuesto de ${longitud}`)

        return true
   }

   validaNumeros(propiedad,valor){
       if(!valor) return console.error(`el valor del año esta vacio`)
       if(typeof valor !== 'number') return console.error(`el valor:${valor}, no es un numero`)
   }
   validaArreglos(propiedad,valor){
       if(!valor) return console.error(`no se ha ingresado datos acerca de los ${propiedad}`)
       if(!(valor instanceof Array)) return console.error(`el valor "${valor}" no es un array`)
       if(valor.length === 0) return console.warn('esta vacio')
       for (let puestos of valor) {
           if(typeof puestos !== 'string') return console.error(`el valor ${puestos} no es permitido`)
       }

       return true
   }
   // validaciones especificas de cada iteracion
    //validacion para el id
    validarIMDB(id){
            if(this.validacionesStrings('IMBD id',id))
                if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMBD id:${id} invalido, debe tener 2 numeros y 7 letras`)
            
    }
    //validacion para la longitud del titulo
    validaTitulo(titulo){
        if(this.validacionesStrings('titulo',titulo))
            this.validaLongitud('titulo',titulo,100)
        
    }
    //validacion para longitis de director
    validaDirector(director){
        if(this.validacionesStrings('nombre del director',director))
            this.validaLongitud('director',director,50)
        
    }
    validaElAño(año){
        if(this.validaNumeros('año de estreno',año))
            if(!(/^([0-9]){4}$/.test(año)))return console.error(`el ${propiedad} no es valido`)
        
    }
    paisOpaises(pais){
       this.validaArreglos('pais',pais)    
    }
    validarGeneros(generos){
        if(this.validaArreglos('generos',generos)){
            for (let genero of generos) {
               if(!peliculas.listGeneros.includes(genero)){
                   console.info(`genero no enconrado "${genero}"`)
               }else{
                   console.info(`genero encontrado "${genero}"`)
               }
            }
        }
     }
}

const encanto= new peliculas({
    id: 'tt1234567',
    titulo: 'blade runner 2049',
    director: 'denis bunevle',
    año: 20163,
    pais:['colombia','EE.UU'],
    generos:['Action','Adult','romance']
})
