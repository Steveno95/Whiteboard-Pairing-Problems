// Given an array that is sorted in ascending order containing unique integer elements, write a function that receives the sorted array as input and creates a valid binary search tree with minimal height.

// For example, given an array [1, 2, 3, 4, 5, 6, 7], your function should return a binary search tree with the form 4 / 
// 2 6 / \ / 
// 1 3 5 7

// Note that when we say "binary search tree" in this case, we're just talking about a tree that exhibits the expected form of a binary search tree. 
// The tree in this case won't have an insert method that does the work of receiving a value and then inserting it in a valid spot in the binary search tree. 
// Your function should place the values in valid spots that adhere to the rules of binary search trees, while also seeking to minimize the overall height of the tree.


function createMinBst(sortedArray) {
    return createMinBstHelper(sortedArray, 0, sortedArray.length - 1);
}

function createMinBstHelper(sortedArray, left, right) {
    if (right < left) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new BinaryTreeNode(sortedArray[mid]);

    node.left = createMinBstHelper(sortedArray, left, mid - 1);
    node.right = createMinBstHelper(sortedArray, mid + 1, right);

    return node;
}

class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

// helper function is to validate that the created tree is a valid bst
function bst(root) {
    const stack = [];
    stack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});
    while (stack.length) {
        const bounds = stack.pop();
        const node = bounds.node;
        const lowerBound = bounds.lowerBound;
        const upperBound = bounds.upperBound;
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }
        if (node.left) {
            stack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
        }
        if (node.right) {
            stack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
        }
    }
    return true;
}

// this helper function is to check the max depth of the bst
function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let bST = createMinBst(sortedArray);

console.log(bst(bST));   // should print true
console.log(maxDepth(bST));             // should print 3

sortedArray = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bST = createMinBst(sortedArray);

console.log(bst(bST));   // should print true
console.log(maxDepth(bST));             // should print 5