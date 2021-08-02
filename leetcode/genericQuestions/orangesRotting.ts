// 994. Rotting Oranges

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

function orangesRotting(grid: number[][]): number {
    if (grid.length === 0) return 0;

    const queue = [];
    let freshOranges = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === ROTTEN) {
                queue.push([row, col])
            }

            if (grid[row][col] === FRESH) {
                freshOranges++;
            }
        }
    }

    let minutes = 0;
    let currentQueueSize = queue.length;

    while (queue.length > 0) {
        if (currentQueueSize === 0) {
            currentQueueSize = queue.length;
            minutes++;
        }

        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];

        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = row + currentDir[0];
            const nextCol = col + currentDir[1];

            if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) {
                continue;
            }

            if (grid[nextRow][nextCol] === FRESH) {
                grid[nextRow][nextCol] = 2;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
        }
    }

    if (freshOranges !== 0) {
        return -1;
    }

    return minutes;
};

// Time Complexity: O(N), where NN is the size of the grid.

// First, we scan the grid to find the initial values for the queue, 
// which would take )O(N) time.

// Then we run the BFS process on the queue, which in the worst 
// case would enumerate all the cells in the grid once and only once. 
// Therefore, it takes O(N) time.

// Thus combining the above two steps, the overall time complexity would be O(N)+O(N)=O(N)

// Space Complexity: O(N), where NN is the size of the grid.

// In the worst case, the grid is filled with rotten oranges. 
// As a result, the queue would be initialized with all the cells in the grid.

// By the way, normally for BFS, the main space complexity lies in 
// the process rather than the initialization. For instance, for a BFS traversal in a tree, 
// at any given moment, the queue would hold no more than 2 levels of tree nodes. 
// Therefore, the space complexity of BFS traversal in a tree would depend 
// on the width of the input tree.