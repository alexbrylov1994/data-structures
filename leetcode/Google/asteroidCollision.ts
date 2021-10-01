// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
// Example 4:

// Input: asteroids = [-2,-1,1,2]
// Output: [-2,-1,1,2]
// Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.


function asteroidCollision(asteroids: number[]): number[] {
    let stack = [];
    // oposite directions -> <- so stack must be positive (->) and  incoming one must be negative (->)
    for (let asteroid of asteroids) {
        while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
            let diff = stack[stack.length - 1] + asteroid; // is last element is bigger, else asteroid is bigger

            if (diff > 0) {
                asteroid = null; // incoming is destroyed
            } else if (diff < 0) {
                stack.pop(); // incoming destroys top of stack
            } else if (diff === 0) {
                asteroid = null; // they crush each other
                stack.pop();
            }
        }

        // if asteroid survived colisions and won't be colliding with other ones, push to stack
        if (asteroid) {
            stack.push(asteroid);
        }
    }

    return stack;
};

// time and space O(N)