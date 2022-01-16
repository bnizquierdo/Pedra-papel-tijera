var usuario = prompt('¿Qué eligues?');;

var maquina = Math.floor(Math.random() *3);

if (usuario === "piedra") {
    if(maquina == 0){
        alert('Empatasteis. La máquina eligio piedra');
        
    }else{
        if(maquina == 1){
            alert('Perdiste. La máquina eligio papel');
        }else{
            if(maquina == 2){
                alert('Ganaste. La máquina eligio tijera');
            }
        }
    }
}

if (usuario === "papel") {
    if(maquina == 0){
        alert('Ganaste. La máquina eligio piedra');
    }else{
        if(maquina == 1){
            alert('Empatasteis. La máquina eligio papel');
        }else{
            if(maquina == 2){
                alert('Perdiste. La máquina eligio tijera');
            }
        }
    }
}

if (usuario === "tijera") {

    if(maquina == 0){
        alert('Perdiste. La máquina eligio piedra');
    }else{
        if(maquina == 1){
            alert('Ganaste. La máquina eligio papel');
        }else{
            if(maquina == 2){
                alert('Empatasteis. La máquina eligio tijera');
            }
        }
    }
}
