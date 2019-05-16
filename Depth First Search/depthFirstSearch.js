function rdfs(node, cb) {
    cb(node.value);

    if (node.left) {
        rdfs(node.left, cb);
    }

    if (node.right) {
        rdfs(node.right, cb);
    }
}

function idfs(node, cb) {
    const stack = [];
    stack.push(node);

    while (stack.length > 0) {
        const current = stack.pop();

        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }

        cb(current.value);
    }
}

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }
    
    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}