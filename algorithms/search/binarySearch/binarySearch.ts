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

export function binarySearchRecursive(array: number[], key: number, start: number, end: number): number {
  if (start <= end) {
    let middle: number = start + Math.floor((end - start) / 2);

    if (array[middle] === key) {
      return middle;
    }
    if (array[middle] < key) {
      start = middle + 1;
      return binarySearchRecursive(array, key, start, end);
    } else {
      end = middle - 1;
      return binarySearchRecursive(array, key, start, end);
    }
  } else {
    return -1;
  }
}
