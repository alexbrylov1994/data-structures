// Check if a word exists in a grid or not

// Given a 2D grid of characters and a word, the task is to check if that word exists in the grid or not. A word can be matched in 4 directions at any point.
// The 4 directions are, Horizontally Left and Right, Vertically Up and Down. 
// Examples: 

// Input:  grid[][] = {"axmy",
//                     "bgdf",
//                     "xeet",
//                     "raks"};
// Output: Yes

// a x m y
// b g d f
// x e e t
// r a k s

// Input: grid[][] = {"axmy",
//                    "brdf",
//                    "xeet",
//                    "rass"};
// Output : No

let r = 4;
let c = 4;


function findmatch(mat, pat, x, y, nrow, ncol, level) {
    let l = pat.length;

    // Pattern matched
    if (level == l)
        return true;

    // Out of Boundary
    if (x < 0 || y < 0 || x >= nrow || y >= ncol)
        return false;

    // If grid matches with a letter while
    // recursion
    if (mat[x][y] == pat[level]) {

        // Marking this cell as visited
        let temp = mat[x][y];
        mat[x][y] = '#';

        // finding subpattern in 4 directions
        let res =
            findmatch(mat, pat, x - 1, y, nrow, ncol, level + 1) |
            findmatch(mat, pat, x + 1, y, nrow, ncol, level + 1) |
            findmatch(mat, pat, x, y - 1, nrow, ncol, level + 1) |
            findmatch(mat, pat, x, y + 1, nrow, ncol, level + 1);

        // marking this cell
        // as unvisited again
        mat[x][y] = temp;
        return res;
    }
    else // Not matching then false
        return false;
}

// Function to check if the word exists in the grid or not
function checkMatch(mat, pat, nrow, ncol) {

    let l = pat.length;

    // if total characters in matrix is
    // less then pattern lenghth
    if (l > nrow * ncol)
        return false;

    // Traverse in the grid
    for (let i = 0; i < nrow; i++) {
        for (let j = 0; j < ncol; j++) {

            // If first letter matches, then recur and check
            if (mat[i][j] == pat[0])
                if (findmatch(mat, pat, i, j, nrow, ncol, 0))
                    return true;
        }
    }
    return false;
}

	// let grid = [ "axmy".split(''),
	// 					"bgdf".split(''),
	// 					"xeet".split(''),
	// 					"raks".split('') ];

	// // Function to check if word exists or not
	// if (checkMatch(grid, "geeks", r, c))
	// 	document.write("Yes");
	// else
	// 	document.write("No");

