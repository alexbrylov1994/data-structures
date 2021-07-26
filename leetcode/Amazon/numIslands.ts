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

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0;
    let islandCount = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                islandCount++;
                grid[row][col] = '0';
                const queue = [];
                queue.push([row, col]);

                while (queue.length) {
                    const currentPos = queue.shift();
                    const currentRow = currentPos[0];
                    const currentCol = currentPos[1];

                    for (let i = 0; i < directions.length; i++) {
                        const currentDir = directions[i];
                        const nextRow = currentRow + currentDir[0];
                        const nextCol = currentCol + currentDir[1];

                        if (nextRow < 0 || nextRow >= grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

                        if (grid[nextRow][nextCol] === '1') {
                            queue.push([nextRow, nextCol]);
                            grid[nextRow][nextCol] = '0';
                        }
                    }
                }
            }
        }
    }

    return islandCount;
}

// Time complexity : O(M×N) where MM is the number of rows and N is the number of columns.

// Space complexity : O(min(M,N)) because in worst case where the grid is filled with lands, the size of queue can grow up to min(M,N).

// DFS JAVA

// class Solution {
//     void dfs(char[][] grid, int r, int c) {
//       int nr = grid.length;
//       int nc = grid[0].length;

//       if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {
//         return;
//       }

//       grid[r][c] = '0';
//       dfs(grid, r - 1, c);
//       dfs(grid, r + 1, c);
//       dfs(grid, r, c - 1);
//       dfs(grid, r, c + 1);
//     }

//     public int numIslands(char[][] grid) {
//       if (grid == null || grid.length == 0) {
//         return 0;
//       }

//       int nr = grid.length;
//       int nc = grid[0].length;
//       int num_islands = 0;
//       for (int r = 0; r < nr; ++r) {
//         for (int c = 0; c < nc; ++c) {
//           if (grid[r][c] == '1') {
//             ++num_islands;
//             dfs(grid, r, c);
//           }
//         }
//       }

//       return num_islands;
//     }
//   }