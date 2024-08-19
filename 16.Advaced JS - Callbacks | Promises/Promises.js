let a = new Promise((resolve,reject)=>{
    console.log("Promise fullfiled");
    reject(100);
    console.log("hello from cb")
});
console.log("hello");
console.log(a);
a.then((data)=>{
    console.log("the promise is resolved with",data);
},()=>{
    console.log("function on onfullfillment array");
}).catch((err)=>{
    console.log("the promise is rejected with",err);
})


console.log("world");
console.log("end");
