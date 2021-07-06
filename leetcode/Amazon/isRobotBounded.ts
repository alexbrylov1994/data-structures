// 1041. Robot Bounded In Circle

// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

const directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
]


function isRobotBounded(instructions: string): boolean {

    let start = [0, 0]

    let direction = 0;

    for (let instruction of instructions) {
        if (instruction === 'R') {
            direction = (direction + 1) % 4;
        } else if (instruction === 'L') {
            // will always be one less or if dir === -1 then dir = 3
            direction = (direction + 3) % 4;
        } else {
            let x = directions[direction][0];
            let y = directions[direction][1];
            start = [start[0] + x, start[1] + y];
        }
    }

    // robot returns into initial position
    // or robot doesn't face north
    return (start[0] === 0 && start[1] === 0) || (direction != 0);
};

// Time: O(N) where N is a number of instructions to parse.
// Space: O(1), because the array directions contains only 4 elements.