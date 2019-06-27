# Implement a Queue with Two Stacks
# Implement a Queue data structure that exhibits FIFO ordering, has an enqueue method to add elements to the Queue, a dequeue method to remove the next element from the Queue, and a peek method that returns the next Queue element but does not remove that element from the Queue (in other words, the peek method should return the same thing as the dequeue method, except peek doesn't modify the contents of the Queue).

# You are allowed to use up to two arrays except you are limited to array methods that you would find on a Stack data structure, i.e. adding to the end of the array and removing the most recently added element. You may also index into the arrays.

# Analyze the time and space complexity of your solution.

class Queue:
    def __init__(self):
        self.inStack = []
        self.outStack = []
    
    def enqueue(self, item):
        self.inStack.append(item)

    def dequeue(self):
        if len(self.outStack) == 0:
            while len(self.inStack) > 0:
                self.outStack.append(self.inStack.pop())
        
        return self.outStack.pop()

    def peek(self):
        if len(self.inStack) == 0:
            return None
        else:
            while len(self.inStack) > 0:
                self.outStack.append(self.inStack.pop())
        
        return self.outStack[0]