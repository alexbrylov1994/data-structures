// 353. Design Snake Game

// Design a Snake game that is played on a device with screen size height x width. Play the game online if you are not familiar with the game.

// The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.

// You are given an array food where food[i] = (ri, ci) is the row and column position of a piece of food that the snake can eat. When a snake eats a piece of food, its length and the game's score both increase by 1.

// Each piece of food appears one by one on the screen, meaning the second piece of food will not appear until the snake eats the first piece of food.

// When a piece of food appears on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

// The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).

// Implement the SnakeGame class:

// SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size height x width and the positions of the food.
// int move(String direction) Returns the score of the game after applying one direction move by the snake. If the game is over, return -1.


// Example 1:


// Input
// ["SnakeGame", "move", "move", "move", "move", "move", "move"]
// [[3, 2, [[1, 2], [0, 1]]], ["R"], ["D"], ["R"], ["U"], ["L"], ["U"]]
// Output
// [null, 0, 0, 1, 1, 2, -1]

// Explanation
// SnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
// snakeGame.move("R"); // return 0
// snakeGame.move("D"); // return 0
// snakeGame.move("R"); // return 1, snake eats the first piece of food. The second piece of food appears
//                      // at (0, 1).
// snakeGame.move("U"); // return 1
// snakeGame.move("L"); // return 2, snake eats the second food. No more food appears.
// snakeGame.move("U"); // return -1, game over because snake collides with border

var SnakeGame = function (width, height, food) {
    this.m = height;
    this.n = width;
    this.food = food;
    this.snake = [[0, 0]];
    this.dir = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    };
};

SnakeGame.prototype.move = function (direction) {
    let [i, j] = this.dir[direction];
    let x = i + this.snake[0][0];
    let y = j + this.snake[0][1];
    for (let [a, b] of this.snake) {
        if (a === x && b === y) {
            if (this.snake[this.snake.length - 1][0] !== a || this.snake[this.snake.length - 1][1] !== b) return -1;
        }
    }
    if (x < 0 || y < 0 || x >= this.m || y >= this.n) {
        return -1;
    } else {
        this.snake.unshift([x, y]);
        if (this.food.length > 0 && x === this.food[0][0] && y === this.food[0][1]) {
            this.food.shift();
        } else {
            this.snake.pop();
        }
        return this.snake.length - 1;
    }
};