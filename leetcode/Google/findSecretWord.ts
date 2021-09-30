

/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      guess(word: string): number {}
 * }
 */

class Master {
    guess(word: string): number { return };
}
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
        const word = wordlist[Math.floor(Math.random() * wordlist.length)];
        const N = master.guess(word); // Number of same letters at exact indexes between selected word and secret.

        if (N == 6) { return; }

        const temp = N === -1 ? wordlist.filter(w => match(w, word) == 0) : wordlist.filter(w => match(w, word) == N);

        wordlist = temp;
    }
};