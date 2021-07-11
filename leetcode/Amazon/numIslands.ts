// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const Directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1] // left
]

function numIslands(grid: string[][]): number {
    if (!grid.length) {
        return 0;
    }

    let islandCount = 0

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {

            if (grid[row][column] === '1') {
                islandCount++;

                grid[row][column] = '0';
                let queue = [[row, column]];

                while (queue.length) {
                    let currentPosition = queue.shift();
                    let currentRow = currentPosition[0];
                    let currentColumn = currentPosition[1];

                    for (let i = 0; i < Directions.length; i++) {
                        let direction = Directions[i];
                        let nextRow = direction[0] + currentRow;
                        let nextColumn = direction[1] + currentColumn;

                        if (nextRow < 0 || nextRow >= grid.length || nextColumn < 0 || nextColumn >= grid[0].length) {
                            continue;
                        }

                        if (grid[nextRow][nextColumn] === '1') {
                            queue.push([nextRow, nextColumn]);
                            grid[nextRow][nextColumn] = '0';
                        }

                    }

                }
            }

        }
    }

    return islandCount;
};

// Time complexity : O(M×N) where MM is the number of rows and N is the number of columns.

// Space complexity : O(min(M,N)) because in worst case where the grid is filled with lands, the size of queue can grow up to min(M,N).