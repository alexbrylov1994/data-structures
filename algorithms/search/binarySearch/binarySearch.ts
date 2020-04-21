/* 
test cases 
[]
[1]
[1, 2],
[1, 5, 10, 12]
[1, 5, 10, 12, 14, 17, 22, 100]
*/

export function binarySearch(array: number[], key: number): number {
  let start: number = 0
  let end: number = array.length - 1;

  while (start <= end) {
    // start + Math.floor((end - start) / 2);
    let middle: number = Math.floor((end + start) / 2);

    // if middle element, return it
    if (array[middle] === key) {
      return middle;
    }
    // update pointer based on if we go left or right in array
    if (array[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

export function binarySearchRecursive(array: number[], key: number, end: number, start: number): number {

  // while (start <= end) {
  //   // or Math.floor((end + start) / 2)
  //   let middle: number = start + Math.floor((end - start) / 2);

  //   // if middle element, return it
  //   if (array[middle] === key) {
  //     return middle;
  //   }
  //   // update pointer based on if we go left or right in array
  //   if (array[middle] < key) {
  //     start = middle + 1;
  //   } else {
  //     end = middle - 1;
  //   }
  // }

  return -1;
}
