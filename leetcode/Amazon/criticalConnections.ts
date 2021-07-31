// 1192. Critical Connections in a Network

// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

// Example 1:

// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.

/*
  Goal is to find edges that don't lead to a cycle.

  rank   - time stamp of your dfs traversal
  minObs - without retraversing through visited node (but you will "peek" to observe the rank of visited node)
           lowest rank observed on that path (path ends when it hits a leaf or a dead end (all children are already visited))

  You will have a cycle if a child's minObs is lower than or equal to rank (example, if child's minObs is equal to the nodes rank
  that it hit itself on the way, thus a cycle. lower minObs would mean it would eventually lead back to the node itself, so same meaning)
  
  so mark your graph with rank and along the way keep track of minObs for each node. if node.rank > child.minObs, edge between node and child
  is a bridge since that edge will never lead back to the node itself along the way.
*/

function criticalConnections(n: number, connections: number[][]): number[][] {
    // need graph to traverse
    const graph = createGraph(n, connections);

    // so you never retraverse visited path. if child was visited and IS NOT a direct parent, you will
    // end up peeking for its value to keep track of minObs in the way
    const visited = new Set();
    let rank = 0;

    // this will be your output. if condition meets, edge will be pushed here
    const output = [];

    // dfs function in this scope so variable rank is easily updated
    function dfs(node, parent) {
        visited.add(node.val);

        // by default, minObs will be at the greatest its own rank
        node.rank = rank;
        node.minObs = rank;

        // increment rank for next nodes
        rank++;

        node.children.forEach((child) => {
            // don't revisit your parent
            if (child === parent) { return; }
            if (visited.has(child)) {
                // if node visited, just peek the value
                node.minObs = Math.min(node.minObs, graph[child].minObs);
                return;
            } else {
                // traverse and also update minObs so its parent can use it later
                node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
            }

            // condition explained in the comments above
            if (node.rank < graph[child].minObs) output.push([node.val, child]);
        });

        return node.minObs;
    };

    dfs(graph[connections[0][0]], connections[0][0]);

    return output;
};


function createGraph(n, connections) {
    const output = {};

    for (let i = 0; i < n; i++) {
        output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
    }

    connections.forEach((connection) => {
        output[connection[0]].children.push(connection[1]);
        output[connection[1]].children.push(connection[0]);
    });

    return output;
}

// Time Complexity: O(V+E) where V represents the number of vertices and E represents the number of edges in the graph. 
// We process each node exactly once thanks to the rank dictionary also acting as a "visited" safeguard at the top of the dfs function. 
// Since the problem statement mentions that the graph is connected, that means E>=V and hence, 
// the overall time complexity would be dominated by the number of edges i.e. O(E).

// Space Complexity: O(E). The overall space complexity is a sum of the space occupied by the connDict dictionary, 
// rank dictionary, and graph data structure. E + V + (V + E)E+V+(V+E) = O(E)O(E).

