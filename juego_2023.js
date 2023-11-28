const seccionSelecionarAtaque = document.getElementById("seleccionar-ataque")
const seccionReiniciar = document.getElementById("boton-reiniciar")
const botonAnimalJugador = document.getElementById("boton-animal")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById ("boton-tierra")
const botonReiniciar = document.getElementById ("boton-reiniciar")

const seccionSelecionarAnimal = document.getElementById("seleccionar-animal")
const inputleon = document.getElementById ("leon")
const inputtiburon = document.getElementById ("tiburon")
const inputpuma = document.getElementById ("puma")
const spanJugadorAnimales = document.getElementById ("animal jugador")

const spanAnimalEnemigo = document.getElementById("animal enmigo")

const spanVidasJugador = document.getElementById("vidas jugador")
const spanVidasEnemigo = document.getElementById("vidas enemigo")

const seccionMensajes = document.getElementById("resultado")
const ataqueDelenemigo = document.getElementById("ataque-del-enemigo")

const ataqueDeljugador = document.getElementById("ataque-del-jugador")




let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


seccionSelecionarAtaque.style.display = "none"


seccionReiniciar.style.display = "none"



botonAnimalJugador.addEventListener("click", seleccionarAnimalJugador)


botonFuego.addEventListener("click", ataqueFuego)

botonAgua.addEventListener("click", ataqueAgua)

botonTierra.addEventListener("click", ataqueTierra)


botonReiniciar.addEventListener("click", reinicarJuego)


function seleccionarAnimalJugador(){
    
    seccionSelecionarAnimal.style.display = "none"

    
    seccionSelecionarAtaque.style.display = "flex"
    
    
    
    


    if(inputleon.checked){
        spanJugadorAnimales.innerHTML = "leon"
    } else if (inputtiburon.checked){
        spanJugadorAnimales.innerHTML = "tiburon"
    } else if (inputpuma.checked){
        spanJugadorAnimales.innerHTML = "puma"
    } else {
        alert("Selecciona un animal")
    }

    seleccionaAnimalEnemigo()
}

function seleccionaAnimalEnemigo(){
    let animalAleatorio = aleatoria(1,3)
    

    if(animalAleatorio == 1){
        spanAnimalEnemigo.innerHTML = "leon"
     }else if (animalAleatorio == 2){
        spanAnimalEnemigo.innerHTML = "tiburon"
     }else{ 
        spanAnimalEnemigo.innerHTML = "puma"
     }
}

function ataqueFuego(){
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo ()
}

function ataqueAgua(){
    ataqueJugador = "agua"
    ataqueAleatorioEnemigo ()
}

function ataqueTierra(){
    ataqueJugador = "tierra"
     ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio  = aleatoria(1, 3)

    if (ataqueAleatorio  == 1){
        ataqueEnemigo = "fuego"
    
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "agua"
    
    }else {
        ataqueEnemigo = "tierra"
    }   


    combate()


}

function combate(){
    

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }  else if(ataqueJugador == "fuego" && ataqueEnemigo == "tierra"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == "agua" && ataqueEnemigo == "fuego"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == "tierra" && ataqueEnemigo == "agua"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else {
        crearMensaje("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }

    revisarVidas()

}


function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal(" Ganasate felicitaciones !! ")

    } else if (vidasJugador == 0){
        crearMensajeFinal(" lo siento perdiste ")

    } 
}

function crearMensaje(resultado){
    

    
    let nuevoAtaquedeljugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaquedeljugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    
    ataqueDeljugador.appendChild(nuevoAtaquedeljugador)
    ataqueDelenemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeFinal(resultadoFinal){
    
 
    seccionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true  

    
 seccionReiniciar.style.display = "block"

}

function reinicarJuego(){
    location.reload()
}

function aleatoria (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

