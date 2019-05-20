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