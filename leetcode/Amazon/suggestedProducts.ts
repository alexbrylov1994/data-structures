// 1268. Search Suggestions System

// Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed. 

// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]

// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

// Example 3:

// Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
// Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

// Example 4:

// Input: products = ["havana"], searchWord = "tatiana"
// Output: [[],[],[],[],[],[],[]]

// We traversal the products to match the prefix and finally get the result.
// I got 92ms as the best for this strategy. And here are some little optimizations:

// update the product list for each search word since the suggestions for searchWord.slice(0, x + 1) must come from suggestions for searchWord.slice(0, x) which means we don't need to traversal the original whole products
// just check the n-th character instead of the prefix substring
function suggestedProducts(products: string[], searchWord: string): string[][] {
    let result = [];
    // lexical order
    products.sort();

    for (let charIndex = 0; charIndex < searchWord.length; charIndex++) {
        let suggestions = []
        result.push([]);

        for (let product of products) {
            if (product[charIndex] === searchWord[charIndex]) {
                suggestions.push(product);
                if (result[charIndex].length < 3) {
                    result[charIndex].push(product);
                }
            }
        }
        // will save new possible suggestions at each character
        products = suggestions;
    }

    return result;
};

// Time complexity: O(searchWord.length * products.length)
// Space complexity: O(products.length)


// Time complexity: O(M) to build the trie where M is total number of characters in products
// For each prefix we find its representative node in O(len(prefix))
// and dfs to find at most 3 words which is an O(1) operation.
// Thus the overall complexity is dominated by the time required to build the trie.

// In Java there is an additional complexity of O(m ^ 2) due to Strings being immutable,
//     here m is the length of searchWord.

// Space complexity: O(26n) = O(n).Here n is the number of nodes in the trie. 
// 26 is the alphabet size.Space required for output is O(m) 
// where m is the length of the search word.

// class Node {
//     constructor() {
//         this.isWord = false;
//         this.children = new Array(26).fill(null);
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node();
//     }

//     insert(word) {
//         this.insertHelper(this.root, word, 0);
//     }

//     insertHelper(node, word, charIndex) {
//         if (node == null) {
//             node = new Node();
//         }
//         if (charIndex == word.length) {
//             node.isWord = true;
//             return node;
//         }

//         const index = word.charCodeAt(charIndex) - 97;

//         node.children[index] = this.insertHelper(node.children[index], word, charIndex + 1);

//         return node;
//     }

//     insertWords(words) {
//         for (const word of words) {
//             this.insert(word);
//         }
//     }

//     get(word) {
//         return this.getHelper(this.root, word, 0);
//     }

//     getHelper(node, word, charIndex) {
//         if (node == null || charIndex === word.length) {
//             return node;
//         }

//         const index = word.charCodeAt(charIndex) - 97;
//         return this.getHelper(node.children[index], word, charIndex + 1);
//     }

//     keysWithPrefix(prefix, limit) {
//         const queue = [];
//         this.collect(this.get(prefix), prefix, queue, limit);
//         return queue;
//     }

//     collect(node, prefix, queue, limit) {
//         if (node == null || queue.length === limit) return;

//         if (node.isWord === true) {
//             queue.push(prefix);
//         }

//         for (let i = 0; i < 26; i++) {
//             const char = String.fromCharCode(i + 97);
//             this.collect(node.children[i], prefix + char, queue, limit);
//         }
//     }
// }


// var suggestedProducts = function(products, searchWord) {
//     const trie = new Trie();
//     trie.insertWords(products);
//     const res = [];
//     let substr = "";

//     for (const char of searchWord) {
//         substr += char;
//         const words = trie.keysWithPrefix(substr, 3);
//         res.push(words);
//     }

//     return res;
// };