/* 
  1-
  Siempre hambriento
  Escribe una función a la que se le asigne un arreglo, 
  y cada vez que el valor sea "comida" debería mostrar 
  "delicioso"en la consola. Si "comida" no estaba presente
  en el arreglo, que la consola registre "Tengo hambre" una vez.
*/

function alwaysHungry(arr) {
  // tu código aquí 
  let comidaCounter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'comida') {
      console.log('delicioso')
      comidaCounter += 1

    }
  }
  if (comidaCounter === 0) {
    console.log('tengo hambre')
  }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


/* 
  2-
  Filtro paso alto
  Dado un arreglo y un valor cutoff, 
  devuelve un nuevo arreglo que contenga 
  solo los valores mayores a cutoff.
*/

function highPass(arr, cutoff) {
  const filteredArr = [];
  // tu código aquí
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr;
}
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5)); // esperamos de vuelta [6, 8, 10, 9]


/* 
  3-
  Mejor que el promedio
  Dado un arreglo de números, 
  devuelve un recuento de cuántos 
  de los números son mayores que el promedio.
*/

function betterThanAverage(arr) {
  let sum = 0;
  // calcula el promedio
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let promedio = sum / arr.length
  let count = 0
  // cuenmta cuántas variables son mayores que el promedio
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > promedio) {
      count += 1
    }
  }
  return count;
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9])); // esperamos 4 de vuelta

/*
  4-
  Arreglo invertido
  Escribe una función que invierta 
  los valores de un arreglo y los devuelva.
*/

function reverse(arr) {
  // tu código aquí
  const reversedArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i]
    reversedArray.push(currentElement)
  }
  return reversedArray;
}

console.log(reverse(["a", "b", "c", "d", "e"])); // esperamos de vuelta ["e", "d", "c", "b", "a"]


/* 
  5-
  Arreglo de Fibonacci
  Los números de Fibonacci se han estudiado durante años 
  y aparecen a menudo en la naturaleza. 
  Escribe una función que devuelva 
  un arreglo de números de Fibonacci hasta una longitud dada n.
  Los números de Fibonacci se calculan sumando los dos últimos valores
  de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor
  es 3 entonces el siguiente valor en la secuencia es 5.
*/

function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  const fibArr = [0, 1];
  // tu código aquí
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
  }
  return fibArr;
}
console.log(fibonacciArray(10)); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]