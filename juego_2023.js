let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let seccionSelecionarAtaque = document.getElementById("seleccionar-ataque")
seccionSelecionarAtaque.style.display = "none"

let seccionReiniciar = document.getElementById("boton-reiniciar")
seccionReiniciar.style.display = "none"


let botonAnimalJugador = document.getElementById("boton-animal")
botonAnimalJugador.addEventListener("click", seleccionarAnimalJugador)

let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener("click", ataqueFuego)
let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener("click", ataqueAgua)
let botonTierra = document.getElementById ("boton-tierra")
botonTierra.addEventListener("click", ataqueTierra)

let botonReiniciar = document.getElementById ("boton-reiniciar")
botonReiniciar.addEventListener("click", reinicarJuego)


function seleccionarAnimalJugador(){
    let seccionSelecionarAnimal = document.getElementById("seleccionar-animal")
    seccionSelecionarAnimal.style.display = "none"

    let seccionSelecionarAtaque = document.getElementById("seleccionar-ataque")
seccionSelecionarAtaque.style.display = "flex"

    let inputleon = document.getElementById ("leon")
    let inputtiburon = document.getElementById ("tiburon")
    let inputpuma = document.getElementById ("puma")
    let spamJugadorAnimales = document.getElementById ("animal jugador")


    if(inputleon.checked){
        spamJugadorAnimales.innerHTML = "leon"
    } else if (inputtiburon.checked){
        spamJugadorAnimales.innerHTML = "tiburon"
    } else if (inputpuma.checked){
        spamJugadorAnimales.innerHTML = "puma"
    } else {
        alert("Selecciona un animal")
    }

    seleccionaAnimalEnemigo()
}

function seleccionaAnimalEnemigo(){
    let animalAleatorio = aleatoria(1,3)
    let seleccionaAnimalEnemigo = document.getElementById("animal enmigo")

    if(animalAleatorio == 1){
        seleccionaAnimalEnemigo.innerHTML = "leon"
     }else if (animalAleatorio == 2){
        seleccionaAnimalEnemigo.innerHTML = "tiburon"
     }else{ 
        seleccionaAnimalEnemigo.innerHTML = "puma"
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
    let spamVidasJugador = document.getElementById("vidas jugador")
    let spamVidasEnemigo = document.getElementById("vidas enemigo")

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }  else if(ataqueJugador == "fuego" && ataqueEnemigo == "tierra"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == "agua" && ataqueEnemigo == "fuego"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    }  else if(ataqueJugador == "tierra" && ataqueEnemigo == "agua"){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spamVidasEnemigo.innerHTML = vidasEnemigo
    }  else {
        crearMensaje("Perdiste")
        vidasJugador--
        spamVidasJugador.innerHTML = vidasJugador
        
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
    let seccionMensajes = document.getElementById("resultado")
    let ataqueDeljugador = document.getElementById("ataque-del-jugador")
    let ataqueDelenemigo = document.getElementById("ataque-del-enemigo")

    
    let nuevoAtaquedeljugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaquedeljugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    
    ataqueDeljugador.appendChild(nuevoAtaquedeljugador)
    ataqueDelenemigo.appendChild(nuevoAtaqueEnemigo)

}

function crearMensajeFinal(resultadoFinal){
    let seccionMensajes = document.getElementById("resultado")
 
    seccionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.disabled = true  

    let seccionReiniciar = document.getElementById("boton-reiniciar")
 seccionReiniciar.style.display = "block"

}

function reinicarJuego(){
    location.reload()
}

function aleatoria (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}




