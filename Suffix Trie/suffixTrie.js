// Write a class for a such a suffix trie data structure. This class should have a root property representing the root node of the trie. 
// It should support creation from an initial string passed to the constructor as well as searching of strings.

// The creation method will be called when the class is instantiated and should populate the root node with a subtries containing all of the suffixes of the given string. 
// Note that every string added to the trie should end with the "endSymbol" character "*".

// trie = SuffixTrie("pogo")
// print(trie.root)  # should print the following
// {
//     "p": {
//         "o": {
//             "g": {
//                 "o": {'*': True}
//             }
//         }
//     }, 
//     "o": {
//         "g": {
//             "o": {'*': True}
//         }, 
//         "*": True}, 
//     "g": {
//         "o": {'*': True}
//     }
// }

// print(trie.contains("ogo"))  # should print True


class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateTrie(string);
    }

    populateTrie(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubStringAt(i, string);
        }
    }

    insertSubStringAt(index, string) {
        let node = this.root;
        for (let i = index; i < string.length; i++) {
            const letter = string[i];
            if (!(letter in node)) {
                node[letter] = {};
            }
            node = node[letter];
        }
        node[this.endSymbol] = true;
    }

    contains(string) {
        let node = this.root;
        for (let i = 0; i < string.length; i++) {
            const letter = string[i];
            if (!(letter in node)) {
                return false;
            }
            node = node[letter];
        }
        return this.endSymbol in node;
    }
}