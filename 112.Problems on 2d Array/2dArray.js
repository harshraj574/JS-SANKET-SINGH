

let arr = Array(5);
for(let i=0;i<5;i++){
    let innerArray = Array(6).fill(0);
    arr[i] = innerArray;
}
// console.log(arr);
arr[2][2] = 1;
console.log(arr);