def count_votes(arr):
    counts = {}
    max_votes = 0
    winner = ''

    for vote in arr:
        if vote not in counts:
            counts[vote] = 0

        counts[vote] += 1