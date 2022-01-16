var usuario;

document.getElementById("inicio").addEventListener("click", comienzo);

function comienzo() {
    usuario = prompt('¿Qué eligues?');
}


var maquina = Math.floor(Math.random() *3);

if (usuario === "piedra") {
    if(maquina == 0){
        alert('empate');
    }else{
        if(maquina == 1){
            alert('ganaste');
        }else{
            if(maquina == 2){
                alert('perdiste');
            }
        }
    }
}

if (usuario === "papel") {
    if(maquina == 0){
        alert('ganaste');
    }else{
        if(maquina == 1){
            alert('empate');
        }else{
            if(maquina == 2){
                alert('perdiste');
            }
        }
    }
}

if (usuario === "tijera") {

    if(maquina == 0){
        alert('perdiste');
    }else{
        if(maquina == 1){
            alert('ganaste');
        }else{
            if(maquina == 2){
                alert('empate');
            }
        }
    }
}

