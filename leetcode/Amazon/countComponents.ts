// 323. Number of Connected Components in an Undirected Graph

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Example 1:

// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

// https://youtu.be/ymxPZk7TesQ?t=368

function countComponents(n: number, edges: number[][]): number {
    if (n <= 1) {
        return n;
    }

    let map = new Array(n);

    // index is node and so far it points to itself
    for (let i = 0; i < n; i++) {
        map[i] = i;
    }

    // Union find
    // go over edge and set one of parents (index === value) to the value connected

    for (let edge of edges) {

        let start = edge[0];
        let end = edge[1];

        if (map[start] === start) {
            map[start] = end;
        } else {
            map[end] = start;
        }
    }

    // now we count parents, index === value
    let components = 0;
    for (let i = 0; i < map.length; i++) {
        if (i === map[i]) {
            components++;
        }
    }

    return components;
};


// DFS

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
//  */
//  var countComponents = function(n, edges) {
//     // create visited array
//     let visited = [];
//     // create graph
//     let graph = buildGraph(n, edges);
//     // create res
//     let res = 0;

//     // mark visited with false
//     for (let i = 0; i < n; i ++) {
//         visited.push(false);
//     }

//     // traverse graph
//     for (let i = 0; i < n; i ++) {
//         // not visited
//         if (visited[i] === false) {
//             res ++;
//             dfs(i, graph, visited);
//         }
//     }
//     return res;
// };

// const buildGraph = (n, edges) => {
//     let graph = Array.from({length: n}, () => []);

//     for (let edge of edges) {
//         let [src, dist] = edge;
//         graph[src].push(dist);
//         graph[dist].push(src);
//     }
//     return graph
// }

// const dfs = (index, graph, visited) => {
//     visited[index] = true;
//     let nodes = graph[index];
//     for (let i = 0; i < nodes.length; i ++) {
//         if (visited[nodes[i]] === false) {
//             dfs(nodes[i], graph, visited)
//         }
//     }
// }