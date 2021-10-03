// 1937. Maximum Number of Points with Cost

// You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want to maximize the number of points you can get from the matrix.

// To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score.

// However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.

// Return the maximum number of points you can achieve.

// abs(x) is defined as:

// x for x >= 0.
// -x for x < 0.

// Example 1:

// Input: points = [[1,2,3],[1,5,1],[3,1,1]]
// Output: 9
// Explanation:
// The blue cells denote the optimal cells to pick, which have coordinates (0, 2), (1, 1), and (2, 0).
// You add 3 + 5 + 3 = 11 to your score.
// However, you must subtract abs(2 - 1) + abs(1 - 0) = 2 from your score.
// Your final score is 11 - 2 = 9.
// Example 2:

// Input: points = [[1,5],[2,3],[4,2]]
// Output: 11
// Explanation:
// The blue cells denote the optimal cells to pick, which have coordinates (0, 1), (1, 1), and (2, 0).
// You add 5 + 3 + 4 = 12 to your score.
// However, you must subtract abs(1 - 1) + abs(1 - 0) = 1 from your score.
// Your final score is 12 - 1 = 11.

// This solution uses the left and right arrays that you might have read elsewhere.
// I will try my best to help you understand the mental model.

// Using the case points = [[1,2,3],[1,5,1],[3,1,1]], and output = 9

// We start from index 1 (second row) , and we're always looking up
// So starting at index [1,0], we ask ourself, what is the max value from the previous row?

// We'll initialize, let prev = points[0], which gives us [1,2,3],
// when I am at [1,0], the max value from prev (but only looking left, is 1)
// When I am at [1,1], the values that I can look towards are 1,2
// When I'm at [1,2], the values I can look left towards are now 1,2,3

function maxPoints(points: number[][]): number {
    let prev = points[0];
    let curr = Array(points[0].length);

    for (let i = 1; i < points.length; i++) {

        // from left to right; 
        for (let j = 0, maxAdd = 0; j < points[0].length; j++) {
            maxAdd = Math.max(maxAdd - 1, prev[j]);
            curr[j] = points[i][j] + maxAdd;
        }

        for (let j = points[0].length - 1, maxAdd = 0; j >= 0; j--) {
            maxAdd = Math.max(maxAdd - 1, prev[j]);
            curr[j] = Math.max(curr[j], points[i][j] + maxAdd)
        }


        prev = curr;
        curr = Array(points[0].length)

    }
    return Math.max(...prev)
};