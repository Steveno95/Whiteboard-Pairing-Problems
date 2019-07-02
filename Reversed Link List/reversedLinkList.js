// Reverse a Linked List
// Write a function reverseLinkedList that receives a linked list node as input and then reverses the list, starting from the given node. Do this in-place without using any extra memory. Your function should return the value of the new head of the list.

// Here is a simple Linked List class:

// JavaScript:

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function reversedLinkedList(node) {
    let current = node;
    let nextNode = null;
    let prevNode = null;

    while (current) {
        nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

