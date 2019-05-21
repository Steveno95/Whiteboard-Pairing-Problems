# Given a pointer to the head element of a linked list, write a function that also takes an integer parameter k and returns the kth to last node of the list.
# For example:
# class ListNode {
#  constructor(value) {
#    this.value = value;
#    this.next = null;
#  }
# }

# let a = new ListNode("Australian Sheperd");
# let b = new ListNode("Beagle");
# let c = new ListNode("Cairne Terrier");
# let d = new ListNode("Dobermann");
# let e = new ListNode("English Mastiff");

# a.next = b;
# b.next = c;
# c.next = d;
# d.next = e;

# kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)


def kthToLastNode(k, head):
    if k < 1:
        raise Exception(f"Impossible to find less than first node: {k}")

    leftNode = head
    rightNode = head

    for i in range(k - 1):
        if not rightNode.next:
            raise Exception(f"k is bigger than the length of the list: {k}")

        rightNode = rightNode.next
    
    while rightNode.next:
        leftNode = leftNode.next
        rightNode = rightNode.next

    return leftNode.value