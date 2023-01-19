//funciones (3 partes)

// 1) declaracion y llamada de la funcion

/* function mostrar_nombre(a){
    console.log(a)
} */
/* suma() */

function multiplicacion(a,b){
    let resultado = a*b
    return resultado // las variables que se crean dentro de una funcion no tienen valor afuera (no podria poner un consolelog(resultado) fuera de la funcion. Se hace lo de la linea 24 y 26)
}

//2) declaracion de parametros

/* let nombre=prompt(`ingrese un nombre`)

mostrar_nombre(nombre) */

let num1 = prompt(`ingrese un valor`)
let num2 = prompt(`ingrese otro valor`)

let resultado_multiplicacion=multiplicacion(num1,num2)

console.log(`el resultado de la multiplicacion es ${resultado_multiplicacion}`)