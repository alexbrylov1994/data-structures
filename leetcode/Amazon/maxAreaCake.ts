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
    let maxHeight = 0;
    let maxWidth = 0;
    let lastHeight = 0;
    let lastWidth = 0;

    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);


    for (let hCut of horizontalCuts) {
        maxHeight = Math.max(maxHeight, (hCut - lastHeight));
        lastHeight = hCut;
    }

    maxHeight = Math.max(maxHeight, (h - lastHeight));

    for (let vCut of verticalCuts) {
        maxWidth = Math.max(maxWidth, (vCut - lastWidth));
        lastWidth = vCut;
    }

    maxWidth = Math.max(maxWidth, (w - lastWidth));

    // n is showing number is bigInt like 1 or 1n 1===1n, but 1n is bigInt and 1 is int
    return Number(BigInt(maxWidth) * BigInt(maxHeight) % 1000000007n); // or (1e9 + 7)
}

// Time complexity: O(N⋅log(N)+M⋅log(M))

// Sorting an array of length nn costs n \cdot lognn⋅logn time. We need to sort both horizontalCuts and verticalCuts, which is why both are present in the time complexity. Although we also iterate through both arrays, which costs O(N) and O(M) time, these iterations are not as expensive as the sorting, and by the rules of Big O, do not get included in the final time complexity.

// Space complexity: O(1)

// Regardless of the input size, we only ever need to use 2 variables: maxHeight and maxWidth.
