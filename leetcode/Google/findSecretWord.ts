// 843. Guess the Word

// This is an interactive problem.

// You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret.

// You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters.

// This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead.

// For each test case, you have exactly 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or fewer calls to Master.guess and at least one of these guesses was secret, then you pass the test case.

// Example 1:

// Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"], numguesses = 10
// Output: You guessed the secret word correctly.
// Explanation:
// master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
// master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
// master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
// master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
// master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
// We made 5 calls to master.guess and one of them was the secret, so we pass the test case.
// Example 2:

// Input: secret = "hamada", wordlist = ["hamada","khaled"], numguesses = 10
// Output: You guessed the secret word correctly.


class Master {
    guess(word: string): number { return };
}

// We have x = master.guess(word)
// if x == 6, we find the secret word, the algorithm ends
// if x != 6, it means the secret word has exactly x matches with the word
// Because the secret word has exactly x matches with the word, 
//we can just search in the candidates, and only keep the ones 
//that have exact x matches with the word. With that, 
//we can narrow the candidates after we call master.guess(), 
//and guarantee that the secret is in the remaining candidates.

// make a pick, see how many matches, if corrert return if not
// compare word against other words and add words into a filtered list
// that contains words with matches about guess, except last chosen word, repeat

const match = (w1, w2) => {
    let count = 0;
    for (let i = 0; i < w1.length; i++) {
        if (w1[i] === w2[i]) {
            count++;
        }
    }

    return count;
}

function findSecretWord(wordlist: string[], master: Master) {
    for (let i = 0; i < 10; i++) {
        const randomIdx = Math.floor(Math.random() * wordlist.length);
        const guessWord = wordlist[randomIdx];
        const matches = master.guess(guessWord);

        const candidates = [];
        for (const word of wordlist) {
            if (matches === match(guessWord, word)) {
                candidates.push(word);
            }
        }
        wordlist = candidates;
    }
};

// Time O(10*n) -> O(N)
// Space O(N)