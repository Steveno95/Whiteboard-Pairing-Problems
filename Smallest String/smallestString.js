// Write a function that takes two strings and returns the "smallest" string. If both strings are equal, you may return either string. 
// Strings will only consist of lowercase letters and numbers: [a - z][0 - 9]. 
// Letters earlier in the alphabet are considered smaller. Consecutive digits in the string are considered a single number.

// Examples:

// input: "a", "b"
// expected output: "a" since "a" comes before "b" alphabetically 

// input: "a1", "a2"
// expected output: "a1" since 1 comes before 2

// input: "a10", "a2"
// expected output: "a2" since 2 comes before 10 


function isDigit(str) {
    return str.match(/[0-9]/i);
}

function isAlpha(str) {
    return str.match(/[a-z]/i);
}

function parseNumber(string, index) {
    let numberLength = 0;
    let numberValue = '';

    while (index < string.length && isDigit(string[index])) {
        numberLength++;
        numberValue += string[index];
        index++;
    }
    return [parseInt(numberValue, 10), numberLength];
}

