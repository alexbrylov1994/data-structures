// 1135. Connecting Cities With Minimum Cost

// There are n cities numbered from 1 to n.

// You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together.  (A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

// Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) that connects those two cities together.  The cost is the sum of the connection costs used. If the task is impossible, return -1.

// Example 1:

// Input: n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
// Output: 6
// Explanation: 
// Choosing any 2 edges will connect all cities so we choose the minimum 2.
// Example 2:

// Input: n = 4, connections = [[1,2,3],[3,4,4]]
// Output: -1
// Explanation: 
// There is no way to connect all cities even if all edges are used.

// Minimum Spanning Tree (Using Kruskal's algorithm)
function minimumCost(n: number, connections: number[][]): number {
    let num = n;

    const parents = [];
    for (let i = 0; i < n; i++) parents.push(i);

    function union(u, v) {
        const p1 = find(u);
        const p2 = find(v);

        if (p1 !== p2) {
            parents[p1] = p2;
            num--;
        }
    }

    // Find root
    function find(u) {
        if (u === parents[u]) return u;
        return parents[u] = find(parents[u]); // path compression
    }

    connections.sort((a, b) => a[2] - b[2]);

    let res = 0;
    for (const [u, v, cost] of connections) {
        if (find(u) !== find(v)) {
            res += cost;
            union(u, v);
        }
    }
    return num === 1 ? res : -1;
}

// Time complexity: Assuming N to be the total number of nodes (cities) and MM to be the total number of edges (connections). 
// Sorting all the Mconnections will take O(M⋅logM). Performing union find each time will take log*M (Iterated logarithm). 
// Hence for M edges, O(M⋅log*N) which is practically O(M) as the value of iterated logarithm, log*N never exceeds 5.

// Space complexity: O(N), space required by parents and weights.