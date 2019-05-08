def sortTopSCores(scores, highestPossibleScore):
  orderList = []
  for score in scores:
    if score <= highestPossibleScore:
      orderList += [score]
  return sorted(orderList)[::-1]

print(sortTopSCores([7, 102, 28, 97, 96, 97], 1000))