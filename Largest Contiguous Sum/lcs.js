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

    
}