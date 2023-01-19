//ejercicio 1

/* let array =[1,8,6,9]
let resultado=0

function suma (){
    for (const numero of array) {
        resultado=numero+resultado
    }
    return resultado
}

console.log(suma()) */

// ejercicio 2

/* let array = [`susana`,`juan`,`pedro`,`carolina`]

let concatenacion=``

function suma (){
    for (const nombre of array) {
        concatenacion+=nombre
    }
    return concatenacion
}
console.log(suma()) */

// ejercicio 3

/* let array = [8,6,11,31,4,85]
let resultado=[]
function mayores(){
    for (const numero of array) {
        if(numero>10){
            resultado.push(numero)
        }
        
    }
    return resultado
}
console.log(mayores()) */

// ejercicio 4

/* let array =[1,8,6,9]

let resultado=0

function suma (){
    for (const numero of array) {
        if(numero%2==0){
        resultado=numero+resultado}
    }
    return resultado
}

console.log(suma())  */

// ejercicio 5

/* let array = [`susana`,`juan`,`pedro`,`carolina`]

let nombre=`juan`

function eliminar_nombre(un_nombre,lista_nombres){
    
    

    if(lista_nombres.includes(un_nombre))
    {
        lista_nombres.splice(lista_nombres.indexOf(un_nombre),1)
        return lista_nombres
    } return null
}

console.log(eliminar_nombre(nombre,array)) */

// ejercicio 6
/* 
let array = [`juan`,`pepe`,`maria`]

let nombre_lista = `Nombres`

function crear_lista (nombres, titulo) {
    return `Lista de: ${titulo} 
    1) ${nombres[0]}
    2) ${nombres[1]}
    3) ${nombres[2]}`
}

console.log(crear_lista(array,nombre_lista)) */

/* for(let y of array){
    console.log(y) */


/*     let nombres = ['juan', 'pepe', 'maria', 'oscar']
    let nombreDeLista = 'alumnos'
    
    const crearLista = (nombres, nombreDeLista) => {
        let resultado = `lista de ${nombreDeLista}`
        let contador = 1
        for(let nombre of nombres){
            resultado += `\n ${contador}) ${nombre}`
            contador++
        }
        return resultado
    }
    
    console.log(crearLista(nombres, nombreDeLista))
    
 */

//ejercicio 7

/* let array = [`hola`,`chau`,`hola`,`juan`,`pepe`]
let x=0
let buscado = `hola`

function cantidad () {
for (const string of array) {

    if (string==buscado){
        x++ // x = x+1
    }
    
}
return x
}
console.log(cantidad())
 */

// ejercicio 8 

/* let ganancias_mensuales=[]

function vender (cantidad_vendida, precio, nombre_de_producto){
    let precio_total = cantidad_vendida*precio
    ganancias_mensuales.unshift(precio_total)
}

vender(3,150,`manzana`)
vender(2,50,`papa`)

console.log(ganancias_mensuales) */

// ejercicio 9

/* let gastos_mensuales=[]

function comprar (cantidad_comprada, precio, nombre){
    let precio_total = cantidad_comprada*precio
    gastos_mensuales.push(`${nombre}: ${precio_total}`)
}

comprar(3,150,`naranjas`)
comprar(1,800,`carne`)

console.log(gastos_mensuales) */

// ejercicio 10

/* 
let ganancias_mensuales=[]

function vender (cantidad_vendida, precio, nombre_de_producto){
    let precio_total = cantidad_vendida*precio
    ganancias_mensuales.unshift(precio_total)
}

vender(3,150,`manzana`)
vender(2,50,`papa`)

let gastos_mensuales=[]

function comprar (cantidad_comprada, precio, nombre){
    let precio_total = cantidad_comprada*precio
    gastos_mensuales.push(`${nombre}: ${precio_total}`)
}

comprar(3,150,`naranjas`)
comprar(1,800,`carne`)

console.log(gastos_mensuales)
console.log(ganancias_mensuales)
console.log(gastos_mensuales[0].split(':'))

console.log(Number(gastos_mensuales[0].split(':').pop())) */

// Dado el array gastosMensuales y gananciasMensuales, desarrollar una función que nos retorne la gananciasMensuales. La misma se deduce de la diferencia entre la suma de valores del array de gastosMensuales y el de gananciasMensuales. (se puede usar la función hecha en el punto 1).

/* const ganancia_total = (ganancias_mensuales, gastos_mensuales) => {

    let ganancia_meses=0
    for (const ganancia of ganancias_mensuales) {

        ganancia_meses+=ganancia

    }

    let gastos_meses=0
    for (const gastos of gastos_mensuales) {

        console.log()
        gastos_meses+=Number(gastos.split(':').pop())        
    }

    return ganancia_meses-gastos_meses

}

console.log(ganancia_total(ganancias_mensuales,gastos_mensuales)) */

// ejercicio 11) Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo

// calcularAreaTriangulo(5, 6) 
//resultado 15
/* 
const calcular_area_triangulo = (base, altura) => {

    return base*altura/2
}

console.log(calcular_area_triangulo(5,6))
 */


// ejercicio 12)Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.

//igualLongitud(‘estufa’, 'a')
//true

/* const es_el_ultimo_caracter = (palabra,caracter) => {


    return palabra.split('').pop()==caracter
}

console.log(es_el_ultimo_caracter(`estufa`,`f`)) */

// ejercicio 13)Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique si tiene 8 caracteres o más.

//esValida('contraseniaMuySegura')
//true 

/* const es_valida = (contraseña) => {

    return contraseña.split('').length >=8
}

console.log(es_valida(`contrasenaser`)) */

// ejercicio 14)Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee

//contarPalabras('javascript')
//1

