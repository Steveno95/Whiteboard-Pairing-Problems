# You've booked a really cheap one-way flight. Unfortunately, that means you have tons of layovers before you reach your destination. The morning of, you woke up late and had to scramble to the airport to catch your first flight. However, in your rush, you accidentally scrambled all your flight tickets. You don't know the route of your entire trip now!

# Write a function reconstructTrip to reconstruct your trip from your mass of flight tickets. Each ticket is a two-element array with the source airport as the first element and the destination airport as the second element. The ticket for your first flight has a destination but no source, and the ticket for your final flight has a source, but no destination.

# An example input might look like this:

# const tickets = [
#   ['PIT', 'ORD'],
#   ['XNA', 'CID'],
#   ['SFO', 'BHM'],
#   ['FLG', 'XNA'],
#   [null, 'LAX'], 
#   ['LAX', 'SFO'],
#   ['CID', 'SLC'],
#   ['ORD', null],
#   ['SLC', 'PIT'],
#   ['BHM', 'FLG'],
# ];
# Your function should output an array with the route of your trip. For the above example, it should look like this:

# ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']


def reconstructTrip(tickets):
    hash = {}
    route = [None] * (len(tickets) - 1)

    for ticket in tickets:
        if ticket[0] == None:
            route[0] = ticket[1]

        hash[ticket[0]] = ticket[1]

    for i in range(1, len(tickets) - 1):
        route[i] = hash[i - 1]