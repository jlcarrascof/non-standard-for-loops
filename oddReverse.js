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

result = oddReverse([8, 5, 6, 9, 3]);
console.log(result);
