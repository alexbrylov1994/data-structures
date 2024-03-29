// 1710. Maximum Units on a Truck

// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

// Example 1:

// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
// Example 2:

// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// Output: 91

function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a, b) => a[1] - b[1]);
    let max = 0;

    // if truck is huge, can fit all boxes and not be full
    // so need to take it into account and check
    // if truck has size and if we have more boxes
    while (truckSize > 0 && boxTypes.length) {
        let box = boxTypes.pop();
        let numberOfBoxes = box[0];
        let numberOfUnitsPerBox = box[1];

        while (numberOfBoxes && truckSize) {
            max += numberOfUnitsPerBox;
            numberOfBoxes--;
            truckSize--;
        }

    }

    return max;

};

// Time Complexity : O(nlogn), where n is the number of elements in array boxTypes.

// Sorting the array boxTypes of size n takes (nlogn) time. Post that, we iterate over each element in array boxTypes and in worst case, 
// we might end up iterating over all the elements in the array. This gives us time complexity as  O(nlogn)+O(n)=O(nlogn).

// Space Complexity: O(1), as we use constant extra space

// OR

// function maximumUnits(boxTypes: number[][], truckSize: number): number {
//     boxTypes.sort((a, b) => a[1] - b[1]);
//     let totalUnits = 0;

//     while (truckSize > 0 && boxTypes.length) {
//         let last = boxTypes.length - 1;
//         let size = boxTypes[last][1];
//         let numberOfBoxes = boxTypes[last][0];

//         totalUnits += size;
//         numberOfBoxes--;
//         truckSize--;

//         if (numberOfBoxes === 0) {
//             boxTypes.pop();
//         } else {
//             boxTypes[last][0] = numberOfBoxes;
//         }
//     }

//     return totalUnits;
// };