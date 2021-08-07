// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjList = new Array(numCourses).fill(0).map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0])
    }

    for (let v = 0; v < numCourses; v++) {
        const queue = [];
        const seen = {};
        for (let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        while (queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if (current === v) return false;
            const adjacent = adjList[current];
            for (let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if (!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
};

// Time Complexity: O(∣E∣+∣V∣) where |V| is the number of courses, 
// and ∣E∣ is the number of dependencies.

// As in the previous algorithm, it would take us |E| 
// time complexity to build a graph in the first step.

// Since we perform a postorder DFS traversal in the graph, 
// we visit each vertex and each edge once and only 
// once in the worst case, i.e. ∣E∣+∣V∣.

// Space Complexity: O(∣E∣+∣V∣), with the same denotation as 
// in the above time complexity.

// We built a graph data structure in the algorithm, which would consume ∣E∣+∣V∣ space.

// In addition, during the backtracking process, we employed two bitmaps (path and visited) 
// to keep track of the visited path and the status of check respectively, 
// which consumes 2⋅∣V∣ space.

// Finally, since we implement the function in recursion, 
// which would incur additional memory consumption on call stack. 
// In the worst case where all nodes chained up in a line, 
// the recursion would pile up |V| times.

// Hence the overall space complexity of the algorithm would be O(∣E∣+4⋅∣V∣)=O(∣E∣+∣V∣).

// solution 2: optimal
// topological sort

const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinishWithAdj = function (n, prerequisites) {
    const inDegree = new Array(n).fill(0);
    const adjList = inDegree.map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0])
    }

    const stack = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;

    while (stack.length) {
        const current = stack.pop();
        count++;

        const adjacent = adjList[current];

        for (let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if (inDegree[next] === 0) {
                stack.push(next);
            }
        }
    }

    return count === n;
};

canFinishWithAdj(6, p)
