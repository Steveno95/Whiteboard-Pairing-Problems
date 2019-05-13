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
}