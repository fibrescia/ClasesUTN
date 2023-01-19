//while (estructura repetitiva)

/* let x = 0

while(x<=10) {
    //si la condicion es true esta linea se ejecuta y vuelve al while, sino salta la estructura
    console.log(x)
    x = x+1 //es un contador
} */

//concepto del acumulador

/* let x=1
let suma=0

while(x<=5){

    let valor = parseInt(prompt('ingrese un valor'))
    suma=suma+valor
    console.log(valor)
    x=x+1

}
console.log(`el valor de la suma de los numeros ingresados es ${suma}` ) // escribir de esta forma es una buena practica */

// ciclo repetitivo for

/* for(inicializacion; condicion; incremento o decremento) {
// ejecuta el codigo si lo que esta dentro de los () se cumple
} */

/* for(let i=0; i<=10; i=i+1){
    console.log(i)
} */

//programa que me pida ingresar 10 num y me muestre la suma de los ultimos 5
/* let suma=0
for(let i=0; i<=9; i=i+1)
{
    let valor = parseInt(prompt('ingrese un valor'))
    if(i>=5){
        suma=valor+suma
        console.log(suma)
    }
}

console.log(`la suma de los ultimos 5 nunmeros es ${suma}`) */

//funciones (3 pasos)

//1) declaracion de funcion

/* mostrar_mensaje()

//funcion nombrada (en una funcion nombrada no importa si llamo a la funcion antes de definirla)
function mostrar_mensaje(){
    console.log(`hola mundo`)
}//sintaxis basica de una funcion

/* mostrar_mensaje()
mostrar_mensaje() */

//funcion que retorna un valor


function calcular_tabla(){

    let resultado = 0
    let i=1
    let palabra = ''
    let valor=parseInt(prompt(`Iingrese un valor para mostrar tabla de multiplicar`))

    for(i=1; i<=10; i=i+1){
        resultado=i*valor
/*         console.log(`${valor}*${i}=${resultado}`) */
        palabra=palabra+`
        ${valor} * ${i}= ${resultado}`
    }
    return palabra
}

/* console.log(calcular_tabla()) */

let mensaje_final = calcular_tabla()
console.log(mensaje_final)

//funciones con parametros para clase que viene

