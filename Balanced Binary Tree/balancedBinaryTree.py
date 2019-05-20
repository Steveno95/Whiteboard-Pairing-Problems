# write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. 
# Your function should return true if the tree is perfectly balanced and false otherwise.

def checkBalance(root):
    if root == None:
        return True

    def minDepth(node):
        if node == None:
            return 0
        return 1 + min(minDepth(node.left), minDepth(node.right))

    def maxDepth(node):
        if node == None:
            return 0
        return 1 + max(maxDepth(node.left), maxDepth(node.right))

    return maxDepth(root) - minDepth(root) == 0

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

root = BinaryTreeNode(5)
print(checkBalance(root)) # should print true

root.insertLeft(10)
print(checkBalance(root)) # should print false

root.insertRight(11)
print(checkBalance(root)) # should print true