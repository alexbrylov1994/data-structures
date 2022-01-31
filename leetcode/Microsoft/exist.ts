// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

function exist(board: string[][], word: string): boolean {
    var dfs = function (row, col, i) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || word[i] !== board[row][col]) {
            return false;
        }

        if (i === word.length - 1) {
            return true;
        }

        // fix this, need to mark board and reset?

        // This can be done with strings:

        // let s=new Set();
        // s.add("1,1");
        // s.add("2,2");
        board[row][col] = null
        console.log('X: ', row, ' ', col);
        if (dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1) || dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1)) {
            return true;
        }

        // reset board
        board[row][col] = word[i];

    }

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            if (board[row][column] === word[0]) {
                if (dfs(row, column, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};

// WORk!
function wordExist(board: string[][], word: string): boolean {
    let result = false;
    var check = function (r, c, i) {
        if (!result) {
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
            if (board[r][c] != word[i]) return; // wrong character
            if (i == word.length - 1) { // got to the end means we found a correct path
                result = true;
                return;
            }
            board[r][c] = null; // mark our path so we dont go back and forth
            // try all directions
            check(r + 1, c, i + 1)
            check(r - 1, c, i + 1)
            check(r, c + 1, i + 1)
            check(r, c - 1, i + 1)
            board[r][c] = word[i] // reset our board , very important
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == word[0]) {
                check(i, j, 0)
                if (result) return result;
            }
        }
    }

    return result;
};