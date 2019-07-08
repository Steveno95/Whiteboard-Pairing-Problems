import sys

def rps(n):
    base = [['rock'], ['paper'], ['scissors']]
    prev_list = [['rock'], ['paper'], ['scissors']]
    result = []

    if n == 0:
        return [[]]

    if n == 1:
        return base
    
    count = 1
    while count != n:
        for inner_list in prev_list:
            for base_item in base:
                temp_inner_list = inner_list.copy()
                temp_inner_list.append(base_item[0])
                result.append(temp_inner_list)

        count += 1
        prev_list = result.copy()
        result = []
    return prev_list

