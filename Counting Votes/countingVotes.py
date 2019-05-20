# You've been hired to write the software to count the votes for a local election. 
# Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. 
# Your function should return the name of the winner of the election. 
# In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).


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