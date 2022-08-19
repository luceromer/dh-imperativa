const prompt = require("prompt-sync")({ sigint: true })

// //ACTIVIDAD 1) TE ESTÁS LEVANTANDO EN UN HOTEL

let horaDeDespertada = prompt("A qué hora te levantaste? ")
const HORAINICIODESAYUNO = 700
const HORAFINDESAYUNO = 1030
let llegueAlDesayuno = horaDeDespertada >= HORAINICIODESAYUNO && horaDeDespertada <= HORAFINDESAYUNO
let menuDesayuno = prompt("Qué desea desayunar? ")
let esRoomService = true
console.log(llegueAlDesayuno)
