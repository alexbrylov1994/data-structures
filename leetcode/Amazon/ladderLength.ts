// 127. Word Ladder

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// https://youtu.be/h9iTnkgv05E

// make a map
// go over every word, then break into patterns and compare them to other words, if fits add to the map (adjecency map)
// at the end do bfs and after each level increment by 1
// return level;

// this case can be O(n^2 * m) cuz will be going over list a lot

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let queue = [beginWord]
    let level = 1
    if (!wordList.includes(endWord)) {
        return 0
    }
    let map = {}
    while (queue.length) {
        let diffByOne = []
        while (queue.length) {
            // console.log(queue)
            let ele = queue.shift()
            map[ele] = true
            let eleChar = ele.split('')
            // goes over list of words
            for (let i = 0; i < wordList.length; i++) {
                let count = 0
                let wordChar = wordList[i].split('')
                // compares characters at each index, if more then two stops
                for (let j = 0; j < eleChar.length; j++) {
                    if (wordChar[j] !== eleChar[j]) {
                        count++
                        if (count == 2) {
                            break
                        }
                    }
                }
                // if one different
                // if end word, add one level and return
                // else push to list and set to seen
                if (count == 1) {
                    if (wordList[i] == endWord) {
                        return level + 1
                    }
                    if (!map[wordList[i]]) {
                        diffByOne.push(wordList[i])
                        map[wordList[i]] = true
                    }
                }
            }
        }
        // add new elements to queue
        if (diffByOne.length) {
            queue = [...queue, ...diffByOne]
            // for(let i=0;i<diffByOne.length;i++){
            //     wordList.splice(wordList.indexOf(diffByOne[i]),1)
            // }
        }
        level++
    }
    return 0
};

// Time Complexity: O(M ^ 2 * N), where M is the length of each word and N is the total number of words in the input word list.
// Space Complexity: O(M ^ 2 * N)

// function ladderLength(beginWord, endWord, wordList) {
//     let len = 1;
//     let queue = [beginWord];
//     const dict = new Set(wordList);
//     const seen = new Set(queue);

//     while (queue.length) {
//       const next = [];
//       for (let v of queue) {
//         if (v === endWord) {
//           return len;
//         }

//         const arr = v.split('');
//         for (let i = 0; i < arr.length; i++) {
//           for (let d = 0; d < 26; d++) {
//             arr[i] = String.fromCharCode(97+d);
//             const nv = arr.join('');
//             if (!seen.has(nv) && dict.has(nv)) {
//               next.push(nv);
//               seen.add(nv);
//             }
//             arr[i] = v[i];
//           }
//         }
//       }
//       queue = next;
//       len++;
//     }

//     return 0;
//   }