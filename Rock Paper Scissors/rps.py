import sys

def rps(n):
    base = [['rock'], ['paper'], ['scissors']]
    prev_list = [['rock'], ['paper'], ['scissors']]
    result = []

    if n == 0:
        return [[]]

    if n == 1:
        return base
    
    