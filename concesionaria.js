
const autos = require ("./autos");
const buscarAuto = require ("./buscarAuto");
const venderAuto = require ("./venderAuto");
const autosParaLaVenta = require ("./autosParaLaVenta");
const autosNuevos = require("./autosNuevos");
const listaDeVentas =  require("./listaDeVentas");
const totalDeVentas =  require("./totalDeVentas");
const puedeComprar =  require("./puedeComprar");
const autosQuePuedeComprar =  require("./autosQuePuedeComprar");
const persona = require ("./persona")




let concesionaria = {
    autos,
    buscarAuto,
    venderAuto,
    autosParaLaVenta,
    autosNuevos,
    listaDeVentas,
    totalDeVentas,
    puedeComprar,
    autosQuePuedeComprar

}

module.exports=concesionaria;




//1 buscaAuto
//console.log (concesionaria.buscarAuto("JJK116"))
//1 busca auto y no se encuentra
//console.log (concesionaria.buscarAuto("ABC123"))

//2 venderAuto
//console.log (concesionaria.venderAuto("JJK116"))
//2 vender auto y no se encuentra
//console.log (concesionaria.venderAuto("ABC123"))    reparar para que no arroje error

//3 listar autos para la venta
//console.log(concesionaria.autosParaLaVenta)   reparar para que arroje el nuevo array

//4 autosNuevos
//console.log (concesionaria.autosNuevos)

//5 lista de ventas
//console.log(concesionaria.listaDeVentas);