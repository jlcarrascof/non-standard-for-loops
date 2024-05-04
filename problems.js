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
      if (arr[i] !== 0 && (arr[i] & (arr[i] - 1)) === 0) {
        finalArray.push(i);
      }
    }
    return finalArray;
}

function nthPower(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            let exponent = Math.round(Math.log(arr[i]) / Math.log(n));
            if (Math.pow(n, exponent) === arr[i]) {
                result.push(i);
            }
        }
    }
    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    var lengthArray = arr.length; // 7
    var resultArray = [];
    // Determine if it is a pair or odd number
    var limit = Math.abs(lengthArray / 2);
    if (limit !== 0) {
        for (let i=0; i < limit; i++) {
            resultArray.push(arr[i]);
        }
    }

    return resultArray;
}

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

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
