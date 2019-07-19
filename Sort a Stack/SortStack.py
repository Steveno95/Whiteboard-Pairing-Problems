# Write a function sortStack that receives a stack of integers into ascending order (with largest integers on top) and returns another stack with sorted integers. 
# You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure.

# Given a Stack class like the following:

# class Stack {
#   constructor() {
#     this.storage = [];
#   }

#   push(item) {
#     this.storage.push(item);
#   }

#   pop() {
#     return this.storage.pop();
#   }

#   peek() {
#     return this.storage[this.storage.length-1];
#   }

#   isEmpty() {
#     return this.storage.length === 0;
#   }

#   printContents() {
#     this.storage.forEach(elem => console.log(elem));
#   }
# }

# Example:

# const s = new Stack();
# s.push(4);
# s.push(10);
# s.push(8);
# s.push(5);
# s.push(1);
# s.push(6);

# const sortedStack = sortStack(s); // sortedStack is also a Stack instance

# sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10


class Stack:
    def __init__(self):
        self.storage = []

    def push(self, item):
        self.storage.append(item)

    def pop(self):
        return self.storage.pop()

    def peek(self):
        return self.storage[len(self.storage) - 1]

    def is_empty(self):
        return len(self.storage) == 0

    def print_stack(self):
        for x in self.storage:
            print(x)

def sortStack(s):
    output = Stack()
    while not s.is_empty():
        temp = s.pop()
        while not output.is_empty() and output.peek() > temp:
            s.push(output.pop())

        output.push(temp)
    return output

