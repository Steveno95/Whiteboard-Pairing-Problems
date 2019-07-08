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

if __name__ == "__main__":
    rv1 = rps(2)
    print(rv1)  # should print [['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'], ['paper', 'rock'], ['paper', 'paper'], ['paper', 'scissors'], ['scissors', 'rock'], ['scissors', 'paper'], ['scissors', 'scissors']]

    rv2 = rps(3)
    print(len(rv2))  # should print 27

    rv3 = rps(4)
    print(len(rv3))  # should print 81

    rv4 = rps(5)
    print(len(rv4))  # should print 243