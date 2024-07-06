
//only one element is present in the array once all other elements are repeated
//find that element which is only present once

let ans = [1,2,1,2,3,4,4];

//we can use the bitswise operator to do the xor operation over all the elemenst of the array
let res =0;
for(let i=0;i<ans.length;i++){
    res ^= ans[i];
} 
console.log(res);