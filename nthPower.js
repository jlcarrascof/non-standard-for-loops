function nthPower(arr, n) {
    let result = []; // Inicializar arreglo vacío para los resultados
    for (let i = 0; i < arr.length; i++) { // Iterar sobre el arreglo
        if (arr[i] > 0) { // Asegurarse de que el elemento sea positivo
            let exponent = Math.round(Math.log(arr[i]) / Math.log(n));
            // Verificar si n elevado a ese exponente redondeado es igual al elemento
            if (Math.pow(n, exponent) === arr[i]) {
                result.push(i); // Si es igual, agregar el índice al arreglo de resultados
            }
        }
    }
    return result; // Devolver el arreglo de resultados
}

// Uso del ejemplo

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var n = 2;
var result = nthPower(arr, n);
console.log(result);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n = 3;
result = nthPower(arr, n);
console.log(result);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
n = 4;
result = nthPower(arr, n);
console.log(result);
