// 642. Design Search Autocomplete System

// Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#').

// You are given a string array sentences and an integer array times both of length n where sentences[i] is a previously typed sentence and times[i] is the corresponding number of times the sentence was typed. For each input character except '#', return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed.

// Here are the specific rules:

// The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
// The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
// If less than 3 hot sentences exist, return as many as you can.
// When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
// Implement the AutocompleteSystem class:

// AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the sentences and times arrays.
// List<String> input(char c) This indicates that the user typed the character c.
// Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
// Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than 3 matches, return them all.


// Example 1:

// Input
// ["AutocompleteSystem", "input", "input", "input", "input"]
// [[["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]], ["i"], [" "], ["a"], ["#"]]
// Output
// [null, ["i love you", "island", "i love leetcode"], ["i love you", "i love leetcode"], [], []]

// Explanation
// AutocompleteSystem obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
// obj.input("i"); // return ["i love you", "island", "i love leetcode"]. There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
// obj.input(" "); // return ["i love you", "i love leetcode"]. There are only two sentences that have prefix "i ".
// obj.input("a"); // return []. There are no sentences that have prefix "i a".
// obj.input("#"); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.

class AutocompleteSystem {
    head: Trie;
    word: string = ""

    constructor(sentences: string[], times: number[]) {
        this.head = new Trie();

        for (let i = 0; i < sentences.length; i++) {
            const sentance = sentences[i];
            this.insertWord(sentance, times[i]);
        }
    }

    insertWord(sentance: string, times?: number) {
        let tempHead = this.head;
        times = times || 1
        for (let char of sentance) {
            if (!(tempHead.children.has(char))) {
                tempHead.children.set(char, new Trie())
            }
            tempHead = tempHead.children.get(char);
        }
        tempHead.end = true
        tempHead.weight += times;
    }

    input(c: string): string[] {
        if (c === "#") {
            this.insertWord(this.word);
            this.word = ""
            return [];
        }

        this.word += c;
        let tempHead = this.head;
        // find the end position of sentences
        for (let char of this.word) {
            if (tempHead.children.has(char)) {
                tempHead = tempHead.children.get(char)
            } else
                return []
        }

        const words = this.findWord(tempHead, this.word).sort((a, b) => {
            let diff = b.weight - a.weight;
            if (diff === 0) diff = a.word.localeCompare(b.word)
            return diff;
        })

        return words.slice(0, 3).map(val => val.word)
    }

    findWord(node: Trie, currentWord: string): words[] {
        let words: words[] = [];
        if (node.end) words.push({ weight: node.weight, word: currentWord })

        node.children.forEach((val, key) => {
            words.push(...this.findWord(val, currentWord + key))
        })

        return words
    }
}

class Trie {
    children = new Map<string, Trie>();
    weight: number = 0;
    end: boolean = false;
}

interface words {
    weight: number;
    word: string;
}