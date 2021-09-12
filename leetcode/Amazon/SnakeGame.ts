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