const concesionaria = require("./concesionaria")

let autosNuevos = function () {

    let autos = concesionaria.autosParaLaVenta();
    let autosNuevos = autos.filter(function (autos) {
        return autos.km < 100
    })
    return autosNuevos
}

module.exports=autosNuevos;