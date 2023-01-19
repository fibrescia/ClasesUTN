// comentario en una sola linea

/* comentario en mas
de una linea */

//variables
//tipos de datos (numericos, cadena de caracteres (strings o palabras), valores logicos (true y false o 0 y 1),)

/* var numero_ejm = 60

let palabras = 'pedro'

const numero_pi = 3.1416

let es_nuevo = true

let numero = 63

let nuevo_numero = 0

nuevo_numero = numero

console.log ('este es ek vakir qye tuebe ka ultima variabe', nuevo_numero) */
/* 
let nombre = 'juan pedro'
let edad = 36
let estado_civil = 'casado'
let sabe_programar = false

console.log ('tu nombre es ', nombre ,'y tu edad es ', edad, 'años', 'y tu estado civil es ', estado_civil)
console.log ('tu nombre es '+ nombre +'y tu edad es '+ edad+'años'+ 'y tu estado civil es '+ estado_civil)

//template string

console.log(`tu nombre es ${nombre} y tu edad es ${edad} años y tu estado civil es ${estado_civil}`) */

//entrada de datos

/* prompt('ingrese su nombre') //esta en desuso  */
/* 
let numero1 = 0
console.log('el valor es del tipo',typeof(numero1))

let numero2 = 0

numero1 = parseInt(prompt('ingrese num 1'))
console.log('el valor es del tipo',typeof(numero1))
numero2 = parseInt(prompt('ingrese num 2'))

let resultado_multi = numero1*numero2
let resultado_div = numero1/numero2
let resultado_suma = numero1 + numero2

console.log(resultado_suma) */

//estructura condiciona simple o compuesta

/* if (condicion){

    si conndicion es verdero hace esto
} else {

    si condicion es falso hace esto
} */
// no siempre tiene que haber un else, se llama estructura de condicion simple o compuesta


// operador ternario (se usa solo para estructuras condicionales compuestas)

let nota = parseInt(prompt('ingrese la nota del alumno'))

nota>=5 ? console.log('el alumno esta aprobado') : console.log('el alumno no aprobo')
