function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    var lengthArray = arr.length; // 7
    var resultArray = [];
    // Determine if it is a pair or odd number
    var limit = Math.abs(lengthArray / 2);
    for (let i=0; i < limit; i++) {
        resultArray.push(arr[i]);
    }

    return resultArray;
}

result = firstHalf([8, 4, 3, 7, 6, 2, 5]); // 7 elements
console.log(result); // Expected result: [8, 4, 3, 7];
