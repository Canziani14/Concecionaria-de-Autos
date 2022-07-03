const concesionaria = require("./concesionaria")

let listaDeVentas = function () {
   let autosVendidos = autos.filter (function(auto){
       return concesionaria.autos.vendido === true
   })
   let listaDeVentas = autosVendidos.map (function(auto){
       return listaDeVentas.precio
   }) 
   return listaDeVentas
}

module.exports=listaDeVentas;