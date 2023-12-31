function tablaDeMultiplicar(numero) {
	let i = 1
	while (i <= 10) {
		let multiplicacion = i * numero;
		console.log(numero + " " + "*" + " " + i + " " +  "=" + " " +  multiplicacion);
		i++
	};
};

tablaDeMultiplicar(9);