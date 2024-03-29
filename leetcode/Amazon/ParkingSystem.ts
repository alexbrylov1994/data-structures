// 1603. Design Parking System

// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.


// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

class ParkingSystem {
    bigLots = 0;
    mediumLots = 0;
    smallLots = 0;
    map = {};

    constructor(big: number, medium: number, small: number) {
        this.map = {
            1: big,
            2: medium,
            3: small,
        }
    }

    addCar(carType: number): boolean {
        if (this.map[carType]) {
            this.map[carType]--;
            return true;
        } else {
            return false;
        }
    }
}

// Time O(1)
// Space O(1), always 3 elements long, or can use variables or array. so O(3) = O(1);


// var ParkingSystem = function(big, medium, small) {
//     this.counts = [null,big,medium,small]
// }

// ParkingSystem.prototype.addCar = function(carType) {
//     if ( this.counts[carType] ) {
//         this.counts[carType]--
//         return true
//     }
//     return false
// }