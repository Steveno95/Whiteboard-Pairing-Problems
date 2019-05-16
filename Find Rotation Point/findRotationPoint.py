import math

def findRotationPoint(words):
    firstWord = words[0]
    floorIndex = 0
    ceilingIndex = len(words) - 1

    while floorIndex < ceilingIndex:
        guessIndex = math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2))

        if words[guessIndex] >= firstWord:
            floorIndex = guessIndex
        else:
            ceilingIndex = guessIndex

        if floorIndex + 1 == ceilingIndex:
            break
    
    return ceilingIndex

smallDataSet = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]