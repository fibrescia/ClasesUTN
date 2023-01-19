/* let numeros=[25,96,1,35,9,29] */

//metodo
// .push()
// numeros.push()

//push
/* numeros.push(98,`hola`) //agrega dos elementos al final del array
console.log(numeros)
console.log(numeros.length)

let resultado=numeros.pop()
numeros.pop() // saca el ultimo elemento del array par guardarlo en una variable y lo retorna

/* console.log(numeros) */
/* 
numeros.unshift(15) // agrega un elemento al principio del array
console.log(numeros) */
/* 
numeros.shift() // saca el primero elemento del array como el pop y lo retorna
console.log(numeros)  */

/* let nombres = [`juan`, `maria`, `julieta`] 

nombres.splice(1,2,`pepe`) //elimina 2 nombres desde el elemento 1 del array y agrega a pepe desde esa posicion
console.log(nombres)

let indice_A_eliminar = nombres.indexOf(`juan`) // devuelve el indice en el q se encuentra juan
console.log(indice_A_eliminar)

nombres.splice(indice_A_eliminar,1,`pedro`) //elimina a juan y agrega a pedro
console.log(nombres) */

console.log(document) // te muestra a que esta conectado el acrchivo(el documento de html)

console.log(document.getElementById("contenedor")) // me tra el div contenedor con sus hijos

let contenedor = document.getElementById("contenedor")
console.log(contenedor)

contenedor.innerText = `Hola mundo 2` //ingresa texto en una etiqueta

contenedor.innerHTML= "<h1 class=clase1> Hola mundo 3</h1>" //ingresa una etiqueta de html en la variable contenedor con la class clase1

let mensaje = document.getElementById('mensaje')
mensaje.innerText+=` genial`

//document object model (DOM)

let mensaje_dos=document.querySelector(`.mensaje`) //para traer una clase 