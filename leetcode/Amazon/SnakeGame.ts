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


class SnakeGame {
    /**
     * Initialize your data structure here.
            @param width - screen width
            @param height - screen height 
            @param food - A list of food positions
            E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
     */
    occupied: any;
    snake: any;
    width: number;
    height: number;
    food: number[][];
    constructor(width: number, height: number, food: number[][]) {
        this.occupied = new Set()
        this.snake = [[0, 0]]
        this.occupied.add(`${this.snake[0]}`)
        this.height = height;
        this.width = width;
        this.food = food;
    }

    /**
     * Moves the snake.
            @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
            @return The game's score after the move. Return -1 if game over. 
            Game over when snake crosses the screen boundary or bites its body. 
     */
    move(direction: string): number {
        let head = this.snake[0]
        let meal = this.food[0]

        switch (direction) {
            case 'U':
                this.snake.unshift([head[0] - 1, head[1]])
                break
            case 'D':
                this.snake.unshift([head[0] + 1, head[1]])
                break
            case 'R':
                this.snake.unshift([head[0], head[1] + 1])
                break
            case 'L':
                this.snake.unshift([head[0], head[1] - 1])
                break
            default: break
        }

        head = this.snake[0]
        if (head[0] == this.height || head[0] < 0 ||
            head[1] == this.width || head[1] < 0) return -1

        if (this.food.length && head[0] == meal[0] && head[1] == meal[1]) this.food.shift()
        else this.occupied.delete(`${this.snake.pop()}`)

        if (this.occupied.has(`${head}`)) return -1

        this.occupied.add(`${head}`)

        return this.snake.length - 1
    }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */