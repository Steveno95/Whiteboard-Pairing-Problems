def climbing_stairs(n, cache = {}):
  if n == 0 or n == 1:
    return 1
  if n == 2:
    return 2

  if n not in cache:
    cache[n] = climbing_stairs(n - 1) + climbing_stairs(n - 2) + climbing_stairs(n - 3)

  return cache[n]

print(climbing_stairs(3))