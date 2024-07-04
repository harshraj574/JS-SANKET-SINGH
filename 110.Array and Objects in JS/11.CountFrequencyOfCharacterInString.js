
let str = "harsh";

let frequencyMap = {};

for(const char of str){
    if(frequencyMap[char]){
        frequencyMap[char] +=1;
    }
    else{
        frequencyMap[char] = 1;
    }
}
console.log(frequencyMap);