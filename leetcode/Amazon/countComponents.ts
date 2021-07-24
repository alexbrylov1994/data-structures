// 323. Number of Connected Components in an Undirected Graph

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Example 1:

// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

// DFS
function countComponents(n: number, edges: number[][]): number {
    if (n <= 1) {
        return n;
    }

    let graph = {};
    let visited = {}
    for (let i = 0; i < n; i++) {
        graph[i] = []
        visited[i] = false;
    }

    for (let edge of edges) {
        let currentNode = edge[0];
        let nextNode = edge[1];

        // add to both
        graph[currentNode].push(nextNode);
        graph[nextNode].push(currentNode);
    }

    let components = 0;
    // traverse graph
    for (let i = 0; i < n; i++) {
        // not visited
        if (visited[i] === false) {
            components++;
            dfs(i, graph, visited);
        }
    }
    return components;
};

const dfs = (index, graph, visited) => {
    visited[index] = true;
    let nodes = graph[index];
    for (let i = 0; i < nodes.length; i++) {
        if (visited[nodes[i]] === false) {
            dfs(nodes[i], graph, visited)
        }
    }
}

// Here E = Number of edges, V = Number of vertices.

// Time complexity: O(E+V).

// Building the adjacency list will take O(E) operations, as we iterate over the list of edges once, and insert each edge into two lists.

// During the DFS traversal, each vertex will only be visited once. This is because we mark each vertex as visited as soon as we see it, and then we only visit vertices that are not marked as visited. In addition, when we iterate over the edge list of each vertex, we look at each edge once. This has a total cost of O(E+V).

// Space complexity: O(E+V).

// Building the adjacency list will take O(E) space. To keep track of visited vertices, an array of size O(V) is required. Also, the run-time stack for DFS will use O(V) space.


// const countComponents = (n, edges) => {
//     const nums = Array(n).fill(-1);

//     // Step 1. union find
//     for (let i = 0; i < edges.length; i++) {
//       const x = find(nums, edges[i][0]);
//       const y = find(nums, edges[i][1]);

//       // union
//       if (x !== y) nums[x] = y;
//     }

//     // Step 2. count the -1
//     return nums.filter(num => num === -1).length;
//   };

//   const find = (nums, i) => {
//     if (nums[i] === -1) return i;
//     return find(nums, nums[i]);
//   };
