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

function smallestString(str1, str2) {
    let s1 = 0;
    let s2 = 0;
    const len1 = str1.length - 1;
    const len2 = str2.length - 1;

    while (s1 <= len1 && s2 <= len2) {
        if (isAlpha(str1[s1]) && isAlpha(str2[s2])) {
            if (str1[s1] === str2[s2]) {
                s1++;
                s2++;
            } else {
                return str1[s1] < str2[s2] ? str1 : str2;
            }
        } else {
            if (isDigit(str1[s1]) && isDigit(str2[s2])) {
                let [n1, l1] = parseNumber(str1, s1);
                let [n2, l2] = parseNumber(str2, s2);

                if (n1 !== n2) {
                    return n1 < n2 ? str1 : str2;
                } else {
                    s1 += l1;
                    s2 += l2;
                }
            } else {
                return str1[s1] < str2[s2] ? str1 : str2;
            }
        }
    }
    return len1 < len2 ? str1 : str2;
}

console.log(smallestString("a", "b"));              // should print "a"
console.log('--------------');
console.log(smallestString("a1", "a2"));            // should print "a1"
console.log('--------------');
console.log(smallestString("a10", "a2"));           // should print "a2"
console.log('--------------');
console.log(smallestString("abcd123", "abc123"));   // should print "abc123"
console.log('--------------');
console.log(smallestString("abc", "abcd"));         // should print "abc"
console.log('--------------');
console.log(smallestString("abc123a", "abc123b"));  // should print "abc123a"
console.log('--------------');
console.log(smallestString("9876", "987"));         // should print "987"
console.log('--------------');
console.log(smallestString("6a", "6b"));            // should print "6a"