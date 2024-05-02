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
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
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
