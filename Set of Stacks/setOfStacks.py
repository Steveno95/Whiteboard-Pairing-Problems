# Imagine a literal stack of plates. If the stack gets too high, it might topple. So in real life, we would start a new stack of plates when the previous stack exceeds some threshold.

# Implement a data structure SetOfStacks that implements this behavior. 
# The SetOfStacks data structure should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 
# SetOfStacks.push() and SetOfStacks.pop() should behave identically as if it were a single stack. Additionally, add a method that returns the number of stacks in the set.

# Follow up: Implement a function popAt that receives an integer index and pops from the stack located at that index in the set of stacks.

# Example:

# declare a new `SetOfStacks` where each stack has a capacity of 3
# const stacks = new SetOfStacks(3);

# stacks.push(10);
# stacks.push(9);
# stacks.push(8);
# stacks.push(7);

# console.log(stacks.length);   // should print 2

# console.log(stacks.popAt(0)); // should print 8
# console.log(stacks.pop());    // should print 7
# console.log(stacks.pop());    // should print 9

# console.log(stacks.length);   // should print 1


class SetOfStacks:
    def __init__(self, capacity):
        self.capacity = capacity
        self.stacks = [[]]
        self.stackIndex = 0

    def __len__(self):
        return self.stackIndex + 1

    def push(self, item):
        if len(self.stacks[self.stackIndex]) < self.capacity:
            self.stacks[self.stackIndex].append(item)
        else:
            self.stacks.append([])
            self.stackIndex += 1
            self.stacks[self.stackIndex].append(item)

    def pop(self):
        if len(self.stacks[self.stackIndex]) == 0:
            self.stackIndex -= 1
        return self.stacks[self.stackIndex].pop()

    def popAt(self, index):
        return self.stacks[index].pop()


stacks = SetOfStacks(3)
stacks.push(6)
stacks.push(8)
stacks.push(3)
print(len(stacks))  # should print 1

stacks.push(4)
print(len(stacks)) # should print 2

print(stacks.popAt(0)) # should print 3

print(stacks.pop()) # should print 4
print(stacks.pop()) # should print 8
print(len(stacks)) # should print 1