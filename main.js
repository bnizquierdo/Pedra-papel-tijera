/*Preguntar al usuairo que elige para jugar*/
var usuario = prompt('Elige piedra papel o tijera');

/*Usar el metodo Maht para generar un número entre el 0 y el 2*/
/*
0=piedra
1=papel
2= tijera*/
var maquina = Math.floor(Math.random() *3);

/*Si el usuario elige piedra*/
if (usuario === "piedra") {
    /*Si la máquina escoge piedra*/
    if(maquina == 0){
        alert('Empatasteis. La máquina eligio piedra');
        
    }else{
        /*Si la máquina escoge papel*/
        if(maquina == 1){
            alert('Perdiste. La máquina eligio papel');
        }else{
            /*Si la máquina escoge tijera*/
            if(maquina == 2){
                alert('Ganaste. La máquina eligio tijera');
            }
        }
    }
}


/*Si el usuario elige papel*/
if (usuario === "papel") {
    /*Si la máquina escoge piedra*/
    if(maquina == 0){
        alert('Ganaste. La máquina eligio piedra');
    }else{
        /*Si la máquina escoge papel*/
        if(maquina == 1){
            alert('Empatasteis. La máquina eligio papel');
        }else{
            /*Si la máquina escoge tijera*/
            if(maquina == 2){
                alert('Perdiste. La máquina eligio tijera');
            }
        }
    }
}

/*Si el usuario elige tijera*/
if (usuario === "tijera") {

    if(maquina == 0){
        alert('Perdiste. La máquina eligio piedra');
    }else{
        /*Si la máquina escoge papel*/
        if(maquina == 1){
            alert('Ganaste. La máquina eligio papel');
        }else{
            /*Si la máquina escoge tijera*/
            if(maquina == 2){
                alert('Empatasteis. La máquina eligio tijera');
            }
        }
    }
}
