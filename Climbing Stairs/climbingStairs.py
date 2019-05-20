# A child is running up a staircase that has n steps. The child can hop either 1, 2, or 3 steps at a time. Write a function climbStairs that counts the number of possible ways in which the child can climb the staircase.

# For example, for a staircase with n = 3 (the stair has 3 steps), there are 4 ways to climb the staircase:

# 3 hops of 1
# A jump of 1 followed by a jump of 2
# A jump of 2 followed by a jump of 1
# A single jump of 3
# So climbStairs(3) should return 4.


def climbing_stairs(n, cache = {}):
  if n == 0 or n == 1:
    return 1
  if n == 2:
    return 2

  if n not in cache:
    cache[n] = climbing_stairs(n - 1) + climbing_stairs(n - 2) + climbing_stairs(n - 3)

  return cache[n]

print(climbing_stairs(3))