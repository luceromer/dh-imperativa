const prompt = require("prompt-sync")({ sigint: true })

// CALCULADORA //

let sumar = (a, b) => a + b
let restar = (a, b) => a - b
let multiplicar = (a, b) => a * b
let dividir = (a, b) => a / b

console.log("Testeo de operaciones")

let par1 = parseInt(prompt("Ingrese un número: "))
let par2 = parseInt(prompt("Súmele otro número: "))
console.log("Esto dio " + sumar(par1, par2))

par1 = parseInt(prompt("Ingrese un número: "))
par2 = parseInt(prompt("Réstele otro número: "))
console.log("Esto dio " + restar(par1, par2))

par1 = parseInt(prompt("Ingrese un número: "))
par2 = parseInt(prompt("Multiplíquelo por otro número: "))
console.log("Esto dio " + multiplicar(par1, par2))

par1 = parseInt(prompt("Ingrese un número: "))
par2 = parseInt(prompt("Divídale otro número: "))
console.log("Esto dio " + dividir(par1, par2))

// FUNCIONES EXTRA

let cuadradoDeUnNumero = (a) => multiplicar(a, a)
let promedioDeTresNumeros = (a, b, c) => sumar(sumar(a, b), c) / 3
let calcularPorcentaje = (a, b) => multiplicar(a, dividir(b, 100))
let generadorDePorcentaje = (a, b) => multiplicar(dividir(a, b), 100)
