// a place for you to
// use 'npm run start'

import { binarySearch, binarySearchRecursive } from "./algorithms/search/binarySearch/binarySearch";

console.log("hello world");

console.log(binarySearch([] , 5));
console.log(binarySearch([1], 1));
console.log(binarySearch([1, 2], 1));
console.log(binarySearch([1, 5, 10, 12], 5));
console.log(binarySearch([1, 5, 10, 12, 14, 17, 22, 100],17));
console.log(binarySearch([1, 5, 10, 12, 14, 15, 17, 22, 100],17));
