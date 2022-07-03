const concesionaria = require("./concesionaria");



let autosParaLaVenta = function () {

    let autosSinVender = concesionaria.autos.filter(function (auto) {
        return auto.vendido === false;
    })
    return autosSinVender;
}


module.exports = autosParaLaVenta;