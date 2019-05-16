function rdfs(node, cb) {
    cb(node.value);

    if (node.left) {
        rdfs(node.left, cb);
    }

    if (node.right) {
        rdfs(node.right, cb);
    }
}