// 380. Insert Delete GetRandom O(1)

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

class RandomizedSet {
    values: number[];
    hash: object;

    constructor() {
        this.values = [];
        this.hash = {};
    }

    insert(val: number): boolean {
        if (this.hash[val] >= 0) {
            return false
        } else {
            this.values.push(val);
            this.hash[val] = this.values.length - 1;
            return true;
        }
    }

    remove(val: number): boolean {
        if (!(this.hash[val] >= 0)) {
            return false;
        }

        let index = this.hash[val];
        let lastIndex = this.values.length - 1;

        this.hash[this.values[lastIndex]] = index;
        delete this.hash[val];

        [this.values[index], this.values[lastIndex]] = [this.values[lastIndex], this.values[index]];

        this.values.pop();
        console.log(this.values);
        return true;
    }

    getRandom(): number {
        let index = Math.floor(Math.random() * (this.values.length));
        return this.values[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//  Time complexity. GetRandom is always O(1). Insert and Delete both have O(1) average time complexity, and O(N) in the worst-case scenario when the operation exceeds the capacity of currently allocated array/hashmap and invokes space reallocation.

//  Space complexity: O(N), to store N elements.