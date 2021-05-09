// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
// Example 3:

// Example 3:
// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:

// Example 4:
// Input: height = [1,2,1]
// Output: 2

// Area = L * W (larger numbers for both better),
// we have good control over L when moving pointers
// so move pointers based on which L is smaller to maintain a larger L
// The intuition behind this approach is that the area formed between the lines 
// will always be limited by the height of the shorter line
function maxArea(height: number[]): number {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while (start < end) {
        let width = end - start;
        // Among two large Ls, water will be up to smallest one
        let len = Math.min(height[start], height[end]);
        maxArea = Math.max(maxArea, width * len);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--
        }

    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));