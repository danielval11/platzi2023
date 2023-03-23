let ataqueJugador
let ataqueEnemigo

let botonAnimalJugador = document.getElementById("boton-animal")
botonAnimalJugador.addEventListener("click", seleccionarAnimalJugador)

let botonFuego = document.getElementById("boton-fuego")
botonFuego.addEventListener("click", ataqueFuego)
let botonAgua = document.getElementById("boton-agua")
botonAgua.addEventListener("click", ataqueAgua)
let botonTierra = document.getElementById ("boton-tierra")
botonTierra.addEventListener("click", ataqueTierra)

function aleatoria (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


function seleccionarAnimalJugador(){
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
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo ()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo ()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
     ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio  = aleatoria(1, 3)

    if (ataqueAleatorio  == 1){
        ataqueEnemigo = "fuego"
    
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    
    }else {
        ataqueEnemigo = "Tierra"
    }   


    combate()


}

function combate(){

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }  else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("Ganaste")
    }  else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("Ganaste")
    }  else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("Ganaste")
    }  else {
        crearMensaje("Perdiste")
        
    }

}

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu animal ataco con " + ataqueJugador + ", El animal del enmigo ataco con " + ataqueEnemigo + " - " + resultado

    seccionMensajes.appendChild(parrafo)

}


