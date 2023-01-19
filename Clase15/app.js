// array o arreglo (estructura de datos que permite almacenar elementos para luego acceder con un sub-indice)

let array = [] // asi se denomina un array vacio
let numeros = [56, `hola mundo`, 3.06, `t`, true,5 , [`hola`, 100]]
/* 
console.log(arraydos)
console.log(arraydos[3]) //con el numero del subindice llamo al valor del arrray q quiero
console.log(arraydos[6][1]) // para mostrar una posicion en un array dentro de otro array */

//formas para recorrer un array (lo mejor es con un for pq puedo tener miles de elementos)

/* console.log(arraydos[0])
console.log(arraydos[1])
console.log(arraydos[2])
console.log(arraydos[3])
console.log(arraydos[4]) */

//forma para recorrer un array correcta

for(let numero of numeros){
    console.log(`recorrido con un for of ${numero}`)
}

for (let i=0;i<=5;i++) {
    console.log(`recorrido con for ${numeros[i]}`)
}

let x=0
while(x<=5){
    console.log(`recorrido con un while ${numeros[x]}`)
    x++ // es la forma correcta de hacer un contador en javascript "x--" en decremento
}

for (let numero of numeros) {
    console.log(numero)
}

// siempre se recorre con un FOR y mejor si es FOR OF

// hasta aca todo menos el prompt y el forof se puede usar en cualquier lenguaje de programacion (todo con sus pequeñas diferencias)

/* i = i+1 
i++
i+2 // es la forma correcta de hacer un contador dependiendo si quiere que sume de a 1 o de a 2 en javascript "x--" en decremento

suma = suma + valor
suma+=valor
resta-=valor // formas correctas y mas acotadas de hacer acumuladores en javascript */


