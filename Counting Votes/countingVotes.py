def count_votes(arr):
    counts = {}
    max_votes = 0
    winner = ''

    for vote in arr:
        if vote not in counts:
            counts[vote] = 0

        counts[vote] += 1

        if counts[vote] > max_votes:
            max_votes = counts[vote]

            winner = vote

        elif counts[vote] == max_votes:
            if vote > winner:
                winner = vote
    
    return winner


print(count_votes(['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael',])) # should print michael
print(count_votes(['john', 'johnny', 'jackie', 'johnny', 'john', 'jackie', 'jamie', 'jamie', 'john', 'johnny', 'jamie', 'johnny', 'john',])) # should print johnny