// 994. Rotting Oranges

// You are given an m x n grid where each cell can have one of three values:

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

const Directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

function orangesRotting(grid: number[][]): number {

    if (!grid.length) {
        return 0;
    }

    let freshOranges = 0;
    let queue = [];

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            if (grid[row][column] === 1) {
                freshOranges++;
            }

            if (grid[row][column] === 2) {
                queue.push([row, column]);
            }
        }
    }

    let currentQueueSize = queue.length;
    let minutes = 0;

    while (queue.length) {
        if (currentQueueSize === 0) {
            currentQueueSize = queue.length;
            minutes++;
        }

        let current = queue.shift();
        currentQueueSize--;

        for (let direction of Directions) {
            let nextRow = current[0] + direction[0];
            let nextCol = current[1] + direction[1];

            if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) {
                continue;
            }

            if (grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = 2
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