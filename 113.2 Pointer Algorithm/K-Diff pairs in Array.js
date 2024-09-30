let arr = [3,1,4,1,5];
let map1 = new Map();

for(const nums of arr){
    if(map1.has(nums)){
        map1.set(nums,map1.get(nums)+1);
    }
    else{
        map1.set(nums,1);
    }
}
let k = 2;
let count = 0;

for(const [id,value] of map1){
    if(map1.has(k+id)){
        count++;
    }
}
console.log(count);