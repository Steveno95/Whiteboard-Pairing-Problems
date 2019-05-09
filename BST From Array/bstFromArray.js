function createMinBst(sortedArray) {
    return createMinBst(sortedArray, 0, sortedArray.length - 1);
}

function createMinBstHelper(sortedArray, left, right) {
    if (right < left) return null;

    const mid = math.floor((left + right) / 2);
    const node = new BinaryTreeNode(sortedArray);

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

function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}