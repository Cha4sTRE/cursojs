
console.group('TIPOS DE DATOS')

    console.group('variables')
    var global= 'su alcance es global y sufre el hoesting'
    console.log('"var"- no es recomendable declarar con var==', global);
    let bloque= 'su alcance no es global y es buena practica'
    console.log('"let"- se recomiendo usar let==', bloque)

    console.groupEnd()

    console.group('constantes')
    const pi= Math.PI;
    console.log('una constante no puede variar y siempre permanecera inmutable cuando guarda un dato. const pi=', pi)
    console.groupEnd()
    console.group('cadena de texto, numbers, booleam')
    let texto= 'se declara con comillas ejem="cadena de texto"'
    console.log(texto)
    let tempString=`los templates string permiten concatenas resultados de otra funcion o lo q sea.`
    console.log(tempString, 'ejem= `se declara con comillas curvas` ')
    let number='son todos los simbolos del sistema decimal, o numeros decimales'
    console.log('numbers', number)
    let booleam= 'son false o true. 1 es true, 0 es false'
    console.log('booleam', booleam)
    
    console.groupEnd()

    console.group('funciones')
    //funcion declarada
    function funcDEclarada(){
        console.log('soy una funcion declarada y si puede ser invocada antes de la funcion')
    }
    funcDEclarada()
    console.log('-------------------------------------------')
    function ejemp(nombre='no declarado',apellido='no declarado',edad='no declarado'){
        console.log(`holo mi nombre es "${nombre}" "${apellido}" y tengo "${edad}" años`)
    }
    ejemp('jefferson');
    console.log('-------------------------------------------')
    //funcion expressada
    const FuncionExprexada= function(){
        console.log('esto es una f expresada que no puede ser invocada antes de la funcion')
    }
    FuncionExprexada()
    console.groupEnd()

    console.group('ARRAYS')
    let def='un arreglo es una coleccion de cualquier typo de datos'
    const arreglo=[1,2,3,4,5,['juan','jeffer','mario','pepe']]
    console.log(def, arreglo)
    console.log('un arreglo empieza por 0',arreglo[5])
    console.log(arreglo[5][0],'<= posicion 0')

    let newForm= Array(7).fill('hola')
    newForm.push('adios')
    console.log(newForm)

    console.groupEnd()
    console.group('objetos')

    const odjPresentation={
    nombre: 'jefferson',
    apllido:'chaustre',
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
    console.log(odjPresentation.definicion())
    console.log(Object.keys(odjPresentation))
    console.log(Object.values(odjPresentation))
    odjPresentation.saludar()
    console.groupEnd()

console.groupEnd()