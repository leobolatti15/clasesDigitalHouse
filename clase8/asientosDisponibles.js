function asientosDisponibles (aD,aR) {
    if(aD.includes(aR) == true) {
        return "Felicitaciones, el asiento número " + aR + " está disponible"
    } else {
        return  "Lo sentimos, el asiento número " + aR + " está ocupado, pero aún quedan " + aD.length + " asientos disponibles"
    };
};

console.log(asientosDisponibles([3,15,18,25], 15));