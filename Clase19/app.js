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

// Dado el array gastosMensuales y gananciasMensuales, desarrollar una funci??n que nos retorne la gananciasMensuales. La misma se deduce de la diferencia entre la suma de valores del array de gastosMensuales y el de gananciasMensuales. (se puede usar la funci??n hecha en el punto 1).

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

// ejercicio 11) Defin?? una funci??n calcularAreaTriangulo que tome por par??metros la base y la altura de un tri??ngulo y devuelva el ??rea del mismo

// calcularAreaTriangulo(5, 6) 
//resultado 15
/* 
const calcular_area_triangulo = (base, altura) => {

    return base*altura/2
}

console.log(calcular_area_triangulo(5,6))
 */


// ejercicio 12)Defin?? una funci??n esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.

//igualLongitud(???estufa???, 'a')
//true

/* const es_el_ultimo_caracter = (palabra,caracter) => {


    return palabra.split('').pop()==caracter
}

console.log(es_el_ultimo_caracter(`estufa`,`f`)) */

// ejercicio 13)Defin?? una funci??n esValida que tome por par??metro una contrasenia (string) y nos indique si tiene 8 caracteres o m??s.

//esValida('contraseniaMuySegura')
//true 

/* const es_valida = (contrase??a) => {

    return contrase??a.split('').length >=8
}

console.log(es_valida(`contrasenaser`)) */

// ejercicio 14)Defin?? una funci??n contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee

//contarPalabras('javascript')
//1

/* const contar_palabras = (frase) => {

   return frase.split(` `).length
}

console.log(contar_palabras(`hola mi nombre es pepe`)) */

// ejercicio 15)Defin?? una funci??n capitalizar que reciba como argumento un string str y devuelva el mismo string con la primera letra en may??scula

//capitalizar('hab??a una vez...')
//'Hab??a una vez...'

/* const capitalizar = (palabra) => {

   return palabra[0].toUpperCase()+palabra.slice(1)

}

console.log(capitalizar(`habia una vez`))
 */

// ejercicio 16)Defin?? una funci??n obtenerPrimeraOracion que tome por par??metro un string str y devuelva la primera oraci??n de dicho string

//obtenerPrimeraOracion('A m?? no me preguntes, s??lo soy una oraci??n')
//'A m?? no me preguntes, s??lo soy una oraci??n'

/* const obtenerPrimeraOracion = (frase) => { 

    return frase.split(`.`).shift()
}

console.log(obtenerPrimeraOracion(`A m?? no me preguntes, s??lo soy una oraci??n.Otra oracion`)) */

// ejercicio 17)Defin?? una funci??n ocultarContrasenia que reciba como argumento una contrasenia de solo numeros y devuelva un string con dicha contrase??a ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

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

// jercicio 18)Defin?? una funci??n obtenerExtension que tome por par??metro un string archivo con el formato 'nombre.extension' y devuelva la extensi??n del archivo

//obtenerExtension('imagen.png')
//'png'

/* 
const obtenerExtension = (archivo) => {

    return archivo.split(`.`).pop()
 }

 console.log(obtenerExtension('imagen.png')) */

 // ejercicio 19)Defin?? una funci??n esPuenteSeguro que tome por par??metro un string que represente a un puente que consista en caracteres numerales y espacios y nos indique si el puente est?? entero y es seguro atravesar

//esPuenteSeguro('### ##')
//false

/* const esPuenteSeguro = (puente) => {

return puente.split(` `).length == 1

}

console.log(esPuenteSeguro(`######`)) */

// ejercicio 20)Defin?? una funci??n obtenerMenor que tome por par??metro un array de n??meros numeros y devuelva el menor de ellos


//obtenerMenor(5, 7, 99, 34, 54, 2, 12)
//2


/* const obtenerMenor = (numeros) => {

    return Math.min(...numeros)
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) */

// ejercicio 21)Defin?? una funci??n sumar que reciba como argumento un array de n??meros numeros y devuelva la suma de ellos.

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

// ejercicio 22)Defin?? una funci??n contiene que reciba como argumentos un n??mero numero y un array de n??meros numeros y devuelva si el n??mero se encuentra en dicho array.

//contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
//false

/* const contiene = (numero,array) => {
    return array.includes(numero)
}

console.log(contiene(54, [5,7,99,3,4,54,2,12])) */

// ejercicio 23)Defin?? una funci??n gano que reciba como argumento un array tragamonedas con 5 s??mbolos y nos indique si son iguales. Si el array tiene m??s de 5 s??mbolos, s??lo debe comparar los 5 primeros.

//gano(['??? '??????', '??????', '????', '???']) // 
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

 console.log(gano(['???','???','???','????','???'])) */

 // ejercicio 24)Defin?? una funci??n separar que tome por par??metro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

//separar('????????????????????????????') 
//'????????????????????????????'

/* const separar = (emojis) => {
    return emojis.split(``).sort().join(``)
}

console.log(separar(`????????????????????????????`))
 */

// ejercicio 25)Defin?? una funci??n multiplicar que reciba como argumentos un n??mero multiplicador y un array de n??meros numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posici??n) multiplicado por el n??mero ingresado.

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

// ejercicio 26)Defin?? una funci??n filtrarPorLongitud que tome por par??metro un n??mero longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

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


// ejercicio 27)Defin?? una funci??n jugarPiedraPapelTijeras que reciba como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La funci??n debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente
     
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