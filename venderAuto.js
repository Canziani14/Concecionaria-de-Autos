const concecionaria = require("./concesionaria")




let venderAuto = function (patente) {
    let venderAuto = concecionaria.buscarAuto(patente)
    if (patente!=null) {
        console.log("AUTO VENDIDO!")
        venderAuto.vendido=true
        return venderAuto
    }
}


module.exports = venderAuto;