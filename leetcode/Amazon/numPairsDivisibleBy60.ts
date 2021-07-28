// 1010. Pairs of Songs With Total Durations Divisible by 60

// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

function numPairsDivisibleBy60(time: number[]): number {
    let count = 0;
    let hash = {}
    for (let duration of time) {
        let mod = duration % 60;
        //ex: 100  (100%60) = 40, so we need 20
        //60 - 40 = 20, we check if we have 20

        let remainder = (60 - mod) % 60

        // check if we have the second part 
        if (hash[remainder]) {
            count += hash[remainder];
        }

        // else set mod to 1 or increase
        hash[mod] ? hash[mod]++ : hash[mod] = 1
    }

    return count;
}

//2nd approach

// function numPairsDivisibleBy60(time: number[]): number {
//     let remainders = new Array(60).fill(0);
//     let count = 0;
//     for (let t of time) {
//         if (t % 60 == 0) { // check if a%60==0 && b%60==0
//             count += remainders[0];
//         } else { // check if a%60+b%60==60
//             count += remainders[60 - t % 60];
//         }
//         remainders[t % 60]++; // remember to update the remainders
//     }
//     return count;
// }

// Time complexity: O(n), when nn is the length of the input array, because we would visit each element in time once.
// Space complexity: O(1), because the size of the array remainders is fixed with 6060.

// function numPairsDivisibleBy60(time: number[]): number {
//     const appearDic = {};
//     let ans = 0;
//     for (let num of time) {

//         const mod = num % 60;
//         const left = (60 - mod) % 60;
//         ans += appearDic[left] ? appearDic[left] : 0;
//         appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
//     }
//     return ans;
// }

// var numPairsDivisibleBy60t = function(time) {
//     let m = new Array(60).fill(0)
//     let ans = 0 
//     let t = 0

//     for (let i = 0; i < time.length; i++) {
//         t = time[i] % 60;
//         ans += m[(60 - t) % 60];
//         m[t] += 1;
//     }
//     return ans
// };