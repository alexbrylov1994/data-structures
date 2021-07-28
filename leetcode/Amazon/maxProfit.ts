// 1648. Sell Diminishing-Valued Colored Balls

// You have an inventory of different colored balls, and there is a customer that wants orders balls of any color.

// The customer weirdly values the colored balls. Each colored ball's value is the number of balls of that color you currently have in your inventory. For example, if you own 6 yellow balls, the customer would pay 6 for the first yellow ball. After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls decreases as you sell more to the customer).

// You are given an integer array, inventory, where inventory[i] represents the number of balls of the ith color that you initially own. You are also given an integer orders, which represents the total number of balls that the customer wants. You can sell the balls in any order.

// Return the maximum total value that you can attain after selling orders colored balls. As the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: inventory = [2,5], orders = 4
// Output: 14
// Explanation: Sell the 1st color 1 time (2) and the 2nd color 3 times (5 + 4 + 3).
// The maximum total value is 2 + 5 + 4 + 3 = 14.
// Example 2:

// Input: inventory = [3,5], orders = 6
// Output: 19
// Explanation: Sell the 1st color 2 times (3 + 2) and the 2nd color 4 times (5 + 4 + 3 + 2).
// The maximum total value is 3 + 2 + 5 + 4 + 3 + 2 = 19.
// Example 3:

// Input: inventory = [2,8,4,10,6], orders = 20
// Output: 110
// Example 4:

// Input: inventory = [1000000000], orders = 1000000000
// Output: 21
// Explanation: Sell the 1st color 1000000000 times for a total value of 500000000500000000. 500000000500000000 modulo 109 + 7 = 21.

// js
const min = (a, b) => a < b ? a : b;

const summationN = n => BigInt(n) * (BigInt(n) + BigInt(1)) / BigInt(2);

const MOD = BigInt(1e9 + 7);
/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */

var maxProfit = function (inventory, orders) {
    inventory.sort((a, b) => b - a);
    inventory.push(0);
    inventory = inventory.map(e => BigInt(e));
    let top = inventory[0];
    let answer = BigInt(0);
    let i = 1;
    orders = BigInt(orders);
    const len = inventory.length;
    while (i < len && orders > 0) {
        while (i < len && inventory[i] == top) {
            i++;
        }
        let col = BigInt(i);
        let row = BigInt(top - inventory[i]);
        let cells = row * col;
        let take = min(orders, cells);
        let res = take / col;
        let rem = take % col;

        answer = (answer + ((summationN(top) - summationN(top - res)) * col) % MOD) % MOD;
        answer = (answer + ((top - res) * rem) % MOD) % MOD;
        orders -= take;
        top = inventory[i];
        i++;
    }
    return answer;
};

// Time Complexity: O(n log n)
// Space Complexity: O(1)


// doens't work for 10,000 or above.
// function maxProfit(inventory: number[], orders: number): number {
//     let heap = new MaxBinaryHeap();

//     for (let item of inventory) {
//         heap.insert(item);
//     }

//     let profit = 0n;

//     while (orders) {
//         let item = heap.extractMax();

//         // profit += (BigInt(item) % (10n ** 9n + 7n));
//         profit += (BigInt(item) % (10n ** 9n + 7n));
//         orders--;
//         console.log('order:', orders);

//         heap.insert(item - 1);
//     }

//     return Number(profit);
// };

// class MaxBinaryHeap {
//     // 2n+1 left child
//     // 2n+2 right child 
//     // (n-1)/2 floor, parent
//     heap: number[];
//     constructor() {
//         this.heap = [];
//         // this.values = [55, 39, 41, 18, 27, 12, 33];
//     }

//     insert(value) {
//         this.heap.push(value);

//         if (this.heap.length <= 1) {
//             return;
//         }

//         this.bubbleUp(value, (this.heap.length - 1))
//     }

//     private bubbleUp(value, index) {
//         if (index === 0) {
//             return;
//         }

//         let parentIndex = this.getParent(index);
//         if (value > this.heap[parentIndex]) {
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
//             this.bubbleUp(value, parentIndex);
//         }

//     }

//     getLeftChild(index: number): number {
//         let child = (index * 2) + 1;
//         return child < this.heap.length ? child : null;
//     }

//     getRightChild(index: number): number {
//         let child = (index * 2) + 2;
//         return child < this.heap.length ? child : null;
//     }

//     getParent(index: number): number {
//         let parent = Math.floor((index - 1) / 2);
//         return parent >= 0 ? parent : null;
//     }

//     extractMax(): number {

//         [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
//         let max = this.heap.pop();
//         this.bubleDown(0);
//         return max;
//     }

//     bubleDown(index) {
//         if (!this.getRightChild(index) && !this.getLeftChild(index)) {
//             return;
//         }

//         let child;
//         if (this.heap[this.getLeftChild(index)] > this.heap[this.getRightChild(index)] || !this.getRightChild(index)) {
//             child = this.getLeftChild(index);
//         } else {
//             child = this.getRightChild(index);
//         }

//         if (this.heap[child] > this.heap[index]) {
//             [this.heap[index], this.heap[child]] = [this.heap[child], this.heap[index]];
//             this.bubleDown(child);
//         }
//     }
// }

// console.log('profit: ', maxProfit([1000000000], 1000000000));