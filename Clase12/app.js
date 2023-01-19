/* let avanzar = false

if(avanzar){
    console.log('puede avanzar')

} else {
    console.log('no puede avanzar')
} */

//estructura condicional anidada

/* let nota1 = parseInt(prompt('ingrese la primera nota'))
let nota2 = parseInt(prompt('ingrese la 2da nota'))
let nota3 = parseInt(prompt('ingrese la 3ra nota'))

let resultado = (nota1+nota2+nota3)/3

if(resultado>=7) {
    console.log('aprobado')
}else {
    if(resultado>=4){
        console.log('regular')
    } else {
        console.log('desaprobado')
    }
} */





//operadores logicos y &&


/* let nota1 = parseInt(prompt('ingrese la primera nota'))
let nota2 = parseInt(prompt('ingrese la segunda nota'))
let nota3 = parseInt(prompt('ingrese la tercera nota'))

if(nota1>nota2 && nota1>nota3){
    console.log('la nota mayor es la primera')
} else{
    if(nota2>nota1 && nota2>nota3) {
        console.log('la nota mayor es la segunda')
    }else{
        console.log('nota mayor es la tercera')
    }
} // esto funciona como el orto pq no sirve si hay dos notas iguales */


//operador cortocircuito

/* let avanzar = true

    avanzar && console.log('puede avanzar') */


//operador logico o ||

/* let dia = parseInt(prompt('ingrese dia'))
let mes = parseInt(prompt('ingrese mes'))
let anio = parseInt(prompt('ingrese año'))
if (mes == 1 || mes == 2 || mes ==3) {
    console.log('pertenece al primer trimestre')
} */

// ejercicio 1 


/* console.log("Ejercicio 1")
let nombre = prompt('Ingrese nombre:')
console.log(nombre)

console.log("Ejercicio 2")

let edad = prompt('Ingrese su edad:')
console.log(edad)

console.log("Ejercicio 3")
let tiene_hijos = true
console.log(tiene_hijos)

console.log("Ejercicio 4")
let salario = parseInt(prompt('Ingrese salario mensual'))
console.log('El salario anual es:', salario*12)

console.log("Ejercicio 5")

let edad_2 = 17
if (edad_2>=18) {
    console.log('eres mayor de edad')
} else {
    console.log('es menor de edad')
}

console.log("Ejercicio 6")

let tiene_hijos_2 = false
if(tiene_hijos_2){
    console.log('Tiene hijos')
}else{
    console.log('No tiene hijos')
}

console.log("Ejercicio 7")

let genero = prompt('Ingrese genero (HOMBRE/MUJER):')

if(genero == 'HOMBRE'){
    console.log('Eres Hombre')
}else{
    console.log('Eres Mujer')
}

console.log("Ejercicio 8")

let lado_cuadrado = prompt('Ingrese medida del lado del cuadrado en cm:')
console.log('El perimetro del cuadrado es', lado_cuadrado*4, 'cm')

console.log("Ejercicio 9")

let num1 = parseInt(prompt('Ingrese primer numero:'))
let num2 = parseInt(prompt('Ingrese segundo numero:'))
let num3 = parseInt(prompt('Ingrese tercer numero:'))
let num4 = parseInt(prompt('Ingrese cuarto numero:'))

console.log('La suma de los dos primeros numeros es:', num1+num2, 'y la multiplicacion del tercer y cuarto numero es:', num3*num4)

console.log("Ejercicio 10")

let num_pos = prompt('Ingrese un numero entre 1 y 99:')
if(num_pos>=10) {
    console.log('El numero tiene dos digitos')
} else {
    console.log('El numero tiene un solo digito')
}

console.log("Ejercicio 11")

let num_entero = prompt('Ingrese un numero entero:')
if(num_entero<0){
    console.log('El numero es negativo')
} else num_entero==0 ? console.log('El numero es cero') : console.log('El numero es positivo')

console.log("Ejercicio 12")

let edad_3 = 17
let tiene_permiso = true

edad_3>=18 && tiene_permiso ? console.log('Puede conducir') : console.log('No puede conducir')

console.log("Ejercicio 13")

let tiene_dinero = false
let tiene_tarjeta = true

tiene_dinero || tiene_tarjeta ? console.log('Puede pagar') : console.log('No puede pagar') */

/* console.log("Ejercicio 14") */

/* console.log("Ejercicio 15")

let dia = prompt('Ingrese dia:')
let mes = prompt('Ingrese mes:')

dia==25 && mes==12 ? console.log('Es navidad') : console.log('No es navidad')

console.log("Ejercicio 16") */

let sueldo = prompt('Ingrese sueldo')
let antiguedad = prompt('Ingrese antiguedad en años:')

if(sueldo>=500){
    console.log('No se aumenta el sueldo, queda en:', sueldo)
} else antiguedad<10 ? console.log ('Se debe aumentar un 5% y el sueldo quedara en:', sueldo* 1.05) : console.log('Se debe aumentar un 20% y el sueldo quedara en:', sueldo*1.2) 
