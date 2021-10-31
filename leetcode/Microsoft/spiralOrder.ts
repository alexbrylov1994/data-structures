// 54. Spiral Matrix

// Share
// Given an m x n matrix, return all:

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Example 2:


// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// https://youtu.be/BJnMZNwUk1M
function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length == 0) {
        return [];
    }
    let result = [];
    // Left Boundry
    let left = 0;
    // Right Boundry
    let right = matrix[0].length - 1;
    // Top Boundry
    let top = 0;
    // Bottom Boundry
    let bottom = matrix.length - 1;

    while (true) {

        // Left to Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        // once we reach right, top boundry increases by one, goes from top to bottom of matrix
        top++;
        if (top > bottom) {
            return result;
        }

        // Top to Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        // once we reach bottom, right boundry decreases by one, goes from right to left of matrix
        right--;

        if (right < left) {
            return result;
        }

        // Left to Right
        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }

        // once we reach left, bottom boundry decreases by one, goes from bottom to up of matrix
        bottom--;

        if (bottom < top) {
            return result;
        }

        // Bottom to Up
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }

        // once we reach top, left boundry increases by one, goes from left to right of matrix
        left++;

        if (left > right) {
            return result;
        }
    }
};

// Time O(M*N) space (1)