/* const contar_palabras = (frase) => {

   return frase.split(` `).length
}

console.log(contar_palabras(`hola mi nombre es pepe`)) */

// ejercicio 15)Definí una función capitalizar que reciba como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

//capitalizar('había una vez...')
//'Había una vez...'

/* const capitalizar = (palabra) => {

   return palabra[0].toUpperCase()+palabra.slice(1)

}

console.log(capitalizar(`habia una vez`))
 */

// ejercicio 16)Definí una función obtenerPrimeraOracion que tome por parámetro un string str y devuelva la primera oración de dicho string

//obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')
//'A mí no me preguntes, sólo soy una oración'

/* const obtenerPrimeraOracion = (frase) => { 

    return frase.split(`.`).shift()
}

console.log(obtenerPrimeraOracion(`A mí no me preguntes, sólo soy una oración.Otra oracion`)) */

// ejercicio 17)Definí una función ocultarContrasenia que reciba como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

//ocultarContrasenia(123456)
//'******'
/* const ocultarContrasenia = (contrasenia_numeros) => {

    let astericos = ``

    for (let i = 0; i< contrasenia_numeros.length; i++){

        astericos+=`*`  
    }

    return astericos
}

console.log(ocultarContrasenia('123456789')) */

// jercicio 18)Definí una función obtenerExtension que tome por parámetro un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

//obtenerExtension('imagen.png')
//'png'

/* 
const obtenerExtension = (archivo) => {

    return archivo.split(`.`).pop()
 }

 console.log(obtenerExtension('imagen.png')) */

 // ejercicio 19)Definí una función esPuenteSeguro que tome por parámetro un string que represente a un puente que consista en caracteres numerales y espacios y nos indique si el puente está entero y es seguro atravesar

//esPuenteSeguro('### ##')
//false

/* const esPuenteSeguro = (puente) => {

return puente.split(` `).length == 1

}

console.log(esPuenteSeguro(`######`)) */

// ejercicio 20)Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos


//obtenerMenor(5, 7, 99, 34, 54, 2, 12)
//2


/* const obtenerMenor = (numeros) => {

    return Math.min(...numeros)
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) */

// ejercicio 21)Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos.

//sumar([5, 7, 10, 12, 24])
//58

/* const sumar = (numeros) => {
    let suma =0
    for (const numero of numeros) { 
        suma+=numero
    }
    return suma
}

console.log(sumar([5, 7, 10, 12, 24])) */

// ejercicio 22)Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.

//contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
//false

/* const contiene = (numero,array) => {
    return array.includes(numero)
}

console.log(contiene(54, [5,7,99,3,4,54,2,12])) */

// ejercicio 23)Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

//gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
//false

/* const gano = (tragamonedas) => {
    let es_igual=true
    for (let i=1; i<5; i++){    
        if(tragamonedas[i] == tragamonedas[0]){
            es_igual = true
        } else{
            es_igual=false
            break
        }
    }
    return es_igual
 }

 console.log(gano(['⭐','⭐','⭐','💫','⭐'])) */

 // ejercicio 24)Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

//separar('🐶🐱🐶🐱🐱🐶🐶') 
//'🐶🐶🐶🐶🐱🐱🐱'

/* const separar = (emojis) => {
    return emojis.split(``).sort().join(``)
}

console.log(separar(`🐶🐱🐶🐱🐱🐶🐶`))
 */

// ejercicio 25)Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

//multiplicar(2, [5, 7, 15, 22, 40])
//[10, 14, 30, 44, 80]

/* 
 const multiplicar = (multiplicador, numeros) => {

    for (let i=0; i< numeros.length; i++){
        numeros[i]=numeros[i]*multiplicador
    }
    return numeros
}

console.log(multiplicar(2,[5,7,15,22,40])) */

// ejercicio 26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']
/* 
const filtrarPorLongitud = (longitud, palabras) => {
    let palabras_mayores =[]
    for (const palabra of palabras) {
        if(palabra.length >longitud)
        palabras_mayores.push(palabra)        
    }
    return palabras_mayores
}


console.log(filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',])) */


// ejercicio 27)Definí una función jugarPiedraPapelTijeras que reciba como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente
     
/* const jugarPiedraPapelTijeras = (jugadoraA,jugadoraB,jugadasA,jugadasB) => {
    let puntajeA=0
    let puntajeB=0
    let catidad_jugadas

    

    if(jugadasA.length==jugadasB.length){

    catidad_jugadas=jugadasA.length} 
     else{ 
        return`No hay cantidad de jugadas iguales`
     }
    for (let i=0;i<catidad_jugadas;i++){
        if( (jugadasA[i]==`piedra`&&jugadasB[i]==`tijera`) || (jugadasA[i]==`tijera`&&jugadasB[i]==`papel`) || (jugadasA[i]==`papel`&&jugadasB[i]==`piedra`) ){
            puntajeA++
        }

        if ((jugadasB[i]==`piedra`&&jugadasA[i]==`tijera`) || (jugadasB[i]==`tijera`&&jugadasA[i]==`papel`) || (jugadasB[i]==`papel`&&jugadasA[i]==`piedra`)){
            puntajeB++
        }
        
    }
    if(puntajeA>puntajeB){
        return `la ganadore es: ${jugadoraA}`
    } else {
        if(puntajeB>puntajeA){
            return `la ganadora es: ${jugadoraB}`
        } else {
            return `Hay un empate`
        }
    }
}

const jugadasA = ['piedra', 'piedra', 'tijera',`papel`]
const jugadasB = ['papel', 'tijera', 'tijera',`tijera`,]
const jugadoraA=`Maria`
const jugadoraB=`Ana`

console.log(jugarPiedraPapelTijeras(jugadoraA,jugadoraB,jugadasA,jugadasB)) */