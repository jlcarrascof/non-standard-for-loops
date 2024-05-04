function secondPower(arr) {
    const finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && (arr[i] & (arr[i] - 1)) === 0 && arr[i] !== 1) {
            finalArray.push(i);
        }
    }
    return finalArray;
}

result = secondPower([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result); // Debería imprimir [1, 3, 7]
