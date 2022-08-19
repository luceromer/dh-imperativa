// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

console.log("next10 de 10")

let next10 = (numb) => {
  for (let i = numb; i <= numb + 10; i++) {
    console.log(i)
  }
}

next10(10)

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

console.log("fiveTwenty")

let fiveTwenty = () => {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i)
  }
}

fiveTwenty()

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

let hundredSum = () => {
  let counter = 0
  for (let i = 0; i <= 100; i++) {
    counter = counter + i
  }
  return counter
}

console.log("hundredSum", hundredSum())

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

let factorialNumber = (num) => {
  let counter = 1
  for (let i = 1; i <= num; i++) {
    counter = counter * i
  }
  return counter
}

console.log("factorialNumber", factorialNumber(10))

// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

console.log("fibonacci")

function fibonacci(lim) {
  let prePre = 0
  let pre = 1
  let act = 1

  while (act < lim) {
    act = prePre + pre
    prePre = pre
    pre = act
    console.log(prePre)
  }
}

fibonacci(100)
