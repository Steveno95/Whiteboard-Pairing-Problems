// Write a function that takes an array of integers and moves each non-zero integer to the left side of the array, then returns the number of non-zero integers. 
// The order of the non-zero integers does not matter in the mutated array.

// Examples
// Sample input: [0, 3, 1, 0, -2]
// Expected output: 3
// Expected output array state: [3, 1, -2, 0, 0]

// Sample input: [4, 2, 1, 5]
// Expected output: 4
// Expected output array state: [4, 2, 1, 5]

function zerosToTheRight(arr) {
    let left = 0;
    let right = arr.length - 1;
    let nonZeros = 0;

    while (left <= right) {
        if (arr[left] === 0 && arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
            nonZeros++;
        } else {
            if (arr[left] !== 0) {
                left++;
            }
            if (arr[right] === 0) {
                right--;
                nonZeros++;
            }
        }
    }
}