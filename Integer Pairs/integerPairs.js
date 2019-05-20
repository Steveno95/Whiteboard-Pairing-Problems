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

function integerPairs(arr, k) {
    arr.sort((x, y) => x - y);
}


integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);  // should print '6 5', '7 4', '8 3', '9 2', '10 1'
console.log();
integerPairs([5, 5, 4], 12);                        // should not print anything
console.log();
integerPairs([99, 45, 38, 1, 68, 78], 100);         // should print '1 99'