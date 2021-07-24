// 1152. Analyze User Website Visit Pattern

// We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].

// A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  (The websites in a 3-sequence are not necessarily distinct.)

// Find the 3-sequence visited by the largest number of users. If there is more than one solution, return the lexicographically smallest such 3-sequence.

// Example 1:

// Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
// Output: ["home","about","career"]
// Explanation: 
// The tuples in this example are:
// ["joe", 1, "home"]
// ["joe", 2, "about"]
// ["joe", 3, "career"]
// ["james", 4, "home"]
// ["james", 5, "cart"]
// ["james", 6, "maps"]
// ["james", 7, "home"]
// ["mary", 8, "home"]
// ["mary", 9, "about"]
// ["mary", 10, "career"]
// The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
// The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
// The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
// The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
// The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.

function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
    let hashMap = {}
    for (let i = 0; i < username.length; i++) {
        let name = username[i];
        let data = { timestamp: timestamp[i], website: website[i] }

        if (hashMap[name]) {
            hashMap[name].push(data)
        } else {
            hashMap[name] = [data];
        }
    }

    const freqCount = {};
    for (let user in hashMap) {
        const data = hashMap[user];
        data.sort((a, b) => a.timestamp - b.timestamp);
        const set = new Set();
        // O(n^3) all possible combinations
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                for (let k = j + 1; k < data.length; k++) {
                    const sequence = [data[i].website, data[j].website, data[k].website];
                    const str = JSON.stringify(sequence);
                    if (set.has(str)) continue;
                    set.add(str);
                    if (freqCount[str]) freqCount[str]++;
                    else freqCount[str] = 1;
                }
            }
        }
    }

    const countToSequence = {};
    let max = -1;
    for (let sequence in freqCount) {
        const freq = freqCount[sequence];
        max = Math.max(max, freq);
        // in case there are multiple visited sequences
        if (countToSequence[freq]) countToSequence[freq].push(sequence);
        else countToSequence[freq] = [sequence];
    }

    const strSequences = countToSequence[max]
    const sequences = strSequences.map((strSequence) => JSON.parse(strSequence));
    // If there is more than one solution, return the lexicographically smallest such 3-sequence.
    return sequences.sort()[0];
};

// /**
//  * @param {string[]} username
//  * @param {number[]} timestamp
//  * @param {string[]} website
//  * @return {string[]}
//  */
//  var mostVisitedPattern = function (username, timestamp, website) {
//     let tuples = [];
//     for (let i = 0; i < timestamp.length; i++) {
//         tuples.push([username[i], timestamp[i], website[i]])
//     }

//     //sort it by time
//     tuples.sort((a, b) => a[1] - b[1]);
//     /*

//     Tuple will loom something like this
//       [
//     [ 'joe', 1, 'home' ],
//     [ 'joe', 2, 'about' ],
//     [ 'joe', 3, 'career' ],
//     [ 'james', 4, 'home' ],
//     [ 'james', 5, 'cart' ],
//     [ 'james', 6, 'maps' ],
//     [ 'james', 7, 'home' ],
//     [ 'mary', 8, 'home' ],
//     [ 'mary', 9, 'about' ],
//     [ 'mary', 10, 'career' ]
//   ]

//     */

//     let map = {};

//     for (let i = 0; i < tuples.length; i++) {

//         const [name, time, page] = tuples[i];

//         if (!(name in map)) {
//             map[name] = [];
//         }
//         map[name].push(page)

//     }
//     /*
//    Map:
//     {
//       joe: [ 'home', 'about', 'career' ],
//       james: [ 'home', 'cart', 'maps', 'home' ],
//       mary: [ 'home', 'about', 'career' ]
//     }
//     */


//     //Create sequnce per user

//     let sequence = {};

//     for (let [key, val] of Object.entries(map)) {

//         let currentUserSequence = {};

//         for (let i = 0; i < val.length - 2; i++) {
//             for (let k = i + 1; k < val.length - 1; k++) {
//                 for (let j = k + 1; j < val.length; j++) {
//                     let s = `${val[i]}|${val[k]}|${val[j]}`;
//                     if (!(s in currentUserSequence)) {
//                         currentUserSequence[s] = 1
//                     }
//                 }
//             }
//         }

//         // group sequences by user
//         Object.keys(currentUserSequence).forEach(seqByUser => {
//             if (!sequence[seqByUser]) sequence[seqByUser] = 0;
//             sequence[seqByUser] += 1;
//         });


//     }

//     console.log(sequence)
//     /*
//    {
//      'home|about|career': 2,
//      'home|cart|maps': 1,
//      'home|cart|home': 1,
//      'home|maps|home': 1,
//      'cart|maps|home': 1
//    }


//     */

//     /// sort by max and ascii characters
//     let maxVisited = Object.keys(sequence).sort((a, b) => {

//         if (sequence[a] === sequence[b]) {
//             //ascii characters
//             return a.localeCompare(b)
//         }
//         //sort by max value
//         return sequence[b] - sequence[a]
//     })

//     console.log(maxVisited)
//     /*
// [
//   'home|about|career',
//   'cart|maps|home',
//   'home|cart|home',
//   'home|cart|maps',
//   'home|maps|home'
// ]

//     */

//     return maxVisited[0].split("|")

// };
