// Product of All Other Numbers
// Write a function that receives an array of integers and returns an array of the products.

// For example, given

// [1, 7, 3, 4]
// your function should return

// [84, 12, 28, 21]
// by calculating

// [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// If you come up with a solution that utilizes division, that's fine. Once you get through that, challenge yourself to then come up with a solution that doesn't utilize division!

function productsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
    }
    const productsOfAllExceptAtIndex = [];

    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        productsOfAllExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    productSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        productsOfAllExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllExceptAtIndex;
}

console.log(productsExceptAtIndex([1, 2, 3, 4, 5]));   // should print [120, 60, 40, 30, 24]
console.log(productsExceptAtIndex([9, 90]));   // sould print [90, 9]