// ejercicio 1
/* for (let i=1; i<=10; i=i+1){
    console.log(i)
} */

//ejercicio 2

/* for (let i=2; i<=20; i=i+2){
    console.log(i)
} */

//ejercicio 3

/*  for (let i=1; i<=19; i=i+2){
    console.log(i)
} 
 */


// ejercicio 4

/* for (let i=10; i>=1; i=i-1){
    console.log(i)
}
 */

// ejercicio 5

/* for (let i=1; i<=10; i=i+1){
    if (i<=5) {
    console.log(i)}
} */

// ejercicio 6

/* for (let i=1; i<=10; i=i+1){
    if(i!=5){
        console.log(i)
    }
} */

// ejercicio 7
/* let nombre = prompt(`ingrese su nombre`)

function decirNombre (){
    alert(`hola ${nombre}`)
}

decirNombre() */

// ejercicio 8

/* let ingrese = prompt(`ingrese nombre`)

function saludar() 
{
    let nombre = `hola ${ingrese}` 
    return nombre
}

alert(saludar()) */

// ejercicio 9

/* let a=2
let b=5

function sumar(c,d){
    let suma = c+d
    return suma
}

console.log(sumar(6,5))
 */

// ejercicio 10 

/* function restar(a,b){
    let resta = a-b
    return resta
}

console.log(restar(10,8)) */

// ejercicio 11
/* 
function sumar(a,b){
    let suma = a+b
    return suma
}

function restar(a,b){
    let resta = a-b
    return resta
}




function calcular(operacion,a,b) {


    if (operacion == '+'){
        let resultado = sumar(a,b)
        return resultado
    }
    if (operacion == '-'){
        let resultado = restar(a,b)
        return resultado
    } else {
        let resultado = `null`
        return resultado
    } */
/* 
    return resultado */
/* 
}

console.log(calcular('+',8,7)) */

// ejercicio 12
/* 
function contarhasta(a) {
    for (let i=1; i<=a; i=i+1){
        console.log(i)
    }
}

contarhasta(12) */

// ejercicio 13

// Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

/* let pregunta = prompt('Desea usar la calculadora?')

function sumar(a,b){
    let suma = a+b
    return suma
}

function restar(a,b){
    let resta = a-b
    return resta
}

function calcular(operacion,a,b) {


    if (operacion == '+'){
        let resultado = sumar(a,b)
        return resultado
    }
    if (operacion == '-'){
        let resultado = restar(a,b)
        return resultado
    } else {
        let resultado = `null`
        return resultado
    }
}
while (pregunta =='SI')
    {
    let num1 = parseInt(prompt('Ingrese un numero'))
    let num2 = parseInt(prompt('Ingrese otro numero'))
    let operacion = prompt('Ingrese operacion')

    console.log(calcular (operacion,num1,num2))
    pregunta = prompt('Desea usar la calculadora?')
}

alert('El programa ha finalizado') */


// ejercicio 14 

// 14)hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no se ingresan valores por teclado.

/* let acumulador = 0

for(let i=1; i<=25; i++ ) {
    acumulador = acumulador+11
    console.log(i,acumulador)
}
 */

// ejercicio 15

// 15)hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.


/* function es_par (a) {
    return a%2 ==0
}

let pares =0
let impares =0

for (let i =1; i<=5; i++){

let num = parseInt(prompt(`Ingrese el numero ${i}`))


if(es_par(num)){
     pares = pares+1
} else {
    impares = impares+1
}
}
console.log(`los numero pares son: ${pares} y los impares: ${impares}`)
 */


// ejercicio 16

// 16)hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 
/* 
function promedio(a){
    return a/5
}

let suma =0

for (let i =1; i<=5; i++){

    let num = parseInt(prompt(`Ingrese altura ${i}`))
    suma = suma + num
}
console.log(promedio(suma)) */

// ejercicio 17

/* 17)Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

 */

