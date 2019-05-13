function balancedBrackets(str) {
    let line = str.split('');

    const stack = [];

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
        if (openers[line[i]]) {
            stack.push(line[i]);
        } else if (closers[line[i]]) {
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