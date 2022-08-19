const prompt = require("prompt-sync")({ sigint: true })

function totalAPagar(vehiculo, litrosConsumidos) {
  let precio = 0
  if (vehiculo == "coche") {
    precio = 86
  } else if (vehiculo == "moto") {
    precio = 70
  } else if (vehiculo == "autobus") {
    precio = 75
  } else {
    console.log("su opcion no corresponde")
  }

  let precioTotal = precio * litrosConsumidos

  if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
    precioTotal = precioTotal + 50
  } else {
    precioTotal = precioTotal + 25
  }
  return precioTotal
}

function sambucheria(sambucheBase, pan, conQueso, conTomate, conLechuga, conCebolla, conMayonesa, conMostaza) {
  let precioTotal = 0

  switch (sambucheBase) {
    case "pollo":
      precioTotal = 150
      break
    case "carne":
      precioTotal = 200
      break
    case "veggie":
      precioTotal = 100
      break
    default:
      console.log("debe ingresar un valor válido de sambuche base.")
  }

  switch (pan) {
    case "blanco":
      precioTotal = precioTotal + 50
      break
    case "negro":
      precioTotal = precioTotal + 60
      break
    case "s/gluten":
      precioTotal = precioTotal + 75
      break
  }

  if (conQueso === true) {
    precioTotal = precioTotal + 20
  }
  if (conTomate === true) {
    precioTotal = precioTotal + 15
  }
  if (conLechuga === true) {
    precioTotal = precioTotal + 10
  }
  if (conCebolla === true) {
    precioTotal = precioTotal + 15
  }
  if (conMayonesa === true) {
    precioTotal = precioTotal + 5
  }
  if (conMostaza === true) {
    precioTotal = precioTotal + 5
  }

  return precioTotal
}

// ------------------------- EXTRA BONUS -------------------------- //

let numeroSecreto = (num) => {
  const numSec = Math.round(Math.random() * 10)
  if (num == numSec) {
    console.log("LA RE PEGASTE AMEO")
  } else {
    console.log("Better luck next time. Era " + numSec)
  }
}

console.log(numeroSecreto(1))

let abrirParacaidas = (vel, alt) => {
  if (vel > 1000 && alt >= 2000 && alt < 3000) {
    return true
  } else {
    return false
  }
}

// ------------------------- ESTRUCTURA SWITCH -------------------------- //

function traduccion(palabraTraducida) {
  switch (palabraTraducida) {
    case "casa":
      console.log("home")
      break
    case "pelota":
      console.log("ball")
      break
    case "arbol":
      console.log("tree")
      break
    case "genio":
      console.log("genius")
      break

    default:
      console.log("kedise")
  }
}

let valoracionDePeliculas = (val) => {
  switch (val) {
    case "Muy mala":
      console.log("Qué mal que no te gustó!")
      break
    case "Mala":
      console.log("Bueh, tampoco fue lo peor.")
      break
    case "Mediocre":
      console.log("Uh lalá Martin Scorscese!")
      break
    case "Buena":
      console.log("Espero que la hayas pasado bonito!")
      break
    case "Muy buena":
      console.log("Pegale un megusta!")
      break
    default:
      console.log("Ingresaste un valor inválido.")
  }
  console.log("Gracias por tu opinión!")
}