/* let edadtm = 0
let edadtt = 0
let edadtn = 0

for(let i = 1; i<=5; i++){
    edadtm = edadtm + parseInt(prompt(`ingrese edad del alumno numero ${i} del turno mañana`))
}
let promedio_tm = edadtm/5
console.log(`El promedio del turno mañana es ${promedio_tm}`)

for(let i = 1; i<=6; i++){
    edadtt = edadtt + parseInt(prompt(`ingrese edad del alumno numero ${i} del turno tarde`))
}
let promedio_tt=edadtt/6
console.log(`El promedio del turno tarde es ${promedio_tt}`)

for(let i = 1; i<=11; i++){
    edadtn = edadtn + parseInt(prompt(`ingrese edad del alumno numero ${i} del turno noche`))
}
let promedio_tn=edadtn/11
console.log(`El promedio del turno noche es ${promedio_tn}`)

if(promedio_tm > promedio_tt && promedio_tm > promedio_tn){
    console.log(`El turno con mayor promedio de edad es el de la mañana`)
} else {
    promedio_tt > promedio_tn ? console.log(`El turno con mayor promedio de edad es el de la tarde`) : console.log(`El turno con mayor promedio de edad es el de la noche`)
} */

// Ejercicio 17 con funcion

/* 17)Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

 */

/* function promedio(a,b) {
    return a/b
}

let edad_tm=0
let edad_tt=0
let edad_tn=0

for (let i =1; i<=5; i++){
    let edad_individual = parseInt(prompt(`Ingrese edad del alumno numero ${i} del turno mañana`))
    edad_tm = edad_individual + edad_tm
}
let promedio_m = promedio(edad_tm,5)
console.log(`El promedio del turno mañana es ${promedio_m}`)

for (let i =1; i<=6; i++){
    edad_individual = parseInt(prompt(`Ingrese edad del alumno numero ${i} del turno tarde`))
    edad_tt = edad_individual + edad_tt
}
let promedio_t = promedio(edad_tt,6)
console.log(`El promedio del turno mañana es ${promedio_t}`)

for (let i =1; i<=11; i++){
    edad_individual = parseInt(prompt(`Ingrese edad del alumno numero ${i} del turno noche`))
    edad_tn = edad_individual + edad_tn
}
let promedio_n = promedio(edad_tn,11)
console.log(`El promedio del turno mañana es ${promedio_n}`)

if(promedio_m > promedio_t && promedio_m > promedio_n){
    console.log(`El turno con mayor promedio de edad es el de la mañana`)
} else {
    promedio_t > promedio_n ? console.log(`El turno con mayor promedio de edad es el de la tarde`) : console.log(`El turno con mayor promedio de edad es el de la noche`)
}  */

// ejercicio 18

/* 18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.
 */

/* let cantidad_neg=0
let cantidad_pos=0
let cantidad_15=0
let suma_pares=0

for (let i=1; i<=10; i++){
    let valor=parseInt(prompt(`Ingrese el valor del numer ${i}`))
    if(valor<0){
        cantidad_neg=cantidad_neg+1
    }
    if(valor>0){
        cantidad_pos=cantidad_pos+1
    }
    if(valor%15==0){
        cantidad_15=cantidad_15+1
    }
    if(valor%2==0){
        suma_pares=suma_pares+valor
    }
}

console.log(`La cantidad de numeros negativos ingresados es:${cantidad_neg}`)
console.log(`La cantidad de numeros positivos ingresados es:${cantidad_pos}`)
console.log(`La cantidad de numeros multiplos de 15 ingresados es:${cantidad_15}`)
console.log(`El valor acumulado de los números ingresados que son pares es:${suma_pares}`) */

//Ejercicio 19

/* 19)hacer un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad. */

/* let equilatero=0
let isoseles=0
let escaleno=0

for (let i=1; i<=4; i++){
    let lado_a=parseInt(prompt(`Ingrese la medida del lado A del triangulo numero ${i}:`))
    let lado_b=parseInt(prompt(`Ingrese la medida del lado B del triangulo numero ${i}:`))
    let lado_c=parseInt(prompt(`Ingrese la medida del lado C del triangulo numero ${i}:`))
    if (lado_a==lado_b || lado_b==lado_c || lado_a==lado_c)
    {
        if (lado_a==lado_b && lado_b==lado_c){
            console.log(`El triangulo numero ${i} es equilatero`)
            equilatero=equilatero+1
        }
        else {
            console.log(`El triangulo numero ${i} es isoseles`)
            isoseles=isoseles+1
        }
    } else 
        {
            console.log(`El triangulo numero ${i} es escaleno`)
            escaleno=escaleno+1
        }
    }
console.log(`La cantidad de triangulos equilateros es: ${equilatero}
La cantidad de triangulos isoseles es: ${isoseles}
La cantidad de triangulos escalenos es: ${escaleno}`)

if(equilatero<isoseles && equilatero<escaleno) {
    console.log(`El triangulo con menor cantidad es el equilatero`)
} else {
    isoseles<escaleno ? console.log(`El triangulo con menor cantidad es el isoseles`) : console.log(`El triangulo con menos cantidad es el escaleno`)
} */

