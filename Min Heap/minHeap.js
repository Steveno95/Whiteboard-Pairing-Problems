// A min heap is a binary tree data structure that satisfies the following property: The value of every parent node is less than or equal to the values of their direct children nodes. 
// It follows then that the node at the root of the tree is the element in the heap with the minimal value.

// Implement a min heap data structure with at least the following methods:

// insert(item) adds the given item to the heap. Upon insertion, the heap property needs to be maintained.
// delete() removes and returns the root element (the min value) of the heap. Upon deletion, the heap property needs to be maintained.
// getMin() returns the minimal value of the heap in constant time. This method does not remove the minimal value from the heap.

// Examples:

// const heap = new Heap();
// console.log(heap.getMin());    // should print 'undefined'

// heap.insert(5);
// console.log(heap.getMin());   // should print 5

// heap.insert(100);
// console.log(heap.getMin());   // should print 5

// heap.insert(2);
// console.log(heap.getMin());   // should print 2

// console.log(heap.delete());   // should print 2
// console.log(heap.delete());   // should print 5
// console.log(heap.delete());   // should print 100

// console.log(heap.getMin());   // should print 'undefined'

class Heap {
    constructor() {
        this.storage = [];
    }

    insert(value) {
        const index = this.storage.push(value) - 1;
        this.bubbleUp(index);
    }

    delete() {
        if (!this.storage.length) return;
        if (this.storage.length === 1) {
            return this.storage.pop();
        }

        const min = this.storage[0];
        this.storage[0] = this.storage.pop();
        this.siftDown(0);
        return min;
    }

    getMin() {
        return this.storage[0];
    }

    bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.storage[parentIndex] > this.storage[index]) {
            [this.storage[parentIndex], this.storage[index]] = [this.storage[index], this.storage[parentIndex]];
            this.bubbleUp(parentIndex);
        }
    }

    siftDown(index) {
        const leftChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;
        let minChildIndex;

        if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
            minChildIndex = this.storage[leftChildIndex] < this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
        } else if (this.storage[leftChildIndex]) {
            minChildIndex = leftChildIndex;
        } else if (this.storage[rightChildIndex]) {
            minChildIndex = rightChildIndex;
        }

        if (this.storage[index] > this.storage[minChildIndex]) {
            [this.storage[minChildIndex], this.storage[index]] = [this.storage[index], this.storage[minChildIndex]];
            this.siftDown(minChildIndex);
        }
    }
}