// 692. Top K Frequent Words

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

function topKFrequent(words: string[], k: number): string[] {
    let map = {};

    for (let word of words) {
        if (map[word]) {
            map[word]++;
        } else {
            map[word] = 1;
        }
    }

    let arr = Object.keys(map).sort((a, b) => {
        if (map[b] < map[a]) {
            return -1;
        } else if (map[b] > map[a]) {
            return 1;
        }

        if (map[a] === map[b]) {
            return -1;
        }
    });

    return arr.slice(0, k);
};