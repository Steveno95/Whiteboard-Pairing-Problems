// Write a function balancedBrackets that receives a string of opening and closing brackets and determines whether or not the string's openers and closers are properly nested.
// The possible opening brackets are [, {, and (. The corresponding closers are ], }, and ).


function balancedBrackets(str) {
    let line = str.split('');

    // use a stack to keep track of the opening brackets
    const stack = [];

    // use an object to store the possible openers with their corresponding closers
    const openers = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const closers = {
        ')': true,
        '}': true,
        ']': true
    }

    for (let i = 0; i < line.length; i ++) {
        // if there is an opener push it to the stack
        if (openers[line[i]]) {
            stack.push(line[i]);
        } else if (closers[line[i]]) {
            // if the closer doesn't correspond to the most recent opener return false
            if (openers[stack.pop()] !== line[i]) return false;
        }
    }

    return stack.length === 0;
}


console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false 