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
    