// Write a function integerPairs to find and print out all pairs of integers within an input array which sum up to a specified input value k.

// There are multiple ways to do this, depending upon whether you want to favor runtime or space.

// Example:

// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// should print '6 5', '7 4', '8 3', '9 2', '10 1'


function integerPairs(arr, k) {
    const hash = {};
    arr.forEach((x, i) => {
        if (hash[k - x]) {
            console.log(x, k - x);
        } else {
            hash[x] = i + 1;
        }
    });
}


// another way to write the function

// function integerPairs(arr, k) {
//     arr.sort((x, y) => x - y);
    
//     let first = 0;
//     let last = arr.length - 1;

//     while (first < last) {
//         const sum = arr[first] + arr[last];
//         if (sum === k) {
//             console.log(arr[first], arr[last]);
//             first ++;
//             last --;
//         } else {
//             if (sum < k) first ++;
//             else last--;
//         }
//     }
// }


integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);  // should print '6 5', '7 4', '8 3', '9 2', '10 1'
console.log();
integerPairs([5, 5, 4], 12);                        // should not print anything
console.log();
integerPairs([99, 45, 38, 1, 68, 78], 100);         // should print '1 99'