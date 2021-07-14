// 252. Meeting Rooms

// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: true

function canAttendMeetings(intervals: number[][]): boolean {
    if (intervals.length <= 1) {
        return true;
    }

    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let start = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (start[1] > intervals[i][0]) {
            return false;
        } else {
            start = intervals[i];
        }
    }

    return true;
};

// Time complexity : O(nlogn). The time complexity is dominated by sorting. Once the array has been sorted, only O(n)O(n) time is taken to go through the array and determine if there is any overlap.

// Space complexity : O(1). Since no additional space is allocated.