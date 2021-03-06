// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 to 9, write a function rotateImage that rotates the image by 90 degrees in the counter-clockwise direction.

// For example:

// rotateImage([
//              [1, 2],
//              [3, 4]
//            ]);
// should return

// [ 
//   [2, 4],
//   [1, 3]
// ]
// A larger example:

// rotateImage([
//   [1, 1, 5, 9, 9],
//   [2, 2, 6, 0, 0],
//   [3, 3, 7, 1, 1],
//   [4, 4, 8, 2, 2],
//   [5, 5, 9, 3, 3]
// ]);
// should return

// [ 
//   [ 9, 0, 1, 2, 3 ],
//   [ 9, 0, 1, 2, 3 ],
//   [ 5, 6, 7, 8, 9 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5 ]
// ]


function rotateImage(matrix) {
    matrix.forEach(row => row.reverse());
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}

// functional solution using .map
// function functionalRotateImage(matrix) {
//     return matrix.map(m => m.reverse())[0]
//                  .map((cv, i) => matrix.map((cv, j) => matrix[j][i]));
// }


console.log(rotateImage([
    [1, 2],
    [3, 4]
]));
// should print [ [2, 4], [1, 3] ]
console.log('-------------------');
console.log(rotateImage([
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
]));
// should print
// [ [ 9, 0, 1, 2, 3 ],
//   [ 9, 0, 1, 2, 3 ],
//   [ 5, 6, 7, 8, 9 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5 ] ]