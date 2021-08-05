// 1353. Maximum Number of Events That Can Be Attended

// Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

// You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.

// Return the maximum number of events you can attend.

// Example 1:

// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.
// Example 2:

// Input: events= [[1,2],[2,3],[3,4],[1,2]]
// Output: 4
// Example 3:

// Input: events = [[1,4],[4,4],[2,2],[3,4],[1,1]]
// Output: 4
// Example 4:

// Input: events = [[1,100000]]
// Output: 1
// Example 5:

// Input: events = [[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
// Output: 7

// Our goal is to prioritize the events that start first and have the shortest duration. To do so:

// We sort the initial events array by start date
// We have a Priority Queue¹ that for all events that we were initially eligible (= event.startDate > day) prioritizes the one with the least endDate.
// There may be points when we have drop events in the Priority Queue because even with the optimal priorization we don't have enough days
// ¹ We don't have a Priority Queue built-in in JavaScript, so we're just using sort priorityQueue.sort.

function maxEvents(events: number[][]): number {
    // Sort events list by start time
    events.sort((a, b) => b[0] - a[0]);

    // Add colliding values to the queue
    // The queue is sorted by end time desc
    const priorityQueue = [events.pop()];
    let day = priorityQueue[0][0];
    let count = 0;

    while (events.length > 0 || priorityQueue.length > 0) {
        while (events.length > 0 && events[events.length - 1][0] === day) {
            priorityQueue.push(events.pop());
        }
        priorityQueue.sort((a, b) => b[1] - a[1]);

        // Discard no longer eligible events + 1 (the one we're attending now)
        while (priorityQueue.length > 0 && day > priorityQueue[priorityQueue.length - 1][1]) {
            priorityQueue.pop();
        }
        if (priorityQueue.pop() != null) {
            count += 1;
        }

        // While day += 1 would work, we can do better. We can skip to the start of the next event,
        // either in the Priority Queue or events
        const nextPrioStart = priorityQueue.length > 0 ? priorityQueue[priorityQueue.length - 1][0] : Infinity;
        const nextEventStart = events.length > 0 ? events[events.length - 1][0] : Infinity;
        day = Math.max(day + 1, Math.min(nextPrioStart, nextEventStart));
    }

    return count;
};

// Solution 2

function maxEventsSort(events: number[][]): number {
    let seen = new Set()
    events.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);
    for (let [i, j] of events) {
        while (i <= j && seen.has(i)) ++i;
        if (i <= j) seen.add(i);
    }
    return seen.size;
};

// Time: O(N^2)
// Space: O(N)