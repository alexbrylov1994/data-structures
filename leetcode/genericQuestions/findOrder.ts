// 210. Course Schedule II

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair[0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses.If there are many valid answers, return any them.If it is impossible to finish all courses, return an empty array.

//     Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: [0, 1]
// Explanation: There are a total of 2 courses to take.To take course 1 you should have finished course 0. So the correct course order is[0, 1].
//     Example 2:

// Input: numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
// Output: [0, 2, 1, 3]
// Explanation: There are a total of 4 courses to take.To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is[0, 1, 2, 3].Another correct ordering is[0, 2, 1, 3].
//     Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const seen = new Set();
    const seeing = new Set();
    const res = [];

    const adj = [...Array(numCourses)].map(r => []);
    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return [];
        }
    }
    return res.reverse();

    function dfs(v) {
        if (seen.has(v)) {
            return true;
        }
        if (seeing.has(v)) {
            return false;
        }

        seeing.add(v);
        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        res.push(v);
        return true;
    }
}

// Time Complexity: O(V+E) where V represents the number of vertices and E represents 
// the number of edges. Essentially we iterate through each node and each vertex 
// in the graph once and only once.

// Space Complexity: O(V + E)O(V+E).

// We use the adjacency list to represent our graph initially. 
// The space occupied is defined by the number of edges because for each node as the key, 
// we have all its adjacent nodes in the form of a list as the value. Hence, O(E)

// Additionally, we apply recursion in our algorithm, 
// which in worst case will incur O(E) extra space in the function call stack.

// To sum up, the overall space complexity is O(V+E).