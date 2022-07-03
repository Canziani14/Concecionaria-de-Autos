const concesionaria = require("./concesionaria");


let buscarAuto = function (patente) {
    for (let i = 0; i < concesionaria.autos.length; i++) {
        if (patente === concesionaria.autos[i].patente) {
            return this.autos[i]
        }
    }
    console.log("AUTO NO DISPONIBLE: ")
    return null
}


module.exports = buscarAuto;