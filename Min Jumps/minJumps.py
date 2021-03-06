# Given an array of integers where each element represents the maximum number of steps that can be made forward from that element, write a function to return the minimum number of jumps to reach the end of the array, starting from the first element. If an element is 0, then we cannot move through that element.

# Example:

# Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
# Output: 3   // going from 1 -> 3 -> 8 -> 9

def minJumps(arr, n = None):
    if n is None:
        n = len(arr)
    
    jumps = [None] * n
    if n == 0 or arr[0] == 0:
        return float("inf")

    jumps[0] = 0

    for i in range(1, n):
        jumps[i] = float("inf")
        for j in range(0, n):
            if i <= j + arr[j] and jumps[j] != float("inf"):
                if jumps[j] is not None:
                    jumps[i] = min(jumps[i], int(jumps[j]) + 1)
                    break
    
    return jumps[n - 1]



print(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))  # should print 3
print(minJumps([1, 3, 6, 1, 0, 9]))                 # should print 3
print(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])) # should print inf
print(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]))     # should print 4