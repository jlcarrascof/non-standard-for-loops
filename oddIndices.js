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

result = oddIndices([8, 5, 6, 9, 3]);
console.log(result);
