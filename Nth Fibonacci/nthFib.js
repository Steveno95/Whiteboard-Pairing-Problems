// We can implement a naive recursive algorithm to display the nth Fibonacci number with the following code:

// function naiveNthFib(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return nthFib(n-1) + nthFib(n-2);
// }
// This solution works fine for small inputs, but even for n = 50, this function takes a significant amount of time to run.

// Implement a more efficient implementation that can handle n values at least up to 1000.

// console.log(betterNthFib(1000));  // should print 4.346655768693743e+208 in less than 1 second

cache = {}

function nthFib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n in cache) {
        return cache[n];
    }

    nth = nthFib(n - 1) + nthFib(n - 2);
    cache[n] = nth;
    return nth;
}


console.log(nthFib(50));
// should print 12586269025
// within a quick span of time (less than 1 second)

console.log(nthFib(1000));
// should print 4.346655768693743e+208
// within a quick span of time (less than 1 second)