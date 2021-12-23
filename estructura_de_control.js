//condicionales
//if-else
console.group('CONDICIONALES')
    let prueba=1
    if(prueba<=10){
        console.log('if-else es una estructura de control que devuelve un resultado al cumplirse cierta condicion')
    }else{
        console.log('no cumple la condicon')
    }

    //ejemplo de if anidados
    /*
    madrugada: 12-5 
    mañana:6-12
    tarde:12-19
    noche:19-24*/
    horaActual= 22;
    if(horaActual>=6 && horaActual<=12){
        console.log('buenos dias')
    }else if(horaActual>=12 && horaActual<=19){
        console.log('buenas tardes')
    }else if(horaActual>=19 && horaActual<=24){
        console.log('buenas noches')
    }else{
        console.log('vete a dormir')
    }
    //operador ternario
    //se cumple en una sola linea de codigo
    let edad=18
    let permiso=(edad>=18)?'eres mayor':'eres menor'
    console.log(permiso)

    //swict case
    let casos=3
    switch (casos) {
        case 1:
            console.log('es 1')
            break;
         case 2:
            console.log('es 2')
            break;
         case 3:
            console.log('es 3')
            break;
        default:
            break;
    }
    
console.groupEnd()

console.group('CICLOS')
    /*while y do-while */
   /*  let condicion=1
    while(condicion<=10){
        console.log(condicion)
        condicion++
    }

    do {
        console.log(condicion)
        condicion++
    } while (condicion>12); */
    //ciclo for

    for (let index = 1; index <= 10; index++) {
        console.log(index)
        
    }
    
    const odjPresentation={
        nombre: 'jefferson',
        apellido:'chaustre',
        edad:17,
        campo:'computacion',
        definicion:function(){
            defObjeto='a un adjeto sus variables se les llama atributos, y a sus funciones se les llama metodos'
            console.log(defObjeto)
        }, 
        saludar: function(){
            console.log(`hola mi nombre es ${this.nombre} ${this.apllido} y tengo ${this.edad}, y me gusta la ${this.campo}`)
        }
        }
    console.log('--------------destructuracion---------------------------------')

    const {nombre,apellido,saludar} =odjPresentation
    console.log(saludar())

    console.log('--------------iterar con for---------------------------------')
    //forma alternativa de iterar sin una funcion de un array(forEach)
    const arreglo=[1,2,3,4,5,['juan','jeffer','mario','pepe']]
    for(let i=0;i<arreglo.length;i++){
        if(i===4){
            break
        }
        console.log(arreglo[i])
        
    }
    console.log('--------------for in---------------------------------')
    for (const nombres in odjPresentation) { //for in permite iterar las propiedades de un objeto
        console.log(`keys: ${nombres} value: ${odjPresentation[nombres]}`)
    }

   
    let palabra='hola hijos de diosito'
    console.log('--------------for of---------------------------------')
    
    for (const caracter of palabra) {    //permite iterar cualquier objeto dejs. que sea iterable
        console.log(caracter)
    }

    console.log('--------------try-catch-finaly---------------------------------')
    

    try {    
        let ee= 'hola'                  //estructura de manejo de errores
        if(isNaN(ee)){
            throw new Error('no es un numero')
        }
    console.log('es un numero') 
    } catch (error) {
        console.log(`se produjo es siguiente error ${error}`)
    }
console.groupEnd()
