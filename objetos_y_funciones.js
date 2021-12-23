console.group('objeto Date')
    console.log(Date)
    let fecha= new Date()
    console.log("el objeto 'Date' devuelve",fecha)
    //obten el dia del mes
    let dia= fecha.getDate()
    console.log("'getDate' devuelve el dia del mes ->", dia)
    //obten el dai de la semana en formato de array
    let diaSemanal= fecha.getDay()
    console.log("'getDay' obtiene la posicion del dia de la semana en forma de Array->", diaSemanal)
    //obten el mes del año
    let mes= fecha.getMonth()
    console.log("'getMonth' obtiene el mes del año->", mes)
    //obten el año
    let año= fecha.getFullYear()
    console.log("'getFullYear' obtiene el año->", año)
    //obten la hora
    let hora= fecha.getHours()
    console.log("'getHours' obtiene el la hora en formato de 24 horas->", hora)
    //obten los minutos
    let minutes= fecha.getMinutes()
    console.log("'getMinutes' obtiene los minutos->", hora)
    //obten los segundos
    let seconds= fecha.getSeconds()
    console.log("'getSeconds' obtiene los segundos->", seconds)

    //metodos
    console.log(fecha.toString())
    //obtiene solo la fecha
    console.log(fecha.toDateString())
    //obtiene la fecha local
    console.log(fecha.toLocaleString())
    //fecha
    console.log(fecha.toLocaleDateString())
    //tiempo
    console.log(fecha.toLocaleTimeString())
    
    console.log(Date.now())




console.groupEnd()
console.group('objeto Math')

    console.log(Math)
    console.log(Math.PI)
    let abs= Math.abs(-3.1)
    let redondea= Math.round(7.6)

    let aleatorio= Math.round(Math.random()*1000)

    console.log(abs)
    console.log(redondea)
    console.log(aleatorio)
console.groupEnd()

/* let oR= true ||'la derecha es falsa'

console.log(oR) */
/* console.group('alert,confirm,promp')

    let alerta= alert('aviso o advertencia')
    let confirmacion= confirm('comfirmar?')
    let aviso= prompt('escribe algo')

    console.log(alerta)
    console.log(confirmacion)
    console.log(aviso)

console.groupEnd() */
console.group('expresiones regulares')

    let cadEjem= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore nostrum ea enim quas delectus, vel est quo pariatur nam necessitatibus, itaque iure iusto quam aperiam optio? Iure amet earum porro impedit, rem perspiciatis debitis similique consequuntur vero natus molestias sequi provident reiciendis modi exercitationem ratione at minus repellendus laboriosam possimus, atque tempore? Praesentium nobis porro quidem, dolorem id, est aperiam doloribus minima saepe ut in voluptatem. Saepe, consequatur a quo, vel tempore magnam maiores aspernatur non, quasi laborum blanditiis. Velit distinctio error enim voluptas saepe magni adipisci provident numquam quibusdam, cumque, vero, esse odio reiciendis? Atque, tenetur obcaecati! Aspernatur.'
    //expresion regular
    let expRg= /lorem/ig;

    console.log(expRg.exec(cadEjem))

console.groupEnd()

console.group('funciones anonimas autoejecutables')
    //cuerpo de FAA
    ((c) => {
            c.log('metodo clasico de FAA')

        })(console);
    //metodo de facebook de FAA
    !function(){
        console.log('metodo de facebook')
    }()        
console.groupEnd()