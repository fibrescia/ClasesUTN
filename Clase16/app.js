/* //metodos del array

let numeros=[5,8,9,45,7,2,6,1]
let palabras=['paula','sabrina','ana','adelina','carolina']


numeros.push(29) //metodo push agrega un elemento al final del array, pueden ser uno o mas elementos
console.log(numeros)

numeros.pop() //metodo pop te saca el ultimo elemento del array
console.log(numeros)

numeros.shift() //metodo shift te saca el primer elemento
console.log(numeros)

numeros.unshift(23) //metodo unshift agrega un elemento al principio del array, pueden ser uno o mas elementos
console.log(numeros)

numeros.reverse() // metodo reverse revierte el array 
console.log(numeros)

numeros.lastIndexOf(5)
console.log(numeros.lastIndexOf(5)) //busca el indice(ubicacion dentro del array) en el que esta el elemento que ponemos entre parentesis, si da como resultado -1 es que no existe ese elemento en el array

console.log(numeros.join('-')) // devuelve el contenido del array en forma de string lo q va entre parentesis te dice con que separa cada elemento, el array queda convertido en string
console.log(numeros.join(' ')) // al ponerle un space enetre las "" quedan con un espacio, si no se pone nada entre parentesis te separa con ","

numeros.sort()
console.log(numeros) // me ordena el array por el primer digito, no de menor a mayor

palabras.sort()
console.log(palabras) // me ordena alfabeticamente

numeros.sort(function(a,b){
    return a-b
})
console.log(numeros) // de esta manera si se ordena de menor a mayor

console.log(numeros) //preguntar sobre esto pq me los guarda ordenados */

let lista = document.getElementById('lista')
/* let cuerpo = document.getElementById(`cuerpo`)  */

/* let micolor=prompt(`ingrese un color`)
cuerpo.style.backgroundColor = micolor */

/* lista.innerText =`Hola mundo`  */
/* let texto=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur consequatur repudiandae praesentium, voluptas similique odio placeat veniam magnam doloremque a, voluptate repellat ex consectetur, tempore corporis reprehenderit inventore laudantium.` */
/* 
let palabras=['paula','sabrina','ana','adelina','carolina',`julia`] */

/* console.log(texto.length) //cuenta cantidad de caracteres
console.log(palabras.length) // cuenta la cantidad de elementos del array */

/* let recorrer=palabras.lengths
for (let i=0;i<recorrer;i++) {
    console.log(palabras[i])
    lista.innerHTML+=`<li>${palabras[i]}</li>`
}

for (let nombre of palabras) {
    lista.innerHTML+=`<li>${nombre}</li>`    
}
 */
// esta es la mejor manera de usar un for para recorrer

/* console.log(Math.random() * 50) //elige un numero aleatorio enetre el 0 y el 50

let numero_aleatorio = Math.random() * 50
let resultado_final=Math.floor(numero_aleatorio)
console.log(resultado_final) // es una forma de anidar metodos

let resultado=Math.floor(Math.random()*50) // es la forma mas facil de anidar variables
console.log(resultado) */

/* let cuerpo= document.getElementById(`cuerpo`)
let btn = document.getElementById(`btn`)
let texto_color=document.getElementById(`texto_color`)

function hacer_click(){    
let hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hexcolor = `#`

for(let i=0;i<6;i++){

    hexcolor=`${hexcolor}${hex[obtener_numero()]}`
    console.log(hexcolor)
}

cuerpo.style.backgroundColor=hexcolor
texto_color.innerText=hexcolor

function obtener_numero(){
    let resultado=Math.floor(Math.random() * hex.length )
    console.log(hex.length)
    return resultado
}
}


//let hexcolor=`${hexcolor}`${hex[i]}`

let hora = document.getElementById(`hora`)

function mihora(){
let mivar = new Date
hora.innerText=`${mivar.getHours()}:${mivar.getMinutes()}:${mivar.getSeconds()}`
}

setInterval(mihora,1000) // setInterval(nombre de la function, tiempo en milisegundos)
/* setInterval(hacer_click,1000) */

/* 
console.log(mivar)
console.log(`${mivar.getHours()}:${mivar.getMinutes()}:${mivar.getSeconds()}`) */