// Definir el array

const electrodomesticos = ['lavarropas','microondas','cafetera','televisor','minipimer','tocadiscos'];

// Imprimir diferentes elementos del array

// console.log(electrodomesticos[3]);
// console.log(electrodomesticos[0]);
// console.log(electrodomesticos[5]);

// Extraer el primer elemento del array y colocarlo al final

electrodomesticos.push(electrodomesticos.shift());

console.log(electrodomesticos);

// Agregar al final del array 2 nuevos productos

electrodomesticos.push('batidora','exprimidor');

console.log(electrodomesticos);

// Mostrar por consola la cantidad de elementos que tiene el array

console.log(electrodomesticos.length);

// Buscar un elemento en el array 

if (electrodomesticos.includes('exprimidor')) {
    console.log('Producto encontrado');
} else {
    console.log('Producto buscado no existe')
};

// Unir todos los elementos del array en un nuevo string separado por un espacio en blanco

const nuevoString = electrodomesticos.join(' ');

console.log(nuevoString);

// Determinar la cantidad de elementos de la nueva cadena de texto

console.log(nuevoString.length);

// Reemplazar un elemento de la string por otro

const otraString = nuevoString.replace('televisor', 'pavaElectrica');

console.log(otraString);

// Crea un nuevo array a partir del último string generado

const nuevoArray = otraString.split(' ');

console.log(nuevoArray);



