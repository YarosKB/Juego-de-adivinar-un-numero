let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let intentosMaximos = 3;

function asignarTextoHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoHTML('p', `Felicidades, has acertado el número secreto ${numeroSecreto}, lo intentaste ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoHTML('p', 'El numero es menor');
        } else {
            asignarTextoHTML('p', 'El numero es mayor');
        }
	intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * intentosMaximos) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == intentosMaximos){
        asignarTextoHTML('p', 'Ya se sortearon todos los números');
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales(){
    asignarTextoHTML('h1', 'Juego de adivinar un número');
    asignarTextoHTML('p', `Diga un número del 1 al ${intentosMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();