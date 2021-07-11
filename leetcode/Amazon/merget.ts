// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    // save first and compare to each one after it
    // if in interval, update it with bigger value, 
    // else push it

    // if we are on last element, we need to push it at the end 
    // so we have an if statement to make sure we push the remaining one
    let currentInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let currentStart = currentInterval[0];
        let currentEnd = currentInterval[1];

        let nextStart = intervals[i][0];
        let nextEnd = intervals[i][1];

        if (currentEnd >= nextStart) {
            currentInterval[1] = Math.max(nextEnd, currentEnd);
        } else {
            result.push(currentInterval);
            currentInterval = intervals[i];
        }
    }

    result.push(currentInterval);

    return result;
};

// Time complexity :O(nlogn)

// Other than the sort invocation, we do a simple linear scan of the list, so the runtime is dominated by the O(n\log{}n)O(nlogn) complexity of sorting.

// Space complexity : O(logN) (or OO(n))

// If we can sort intervals in place, we do not need more than constant additional space, although the sorting itself takes O(\log n)O(logn) space. Otherwise, we must allocate linear space to store a copy of intervals and sort that.

