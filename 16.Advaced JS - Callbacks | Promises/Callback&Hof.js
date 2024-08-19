// let arr = [1,2,3,4];

// let square = arr.map((ele)=>{
//     return ele*ele;
// })
// console.log(square);

//my own implementation of map function
 function myMap(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
// here myMap is a higher order function(hof) as it allows a another function to be passed as an argument
// here fn is a callback function as it is passed as an argument to another function

console.log(myMap([1,2,3,4],(ele)=>{
    return ele*ele }));

// -------------> DISADVANTAGES OF CALLBAKS --------------------------------    
// ->> 1) disadvantages of is callback hell 
// -> 2) Inversion of control -> it is the phenomena where we pass our callback function inside another but we dont
//know how the hof is executed so we are giving away the control/or trusting the hof that it calls the callback rightly

