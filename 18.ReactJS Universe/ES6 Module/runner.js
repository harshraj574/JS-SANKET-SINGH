/*
import bbl from "./sorting.js"; //default export can be importe using any name
import { selectionSort } from "./sorting.js"; //named export can be imported using the same name
*/
import bblSort,{selectionSort} from "./sorting.js"; //both can be imported in the same line aswell
let arr  = [2,5,4,3,1];

bblSort(arr);
console.log(arr);

let arr2 = [3,1,5,4,6];

selectionSort(arr2);
console.log(arr2);