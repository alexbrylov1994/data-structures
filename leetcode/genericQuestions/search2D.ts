
let R, C;

// For searching in all 8 direction
let x = [-1, -1, -1, 0, 0, 1, 1, 1];

let y = [-1, 0, 1, -1, 1, -1, 0, 1];

// This function searches in all
// 8-direction from point
// (row, col) in grid[][]
function search2D(grid, row, col, word) {
    // If first character of word
    // doesn't match with
    // given starting point in grid.
    if (grid[row][col] != word[0])
        return false;

    let len = word.length;

    // Search word in all 8 directions
    // starting from (row, col)
    for (let dir = 0; dir < 8; dir++) {
        // Initialize starting point
        // for current direction
        let k, rd = row + x[dir], cd = col + y[dir];

        // First character is already checked,
        // match remaining characters
        for (k = 1; k < len; k++) {
            // If out of bound break
            if (rd >= R || rd < 0 || cd >= C || cd < 0)
                break;

            // If not matched, break
            if (grid[rd][cd] != word[k])
                break;

            // Moving in particular direction
            rd += x[dir];
            cd += y[dir];
        }

        // If all character matched,
        // then value of must
        // be equal to length of word
        if (k == len)
            return true;
    }
    return false;
}

// Searches given word in a given
// matrix in all 8 directions
function patternSearch(grid, word) {
    // Consider every point as starting
    // point and search given word
    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            if (search2D(grid, row, col, word))
                console.log("pattern found at " + row + ", " + col);
        }
    }
}

// // Driver code
// R = 3;
// C = 13;
// let grid = [['G', 'E', 'E', 'K', 'S', 'F', 'O',
//     'R', 'G', 'E', 'E', 'K', 'S'],

// ['G', 'E', 'E', 'K', 'S', 'Q', 'U', 'I', 'Z',
//     'G', 'E', 'E', 'K'],

// ['I', 'D', 'E', 'Q', 'A', 'P', 'R', 'A', 'C',
//     'T', 'I', 'C', 'E']];
// patternSearch(grid, "GEEKS");
// document.write("<br>");
// patternSearch(grid, "EEE");


