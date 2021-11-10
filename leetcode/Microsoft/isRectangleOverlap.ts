// 836. Rectangle Overlap

// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

// Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.


// Example 1:

// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true
// Example 2:

// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false
// Example 3:

// Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
// Output: false

// The answer for whether they don't overlap is LEFT OR RIGHT OR UP OR DOWN, where OR is the logical OR, 
// and LEFT is a boolean that represents whether rec1 is to the left of rec2. 
// The answer for whether they do overlap is the negation of this.

// The condition "rec1 is to the left of rec2" is rec1[2] <= rec2[0], 
// that is the right-most x-coordinate of rec1 is left of the left-most x-coordinate of rec2. 
// The other cases are similar.

// Note: we should also check if either of the rectangle is actually a line. 
// If this is the case, then we cannot have any positive overlapping according to the definition.

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    // check if either rectangle is actually a line
    if (rec1[0] == rec1[2] || rec1[1] == rec1[3] ||
        rec2[0] == rec2[2] || rec2[1] == rec2[3]) {
        // the line cannot have positive overlap
        return false;
    }

    // inteserct if one of coners are inside another rectangle
    return !(rec1[2] <= rec2[0] ||   // left
        rec1[3] <= rec2[1] ||   // bottom
        rec1[0] >= rec2[2] ||   // right
        rec1[1] >= rec2[3]);    // top
};