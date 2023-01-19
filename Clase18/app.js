/* let array = [`maria`,`esteban`,`miguel`]
console.log(array[1]) */

//objetos literales

/* const usuarios={
    nombre:`miguel`,
    edad:23,
    estado_civil:true,
    amigos:[`julian`,`emilio`,`juana`]
} */

/* console.log(usuarios) // accedo a todos los datos del objeto

console.log(usuarios.nombre) // accedo solo a la propiedad nombre de usuarios

console.log(usuarios.amigos[1]) */

//array de objetos

/* const usuarios=[{
    nombre:`miguel`,
    edad:23,
    estado_civil:true,
    amigos:[`julian`,`emilio`,`juana`]
},{
    nombre:`flor`,
    edad:25,
    estado_civil:false,
    amigos:[`mario`,`jorge`]
}]

console.log (usuarios[1].edad) //accedo a la edad de FLOR por ser el uno del array de objetos USUARIOS
 */

/* let perfil = {
    nombre:`olivia`,
    apellido:`matzu`,
    edad:21
}

/* const presentacion = (datos) => {
   
    console.log(datos)
    return `Hola, mi nombre ${datos.nombre} ${datos.apellido} y tengo ${datos.edad}`

} */

/* const presentacion = (datos) =>`Hola, mi nombre ${datos.nombre} ${datos.apellido} y tengo ${datos.edad}`//retorno implicito solo con una sola linea de codigo

console.log(presentacion(perfil)) */ 

/* let song = {
    title: `rock and roll`,
    bandName: `Led zeppelin`,
    duration: 166000,
    album: `Led zeppelin IN`
}

const nombre_cancion = (cancion) => {
    let titulo= cancion.title 
    let banda = cancion.bandName
    let duracion = cancion.duration /1000

    let mi_traduccion={
        titulo:titulo,
        banda:banda,
        duracion:duracion
    }

    return mi_traduccion

}

console.log(nombre_cancion(song)) */
/* 
let datos = {
    id: 1,
    nombre:`Ada`,
    apellido:`Lovelace`,
    email:`ada.lovelace@gmail.com`,
    telefono:`123456789`,
    edad:`29`,
    programa:true
}

const modificar = (numero) => {
    datos.telefono=numero    
}

console.log(modificar(`554582`)) */

/* let perfil ={
    id:1534567,
    nombre:`ada lobelace`,
    url: `https://www.linkedin.com/in/ada-lovelace`,
    habilidades:[`html`,`css`,`sass`]
}

const agregar_habilidad = (datos,nuevo,nuevo2) => { 


    datos.habilidades.push(nuevo)
    datos.habilidades.push(nuevo2)
    console.log(datos.habilidades)

}

console.log(agregar_habilidad(perfil, `Javascript`,`java`)) */


/* const usuarios=[{
    nombre:`miguel`,
    edad:23,
    estado_civil:true,
    amigos:[`julian`,`emilio`,`juana`]
},{
    nombre:`flor`,
    edad:25,
    estado_civil:false,
    amigos:[`mario`,`jorge`]
}] */

/* for (let usuario of usuarios) {

    console.log(usuario)

} */

// metodos avanzados map()

/* let numeros=[1,2,3,4,7,6,7]
let resultado= numeros.map(elemento=>elemento*100)
console.log(resultado)

let resultado_dos=numeros.filter(elemento=>elemento==3 || elemento ==7)
console.log(resultado_dos) */

const contenedor= document.getElementById(`contenedor`)

const productos= [
    {
        title: `iphone15`,
        price:100,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium dolore eum eius exercitationem nemo! Doloremque quam voluptatum officiis consequuntur asperiores, quibusdam quae. Qui nesciunt maiores autem, cum corporis quas!`,
        id:123213
    },
    {
        title: `iphone12`,
        price:100,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium dolore eum eius exercitationem nemo! Doloremque quam voluptatum officiis consequuntur asperiores, quibusdam quae. Qui nesciunt maiores autem, cum corporis quas!`,
        id:112321
    },
    {
        title: `iphone19`,
        price:100,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium dolore eum eius exercitationem nemo! Doloremque quam voluptatum officiis consequuntur asperiores, quibusdam quae. Qui nesciunt maiores autem, cum corporis quas!`,
        id:123123
    }
]

//mostrar una carta de informacion por cada uno de los productos de nuestro array

const renderizar_productos = (lista) => { 
    contenedor.innerHTML=``
productos.forEach((producto)=>
    contenedor.innerHTML+=`
    <div class="carta">
        <h3>Nombre: ${producto.title}</h3>
        <p>Precio: ${producto.price}</p>
        <p>Description: ${producto.description}</p>
        <button class="btn"s id="btn-comprar-${producto.id}">Comprar</button>
    </div>`
    )
    const botones_de_compra=document.getElementsByClassName(`btn`)
    console.log(botones_de_compra)

    for(const boton of botones_de_compra){

        boton.addEventListener(`click`, (event) =>{
        console.log(Number(event.target.id.split("-").pop()))
        })
    }
}

renderizar_productos(productos)