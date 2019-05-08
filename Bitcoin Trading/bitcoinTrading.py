def is_max_profit_negative(prices):
  for i in range(0, len(prices) - 1):
    if prices[i] < prices[i + 1]:
      return False
  return True

def find_max_profit(prices):
  if len(prices) == 0:
    return 0

  if is_max_profit_negative(prices) == True:
    return -prices[-1]

  profit = 0
  cheapest = prices[0]
  
  for i in range(1, len(prices)):
    cheapest = min(cheapest, prices[i])
    profit = max(profit, prices[i] - cheapest)

  return profit

print(find_max_profit([10, 7, 5, 8, 11, 9]));       # should print 6
print(find_max_profit([1050, 270, 1540, 3800, 2]))  # should print 3530
print(find_max_profit([100, 90, 80, 50, 20, 10]));  # should print -10
print(find_max_profit([100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79]));   # should print 94



# The Model Solution Code 

  # cheapest = prices[0]
  # profit = prices[1] - cheapest

  # for i in prices[1:]:
  #   profit = max(profit, i - cheapest)
  #   cheapest = min(cheapest, i)