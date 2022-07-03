const concesionaria = require("./concesionaria");

var ventas = concesionaria.listaDeVentas();

let totalDeVentas = ventas.reduce(function(acum, ventas){
    return acum+ventas;
})


module.exports = totalDeVentas;