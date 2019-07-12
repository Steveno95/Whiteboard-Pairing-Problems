// Given a matrix (a two-dimensional array), whose width and height do not necessarily match, 
// containing distinct integers where each row is sorted and each column is also sorted, 
// write a function that searches for a target value in the matrix. The function should return a tuple (or two-element array) of the row and column indices of the target value. 
// If the target value is not found in the array, the function should return [-1, -1].

// Sample input: 45, 
// [ 
// [1, 4, 7, 12, 15, 999], 
// [2, 5, 19, 32, 35, 1001], 
// [4, 8, 24, 34, 36, 1002], 
// [40, 41, 42, 44, 45, 1003], 
// [98, 99, 101, 104, 190, 1009], 
// ]

// Expected output: [3, 4]

function searchSortedMatrix(matrix, target) {
    var m = matrix.length,
        n = matrix[0].length,
        row = 0,
        col = n - 1;

    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
        return [-1, -1];
    }

    while (row <= (n - 1) && col >= 0) {
        if (matrix[row][col] < target) {
            row++;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            return [row, col];
        }
    }
    return [-1, -1];
}


const matrix = [ 
    [1, 4, 7, 12, 15, 999], 
    [2, 5, 19, 32, 35, 1001], 
    [4, 8, 24, 34, 36, 1002], 
    [40, 41, 42, 44, 45, 1003], 
    [98, 99, 101, 104, 190, 1009], 
];

console.log(searchSortedMatrix(matrix, 1));    // should print [0, 0]
console.log(searchSortedMatrix(matrix, 7));    // should print [0, 2]
console.log(searchSortedMatrix(matrix, 999));  // should print [0, 5]
console.log(searchSortedMatrix(matrix, 1001)); // should print [1, 5]
console.log(searchSortedMatrix(matrix, 104));  // should print [4, 3]
console.log(searchSortedMatrix(matrix, 1010)); // should print [-1, -1]