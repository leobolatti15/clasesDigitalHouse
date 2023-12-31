const meses = [300,0,-250,-100,0,400,600,1200,5000,0,1000,1000];

function sumatoriaBajoImporte(array) {
    let sumatoria = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] <= 1000) {
            sumatoria = sumatoria + array[i];
        };
    };
    return sumatoria;
};

console.log(sumatoriaBajoImporte(meses));




