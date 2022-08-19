const prompt = require("prompt-sync")({ sigint: true })

function pulgACm(pulg) {
  return pulg * 2.54
}

function stringAURL(string) {
  return `http://www.${string}.com`
}

function admiracion(string) {
  return `${string}!!`
}

function dogAge(edad) {
  return edad * 7
}

function valorHoraDeTrabajo(sueldo) {
  return sueldo / 40
}

function calculadorIMC(altura, peso) {
  return peso / (altura * altura)
}

function toUpper(string) {
  return string.toUpperCase()
}

function tipoDeDato(data) {
  return typeof data
}

function circunferencia(radio) {
  return Math.PI * 2 * radio
}

console.log("Bienvenidos!")
console.log("1. Pase pulgadas a centímetros!")
console.log("2. Pase un string a URL!")
console.log("3. Cambie su frase a una exclamación!")
console.log("4. Pase su edad a años perro!")
console.log("5. Cuánto vale tu hora laboral?")
console.log("6. Calcule su IMC!")
console.log("7. Susurre, y luego grite!")
console.log("8. Revise el tipo de dato que tiene!")
console.log("9. Calcule la circunferencia de un círculo!")

let eleccion = prompt("Elija una opción: ")

if (eleccion == 1) {
  let parametros = prompt("Ingrese cantidad de pulgadas: ")
  console.log(`Son ${pulgACm(parametros)} cm!`)
} else if (eleccion == 2) {
  let parametros = prompt("Ingrese la palabra: ")
  console.log(`Su URL es ${stringAURL(parametros)} !`)
} else if (eleccion == 3) {
  let parametros = prompt("Enuncie algo: ")
  console.log(`${admiracion(parametros)}`)
} else if (eleccion == 4) {
  let parametros = prompt("Ingrese los años humanos: ")
  console.log(`Son ${dogAge(parametros)} años de perro!`)
} else if (eleccion == 5) {
  let parametros = prompt("Ingrese su sueldo mensual: ")
  console.log(`Son $ ${valorHoraDeTrabajo(parametros)} por hora!`)
} else if (eleccion == 6) {
  let parametro1 = prompt("Ingrese altura (en cm): ")
  let parametro2 = prompt("Ingrese peso (en kg): ")
  console.log(`Su IMC es de ${calculadorIMC(parametro1, parametro2)} !`)
} else if (eleccion == 7) {
  let parametros = prompt("Susurre algo: ")
  console.log(`${toUpper(parametros)}`)
} else if (eleccion == 8) {
  let parametros = prompt("Ingrese cualquier tipo de dato: ")
  console.log(`Su dato es un ${tipoDeDato(parametros)} !`)
} else if (eleccion == 9) {
  let parametros = prompt("Ingrese el valor del radio (en cm): ")
  console.log(`Son ${circunferencia(parametros)} cm!`)
} else {
  console.log("usted es un idiota.")
}
