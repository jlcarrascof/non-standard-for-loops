function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    var oddArray = [];
    for (let i=0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let finalArray = [];
    for (let i=arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            finalArray.push(arr[i]);
        }
    }

    return finalArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    const finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && (arr[i] & (arr[i] - 1)) === 0 && arr[i] !== 1) {
            finalArray.push(i);
        }
    }
    return finalArray;
}

function nthPower(arr, n) {
    let result = []; // Inicializar arreglo vacío para los resultados
    for (let i = 0; i < arr.length; i++) { // Iterar sobre el arreglo
        // Calcular el logaritmo base n del elemento arr[i]
        if (arr[i] > 0 && Number.isInteger(Math.log(arr[i]) / Math.log(n))) {
            // Verificar si el logaritmo es un número entero
            let exponent = Math.log(arr[i]) / Math.log(n);
            // Verificar si n elevado a ese exponente es igual al elemento
            if (Math.pow(n, exponent) === arr[i]) {
                result.push(i); // Si es igual, agregar el índice al arreglo de resultados
            }
        }
    }
    return result; // Devolver el arreglo de resultados
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
