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

        