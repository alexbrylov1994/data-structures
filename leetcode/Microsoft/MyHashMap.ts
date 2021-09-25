// 706. Design HashMap

// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.


// Example 1:

// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

// Explanation
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]

// As one of the most intuitive implementations, we could adopt the modulo operator as the hash function, 
// since the key value is of integer type. In addition, in order to minimize the potential collisions, 
// it is advisable to use a prime number as the base of modulo, e.g. 2069.

// We organize the storage space as an array where each element is indexed with 
// the output value of the hash function.

// In case of collision, where two different keys are mapped to the same address, 
// we use a bucket to hold all the values. The bucket is a container that hold all the values 
// that are assigned by the hash function. 
// We could use either a LinkedList or an Array to implement the bucket data structure.
class Bucket {
    bucket: any[];
    constructor() {
        this.bucket = [];
    }

    get(key) {
        for (let [k, v] of this.bucket) {
            if (k === key) return v;
        }
        return -1;
    }

    update(key, value) {
        let found = false;
        this.bucket.forEach((kv, i) => {
            if (key === kv[0]) {
                this.bucket[i] = [key, value];
                found = true;
                return;
            }
        })
        if (!found) this.bucket.push([key, value]);
    }

    remove(key) {
        this.bucket.forEach((kv, i) => {
            if (key === kv[0]) this.bucket.splice(i, 1);
        })
    }
}

class MyHashMap {
    keySpace: number;
    hashMap: any[];
    constructor() {
        this.keySpace = 2069;
        this.hashMap = [];
        for (let i = 0; i < this.keySpace; ++i) {
            this.hashMap.push(new Bucket());
        }
    }

    put(key, value) {
        const hashKey = key % this.keySpace;
        this.hashMap[hashKey].update(key, value);
    }

    get(key) {
        const hashKey = key % this.keySpace;
        return this.hashMap[hashKey].get(key);
    }

    remove(key) {
        const hashKey = key % this.keySpace;
        return this.hashMap[hashKey].remove(key);
    }
}

// Time Complexity: for each of the methods, the time complexity is O(N/K) where N is the number of all possible keys and K is the number of predefined buckets in the hashmap, which is 2069 in our case.

// Space Complexity: O(K+M) where KK is the number of predefined buckets in the hashmap and MM is the number of unique keys that have been inserted into the hashmap.