// ejercicio 20

/* 20)hacer una función que solicite la carga de dos enteros (primero el menor y luego el
    mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
    Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
    4 5 6 7 8 9 10 */

/* function mostrar_intermedios(a,b){
    while(a<=b){
        console.log(a)
        a=a+1
    }
}

let menor=parseInt(prompt(`Ingrese el numero menor`))
let mayor=parseInt(prompt(`Ingrese el numero mayor`))

mostrar_intermedios(menor,mayor)
 */
    
// ejercicio 21 

//21)Hacer una función que reciba tres enteros y retorne el promedio.

/* function promedio (){
    let num1=parseInt(prompt(`Ingrese el primer numero`))
    let num2=parseInt(prompt(`Ingrese el segundo numero`))
    let num3=parseInt(prompt(`Ingrese el tercer numero`))

    return (num1+num2+num3)/3
}
console.log(promedio()) */

//ejercicio 22

/* 22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su
suma. */

/* function suma () {
    let num1 = parseInt(prompt(`ingrese el primer numero`))
    let num2 = parseInt(prompt(`ingrese el segundo numero`))
    let num3 = parseInt(prompt(`ingrese el tercer numero`))
    let num4 = parseInt(prompt(`ingrese el cuarto numero`))
    let num5 = parseInt(prompt(`ingrese el quinto numero`))
    return num1+num2+num3+num4+num5
}

console.log(suma()) */

// ejercicio 23
/* 23)
hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de
exclamación al inicio y al final !¡
 */

/* function exclamación(palabra){
    return `!${palabra}!`
}

console.log(exclamación(`hola`)) */

//ejercicio 24 
/* 24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y
un apellido y devuelva un string con la unión de ambos valores

 */

/* function obtener_nombre_completo (nombre,apellido){
    return `${nombre} ${apellido}`
}

console.log(obtener_nombre_completo(`juan`,`perez`)) */

/* // ejercicio 25

25)Definí una función convertirHorasEnSegundos que reciba como argumento un número
de horas y devuelva la conversión a segundos de dicha cantidad de horas */

/* function convertir_horas_en_segundos (hs){
    return hs*3600
}
console.log(convertir_horas_en_segundos(3)) */

// ejercicio 26

/* 26)Definí una función generarEmail que reciba como argumentos dos string usuario y
dominio y el un string email con el formato usuario@dominio.com */

/* function generar_email (usuario,dominio){
    return `${usuario}@${dominio}.com`
}
console.log(generar_email(`fede`,`gmail`)) */

// ejercicio 27

/* 27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante
el siguiente mensaje:
● Ingresá una cantidad de grados Celsius
Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados
Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es:
{resultado} */


/* function celcius_farenheit(a){
    return `La conversion de ${a} grados celcius a farenheit es: ${(a*(9/5))+32}`
}

console.log(celcius_farenheit(prompt(`Ingresa una cantidad de grados celcius:`))) */

// ejercicio 28
/* 28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el
mensaje:
● Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el
recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje:
Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta}
hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
● a pie : 5 km/ hs
● bicicleta : 10 km/ hs
● auto : 50 km/hs */

/* let recorrido = prompt(`Ingresa la distancia del recorrido en km`)

console.log(`Para la distancia ${recorrido}km en bicicleta el tiempo de viaje es ${recorrido/10} hora/s, a pie ${recorrido/5} hora/s y en auto ${recorrido/50} hora/s `) */

// ejercicio 29

/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un
booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o
false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus
padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
puedeVerPelicula(12, true)
true
puedeVerPelicula(16, false)
true
puedeVerPelicula(18, true)
true */

/* function puede_ver_pelicula(edad,autorización){

    return edad>=15 || autorización
}

console.log(puede_ver_pelicula(12, false))
console.log(puede_ver_pelicula(12, true))
console.log(puede_ver_pelicula(16, false))
console.log(puede_ver_pelicula(18, true)) */

// ejercicio 30
/* 30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra
es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
esVocal('n')
false
esVocal('e')
true
 */
/* function es_vocal(letra){
    return letra==`a`|| letra==`e`||letra==`i`||letra==`o`||letra==`u`
}

console.log(es_vocal(`a`))
console.log(es_vocal(`n`))
console.log(es_vocal(`e`)) */