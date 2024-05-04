function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    const lengthArray = arr.length; // 7
    const resultArray = [];
    // Determine if it is a pair or odd number
    const limit = Math.ceil(lengthArray / 2);
    if (limit !== 0) {
        for (let i = limit; i < arr.length; i++) {
            resultArray.push(arr[i]);
        }
    }

    return resultArray;
}

result = secondHalf([8, 4, 3, 7, 6, 2, 5]); // 7 elements
console.log(result); // Expected result: [6, 2, 5];
