# Given a binary tree like the following:

# class BinaryTreeNode {
#   constructor(value) {
#     this.value = value;
#     this.left = null;
#     this.right = null;
#   }

#   insertLeft(value) {
#     this.left = new BinaryTreeNode(value);
#     return this.left;
#   }

#   insertRight(value) {
#     this.right = new BinaryTreeNode(value);
#     return this.right;
#   }
# }
# Write a function that accepts a binary tree node and returns true if the tree rooted at that node forms a valid binary search tree.

# Example:

# const root = new BinaryTreeNode(10);
# root.insertLeft(5);
# root.insertRight(15);

# isBinarySearchTree(root);   // should return true
# Keep in mind that it isn't enough to check that nodes in the left subtree are always descending as we traverse down. 
# Conversely, it isn't enough to simply check that all the nodes in the right subtee are ascending.


class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insertLeft(self, value):
        self.left = BinaryTreeNode(value)
        return self.left

    def insertRight(self, value):
        self.right = BinaryTreeNode(value)
        return self.right

def isBinarySearchTree(root):
    nodeBoundsStack = []
    nodeBoundsStack.append({'node': root, 'lower': float('-inf'), 'upper': float('inf')})
    
    while len(nodeBoundsStack):
        nodeBounds = nodeBoundsStack.pop()
        node = nodeBounds['node']
        lower = nodeBounds['lower']
        upper = nodeBounds['upper']

        if node.value <= lower or node.value >= upper:
            return False

        if node.left:
            nodeBoundsStack.append({'node': node.left, 'lower': lower, 'upper': node.value})

        if node.right:
            nodeBoundsStack.append({'node': node.right, 'lower': node.value, 'upper': upper})

    return True


# Tests
root = BinaryTreeNode(50)
root.insertLeft(30)
root.left.insertLeft(20)
root.left.insertRight(60)
root.insertRight(80)
root.right.insertLeft(70)
root.right.insertRight(90)

print(isBinarySearchTree(root.left))  # should print True
print(isBinarySearchTree(root.right)) # should print True
print(isBinarySearchTree(root))       # should print False