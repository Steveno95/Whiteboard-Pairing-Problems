// Suppose we have a singly-linked list (so you can only traverse the list in one direction) class where each list node contains a single character or integer. 
// Implement a function to check if the elements in the linked list form a palindrome.

// For example, given the linked list below:

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const a = new ListNode(1);
// const b = new ListNode(2);
// const c = new ListNode(3);
// const d = new ListNode(2);
// const e = new ListNode(1);

// isLinkedListPalindrome(a);   // should return true
// isLinkedListPalindrome(b);   // should return false since now the 'a' node is not included in the linked list


class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function isLinkedListPalindrome(listNode) {
    let fast = listNode;
    let slow = listNode;
  
    const stack = [];
  
    while (fast && fast.next) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }
    // fast is a valid node, but fast.next is not
    // this means we have a list with an odd number 
    // of nodes, so we're going to skip the middle one
    if (fast) {
      slow = slow.next;
    }
    // compare each stack element with the current element
    // the slow runner sees; if there is a mismatch, return false
    while (slow) {
      const top = stack.pop();
  
      if (top !== slow.value) {
        return false;
      }
  
      slow = slow.next;
    }
  
    return true;
  }
  
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(3);
  const d = new ListNode(2);
  const e = new ListNode(1);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  console.log(isLinkedListPalindrome(a));   // should return true
  console.log(isLinkedListPalindrome(b));   // should return false since now the 'a' node is not included in the linked list