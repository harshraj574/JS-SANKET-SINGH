

// let func = function (x, y) { //anymous function expression
//     return x + y;
//   };
 
//   let ans = func(2, 5);
//   console.log(ans);
 // -> Using anonymous function expression u cant call a recusrive function as there is no name 
 
//   let add = function AddNumbers(x, y) { //named function expression
//     return x + y;
//   };
//   console.log(add(2, 3));

//   let func3 = (x)=>{ //arrow function expression
//     return x*x;
//   }
//   console.log(func3(5));

// let arr = [1,2,3,4];
// let arr2 = arr.map((x)=> {
//     return x*x;
// });
// console.log(arr2);

//                  -> MAKE MY OWN CUSTOM MAP FUNCTION
let dummy_arr = [1,2,3,5,6]; 
// function customMap(arr,fun){
//     let arr2 = [];
//     for(let i=0;i<arr.length;i++){
//         arr2.push(fun(arr[i]));
//     }
//     return arr2;
// }
// const Array = {
//     customMap(arr,fun){
//         let arr2 = [];
//         for(let i=0;i<arr.length;i++){
//             arr2.push(fun(arr[i]));
//         }
//         return arr2;
//     }
// } //returns the result in a new array
// let ans = Array.customMap(dummy_arr,(x)=>{
//     return x*x;
// });
// console.log(ans);

//    ARROW FUNCTIONS
/*
 let cube = (x)=> x*x*x; //example-1
 console.log(cube(10));

 let sqrt = (x)=>{ //example-2
    return Math.sqrt(x);
 }
 console.log(sqrt(4));
 */

 //IFFE -> Immediately invoked function expression
 let ans  = (function (x){
    return x*x;
 })(10);
 console.log(ans);