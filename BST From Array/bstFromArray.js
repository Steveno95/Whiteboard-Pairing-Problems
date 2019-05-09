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