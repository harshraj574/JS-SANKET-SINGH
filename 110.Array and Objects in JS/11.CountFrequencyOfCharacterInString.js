
let str = "javascript";

let frequencyMap = {};

for(const char of str){
    if(frequencyMap[char]){
        frequencyMap[char] +=1;
        console.log(frequencyMap[char]);
    }
    else{
        frequencyMap[char] = 1;
        console.log(frequencyMap[char]);
    }
}
console.log(frequencyMap);