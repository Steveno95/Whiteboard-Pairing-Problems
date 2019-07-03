# Like arrays that you saw in C, a ring buffer is a non-growable buffer with a fixed size. In this case, however, that turns out to be a feature of the data structure.

# When the ring buffer is full and a new element is inserted, the oldest element in the ring buffer is overwritten with the newest element. 
# This kind of data structure is very useful for use cases such as storing logs and history information,
# where you typically want to store information up until it reaches a certain age, after which you don't care about it anymore and don't mind seeing it overwritten by newer data.

# Implement this behavior in the RingBuffer class. RingBuffer has two methods, append and allValues. 
# The append method adds elements to the buffer. 
# The allValues method returns all of the elements in the buffer ordered from oldest to newest. 
# In other words, least-recently added elements first, then most-recently added elements.

# For example:

# buffer = RingBuffer(3)

# buffer.append('a')
# buffer.append('b')
# buffer.append('c')

# buffer.allValues()   # should return ['a', 'b', 'c']

# buffer.append('d')

# buffer.allValues()   # should return ['d', 'b', 'c']

# buffer.append('e')
# buffer.append('f')

# buffer.allValues()   # should return ['d', 'e', 'f']


class RingBuffer:
    def __init__(self, capacity):
        self.capacity = capacity
        self.current = 0
        self.storage = [None]*capacity

    def append(self, item):
        self.storage[self.current] = item
        self.current += 1

        if self.current == self.capacity:
            self.current = 0
    
    def allValues(self):
        return self.storage

buffer = RingBuffer(5)

buffer.append('a')
buffer.append('b')
buffer.append('c')
buffer.append('d')
print(buffer.allValues()) # should print ['a', 'b', 'c', 'd', 'None']

buffer.append('e')
print(buffer.allValues()) # should print ['a', 'b', 'c', 'd', 'e']

buffer.append('f')
print(buffer.allValues()) # should print ['f', 'b', 'c', 'd', 'e']

buffer.append('g')
buffer.append('h')
buffer.append('i')
print(buffer.allValues()) # should print ['f', 'g', 'h', 'i', 'e']
