/* "use strict" // buscar mejor la info 

const nombre = (parametro) => { }

 */

/* let usuario = document.getElementById(`usuario_input`)
console.log(usuario)

console.log(usuario.value) */

/* let numero1 = document.getElementById(`numero1`)


let resultado = numero1
console.log(resultado) */


/* let nombre= document.getElementById(`usuario_input`)
let form= document.getElementById(`formulario`)

const enviar_formulario = (event) => {
    event.preventDefault()
    let usuario=event.target.usuario.value

    console.log(typeof(usuario))
    console.log((parseInt(usuario)))
    console.log(Number(usuario)) // es como parseint pero no te lo redondea ya que parseint te redondea siempre para abajo

    
    console.log(event.target.usuario.value)
    console.log(event.target.contraseña.value)
}

form.addEventListener(`submit`,enviar_formulario) */



let btn_sumar= document.getElementById(`btn`)

console.log(numero_uno)
console.log(numero_dos)

const sumar_numeros = () => {
    let numero_uno = Number(document.getElementById(`numero_uno`).value)
    let numero_dos = Number(document.getElementById(`numero_dos`).value)
    let resultado_suma = document.getElementById(`resultado_suma`)

    let resultado=numero_uno+numero_dos
    console.log(resultado)
    resultado_suma.innerText=`$ ${resultado}`
    
 }

btn_sumar.addEventListener(`click`,sumar_numeros)