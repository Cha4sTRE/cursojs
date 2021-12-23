
console.log('inicio de setTimeout')

//setTimeout resive una funcion que ejecuta DESPUES de un sierto tiempo
setTimeout(() => {
    console.log('despues de tres segundos')
}, 3000)//tiempo expresado en milisegundos

//setInterval ejecuta una funcion cada intervalo de tiempo
let tiempo= setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearInterval(tiempo)