# Assume we have a Stack class given by the following code:

# class Stack {
#   constructor() {
#     this.items = [];
#   }

#   push(item) {
#     this.items.push(item);
#   }

#   pop() {
#     if (this.items.length) {
#       return this.items.pop();
#     }
#     return null;
#   }

#   peek() {
#     if (this.items.length) {
#       return this.items[this.items.length-1];
#     }
#     return null;
#   }
# }
# We wish to augment this Stack class such that we can always fetch the max value from the Stack in constant time.

# Use the given Stack class to implement a new MaxStack class that has all the same methods as the base Stack class, 
# along with a getMax method that returns the max value of the MaxStack in O(1) time. getMax should not remove the item.


class Stack:
    def __init__(self):
        self.items = []

    def push(self, items):
        self.items.append(items)

    def pop(self):
        if len(self.items) > 0:
            return self.items.pop()
        else:
            return None
    
    def peek(self):
        if len(self.items) > 0:
            return self.items[len(self.items) - 1]
        else:
            return None


class MaxStack:
    def __init__(self):
        self.stack = Stack()
        self.maxValues = Stack()
    
    