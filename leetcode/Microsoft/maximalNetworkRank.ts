// 1615. Maximal Network Rank

// There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

// The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

// The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

// Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

// Example 1:

// Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
// Output: 4
// Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
// Example 2:

// Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
// Output: 5
// Explanation: There are 5 roads that are connected to cities 1 or 2.
// Example 3:

// Input: n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
// Output: 5
// Explanation: The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.

// https://www.youtube.com/watch?v=n4WaTxnkxjU&ab_channel=Informatika
function maximalNetworkRank(n: number, roads: number[][]): number {
    // const graph = [];
    const graph = {};
    const counts = {};
    for (let i = 0; i < n; i++) {
        graph[i] = new Set();
        counts[i] = 0;
    }

    // const counts = new Array(n).fill(0);
    for (let road of roads) {
        counts[road[0]]++;
        counts[road[1]]++;

        // we use sets so later we can check if two cities contain other city in it's set
        // if yes, there is a road between them (1) else no roads (0)
        graph[road[0]].add(road[1]);
        graph[road[1]].add(road[0]);
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // A - total connection for one city
            // B - total connection for another city
            // C - connection or no connection (road) between A and B
            // A + B (conections for each cities) - C (road connecting directicly 2 cities)
            let A = counts[i];
            let B = counts[j];
            let C = graph[i].has(j) && graph[j].has(i) ? 1 : 0;

            max = Math.max(max, A + B - C);

        }
    }

    return max;
};

// runtime: O(n^2)

