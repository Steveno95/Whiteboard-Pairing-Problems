# Write a class TempTracker that tracks the max, min, mean, and mode of temperature values as they are inserted into the tracker. This class should have the following methods:

# insert() - records a new temperature.
# getMax() - returns the highest temperature we've seen so far.
# getMin() - returns the lowest temperature we've seen so far.
# getMean() - returns the mean of all temperatures we've seen so far.
# getMode() - returns a mode of all temperatures we've seen so far.
# Favor speeding up the get methods over the insert method. Aim to get each of the get methods down to constant runtime.

# getMean() should return a float. The rest of the methods can return integers. Temperatures should be recorded in Fahrenheit, so we can assume a range of 0 to 140.

# If there is more than one mode, return any of the modes.


class TempTracker:
    def __init__(self):
        self.occurrences = [0] * 140
        self.max_occurrences = 0
        self.mode = None
        self.n_readings = 0
        self.total_sum = 0
        self.mean = 0
        self.min_temp = None
        self.max_temp = None

    def insert(self, temp):
        self.occurrences[temp] += 1
        if self.occurrences[temp] > self.max_occurrences:
            self.mode = temp
            self.max_occurrences = self.occurrences[temp]
        self.n_readings += 1
        self.total_sum += temp
        self.mean = float(self.total_sum) / self.n_readings
        if not self.max_temp or temp > self.max_temp:
            self.max_temp = temp
        if not self.min_temp or temp < self.min_temp:
            self.min_temp = temp
    
    def getMax(self):
        return self.max_temp

    def getMin(self):
        return self.min_temp

    def getMean(self):
        return self.mean

    def getMode(self):
        return self.mode

if __name__ == '__main__':
  tracker = TempTracker()
  tracker.insert(32)

  print(f"mean: {tracker.getMean()}")  # should print 32.0
  print(f"min: {tracker.getMin()}")    # should print 32
  print(f"max: {tracker.getMax()}")    # should print 32
  print(f"mode: {tracker.getMode()}")  # should print 32

  tracker.insert(135)

  print(f"mean: {tracker.getMean()}")  # should print 83.5
  print(f"min: {tracker.getMin()}")    # should print 32
  print(f"max: {tracker.getMax()}")    # should print 135
  print(f"mode: {tracker.getMode()}")  # can print either 32 or 135

  tracker.insert(135)

  print(f"mean: {tracker.getMean()}")  # should print 100.66666666666667
  print(f"min: {tracker.getMin()}")    # should print 32
  print(f"max: {tracker.getMax()}")    # should print 135
  print(f"mode: {tracker.getMode()}")  # should print 135


