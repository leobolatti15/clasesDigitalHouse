const autosImportados = require('./autos');

const concesionaria = {

   autos: autosImportados,

   buscarAuto: function(patente) {

      const auto = this.autos.find((auto) => auto.patente === patente);

      if (auto === undefined) {

         return null;

      }

      return auto;

   },

   venderAuto: function(patente) {

      const auto = this.buscarAuto(patente);

      if (auto !== null) {

         auto.vendido = true;

      }

   },

   autosParaLaVenta: function() {

      return this.autos.filter((auto) => auto.vendido === false);

   },

   autosNuevos: function() {

      const autos = this.autosParaLaVenta();

      return autos.filter((auto) => auto.km < 100);

   },

   listaDeVentas: function() {

      const autosVendidos = this.autos.filter((auto) => auto.vendido === true);

      return autosVendidos.map((auto) => auto.precio);

   },

   totalDeVentas: function() {

      const listaDeVentas = this.listaDeVentas();

      return listaDeVentas.reduce((total, precio) => total + precio, 0);

   },

puedeComprar: function(patente, persona) {
    const auto = this.autos.find((auto) => auto.patente === patente); 
      const costoTotal = auto.precio
      const costoCuota = auto.precio / auto.cuotas
      if (costoTotal < persona.capacidadDePagoTotal && costoCuota < persona.capacidadDePagoEnCuotas) {
         return true;
      }
        return null;
   },

};

const persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 200000
    }

console.log(concesionaria.puedeComprar('APL123', persona));
