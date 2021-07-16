// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts

// You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

// horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
// verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 109 + 7.

// Example 1:

// Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
// Output: 4 
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.
// Example 2:

// Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
// Output: 6
// Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.
// Example 3:

// Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
// Output: 9

function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
    // Start by sorting the inputs
    horizontalCuts.push(0, h);
    verticalCuts.push(0, w);
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    let hMax = 0;
    let vMax = 0;

    // Consider the edges first
    for (let i = 1; i < verticalCuts.length; i++) {
        // verticalCuts[i] - verticalCuts[i - 1] represents the distance between
        // two adjacent edges, and thus a possible width
        hMax = Math.max(hMax, verticalCuts[i] - verticalCuts[i - 1]);
    }

    // Consider the edges first
    for (let i = 1; i < horizontalCuts.length; i++) {
        // horizontalCuts[i] - horizontalCuts[i - 1] represents the distance between
        // two adjacent edges, and thus a possible height
        vMax = Math.max(vMax, horizontalCuts[i] - horizontalCuts[i - 1]);
    }

    // Be careful of overflow, and don't forget the modulo!
    return (hMax * vMax) % (1e9 + 7);
}