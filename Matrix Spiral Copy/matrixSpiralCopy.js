// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a clockwise spiral order. 
// Your function then should return that array.

// Examples:

// input:  inputMatrix  = [[1, 2, 3, 4, 5],
//                         [6, 7, 8, 9, 10],
//                         [11, 12, 13, 14, 15],
//                         [16, 17, 18, 19, 20]
//                        ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

function spiralCopy(inputMatrix) {
    const numRows = inputMatrix.length;
    const numColumns = inputMatrix[0].length;
    let topRow = 0;
    let bottomRow = numRows - 1;
    let leftCol = 0;
    let rightCol = numColumns - 1;

    const result = [];

    while (topRow<= bottomRow && leftCol<= rightCol) {
        for (let i = leftCol; i <= rightCol; i ++) {
            result.push(inputMatrix[topRow][i]);
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            result.push(inputMatrix[i][rightCol]);
        }
        rightCol--;

        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                result.push(inputMatrix[bottomRow][i]);
            }
            bottomRow--;
        }

        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i --) {
                result.push(inputMatrix[i][leftCol]);
            }
            leftCol++;
        }
    }

    return result;
}