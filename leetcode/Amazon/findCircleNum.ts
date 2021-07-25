// 547. Number of Provinces

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Example 1:

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

function findCircleNum(isConnected: number[][]): number {
    let visited = new Array(isConnected.length).fill(false);
    let queue = [];
    let proviences = 0;

    for (let row = 0; row < isConnected.length; row++) {
        if (!visited[row]) {
            queue.push(row);
            while (queue.length) {
                let current = queue.shift();
                visited[current] = true;
                for (let column = 0; column < isConnected.length; column++) {
                    if (isConnected[current][column] === 1 && !visited[column]) {
                        queue.push(column);
                    }
                }
            }
            proviences++
        }
    }

    return proviences;
};


// Time complexity : O(n^2). The complete matrix of size n^2 is traversed.

// Space complexity : O(n). A queuequeue and visitedvisited array of size n is used.