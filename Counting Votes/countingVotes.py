# You've been hired to write the software to count the votes for a local election. 
# Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. 
# Your function should return the name of the winner of the election. 
# In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).


def count_votes(arr):
    counts = {}
    max_votes = 0
    winner = ''

    # iterate of the whole array
    for vote in arr:
        # if name doesn't exist in counts add it with a value of 0
        if vote not in counts:
            counts[vote] = 0

        # increment count by 1
        counts[vote] += 1

        # check to see if the current name has more votes then the current max
        if counts[vote] > max_votes:
            # set the max votes to the current name votes if larger
            max_votes = counts[vote]

            # since this name has more votes it is currently the winner
            winner = vote

        # checks to see if the current name is tied to the winner
        elif counts[vote] == max_votes:
            # if tied this sets the winner to the name that is greater (which is last alphabetically)
            if vote > winner:
                winner = vote
    
    return winner


print(count_votes(['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael',])) # should print michael
print(count_votes(['john', 'johnny', 'jackie', 'johnny', 'john', 'jackie', 'jamie', 'jamie', 'john', 'johnny', 'jamie', 'johnny', 'john',])) # should print johnny