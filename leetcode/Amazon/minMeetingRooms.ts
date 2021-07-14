// 253. Meeting Rooms II

// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

// https://youtu.be/FdzJmTCVyJU

function minMeetingRooms(intervals: number[][]): number {
    let start = intervals.map((e) => e[0]).sort((a, b) => a - b);
    let end = intervals.map((e) => e[1]).sort((a, b) => a - b);

    let endPointer = 0;
    let rooms = 0;

    for (let startTime of start) {
        if (startTime < end[endPointer]) {
            rooms++;
        } else {
            endPointer++;
        }
    }
    return rooms;
};

// Time Complexity: O(NlogN) because all we are doing is sorting the two arrays for start timings and end timings individually and each of them would contain NN elements considering there are NN intervals.

// Space Complexity: O(N) because we create two separate arrays of size NN, one for recording the start times and one for the end times.

//Min Heap Solution

// since JS does not have a native heap, 
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing

const minMeetingRooms1 = (intervals) => {
    const compareFunc = (a, b) => a - b,
        minHeap = new MinHeap(compareFunc);

    intervals.sort((a, b) => a[0] - b[0]);

    let maxRooms = 0;

    intervals.forEach(interval => {
        if (minHeap.size > 0 && minHeap.peek() <= interval[0]) {
            minHeap.extract();
        }

        minHeap.insert(interval[1]);

        maxRooms = Math.max(maxRooms, minHeap.size);
    });

    return maxRooms;
};

// since JS does not have a native heap, 
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
    compareFunc: any;
    heap: any[];
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = [];
    }

    insert(val) {
        this.heap.unshift(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        if (this.size === 0) return null;
        return this.heap.shift();
    }

    peek() {
        if (this.size === 0) return null;
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}

// Time Complexity: O(NlogN).
// There are two major portions that take up time here. One is sorting of the array that takes O(NlogN) considering that the array consists of N elements.
// Then we have the min-heap. In the worst case, all N meetings will collide with each other. In any case we have NN add operations on the heap. In the worst case we will have NN extract-min operations as well. Overall complexity being (NlogN) since extract-min operation on a heap takes O(logN).

// Space Complexity: O(N) because we construct the min-heap and that can contain N elements in the worst case as described above in the time complexity section. Hence, the space complexity is O(N).
