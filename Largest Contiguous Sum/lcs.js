// Given an array of positive and negative integers, write a function to find the contiguous sequence with the largest sum. Return the sum.

// Example

// const arr = [2, 3, -8, -1, 2, 4, -2, 3];
// console.log(largestContiguousSum(arr)); // should print 7

function lcs(arr) {
    let maxSum = 0;
    let sum = 0;

    for (let i = 0; i < arr.lenght; i++) {
        sum += arr[i];
        
        if(maxSum < sum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}

console.log(lcs([5, -9, 6, -2, 3])); // should print 7
console.log(lcs([1, 23, 90, 0, -9])); // should print 114
console.log(lcs([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7