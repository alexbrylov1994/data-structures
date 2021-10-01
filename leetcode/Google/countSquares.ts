// 1277. Count Square Submatrices with All Ones

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.

// Traversal the matrix.
// For every point, we need to find out the squares which are ends to this point.
// we could use the result of [x,y-1], [x-1,y] and [x-1,y-1] since we've have them already
// Finally, we get the answer.
function countSquares(matrix: number[][]): number {
    let count = 0;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (matrix[i][j] === 0) continue;
            if (i > 0 && j > 0) {
                matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
            }
            count += matrix[i][j];
        }
    }
    return count;


};

// 1 1
// 1 1 square count: 5 (41x1 (single) squares, and 1 2x2 square)
// If we just add 1 for each single square, we'd only get 4. The key is to look back at past values to see what the new sum will be.
// At each square we can find it's largest possible square with this logic Math.min(A[i-1][j], A[i-1][j-1], A[i][j-1]). We look left, up-left, and up to find the number of squares at each of those positions and take the minimum. After we've found the minimum of previous squares, we will simply add 1 to that for the current square.
// In the 2x2 example, when we reach the bottom right square, our lookback logic will be Math.min(1, 1, 1) so we would have 1 as the previous square count and we'd add 1 for the current square to give us 2.

// The result matrix (if we stored our count at each level) would be
// 1 1
// 1 2


// Time complexity: O(row * col)
// Space complexity: O(1)