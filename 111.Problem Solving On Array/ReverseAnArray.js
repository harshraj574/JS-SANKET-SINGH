
let arr = [1,3,45,6,7];

let i =0, j = arr.length-1;

while(i<j){
    [arr[i],arr[j]] = [arr[j],arr[i]]; // using this u can swap two numbers in js 
    i++;
    j--;
}
console.log(arr);
