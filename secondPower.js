function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    const finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && (arr[i] & (arr[i] - 1)) === 0) {
            finalArray.push(i);
        }
    }
    return finalArray;
}

result = secondPower([5, 8, 33, 15, 16]);
console.log(result);
