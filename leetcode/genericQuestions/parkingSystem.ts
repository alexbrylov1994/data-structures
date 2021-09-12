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