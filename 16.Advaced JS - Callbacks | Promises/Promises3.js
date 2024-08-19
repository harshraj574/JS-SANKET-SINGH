const p1 = new Promise((res,rej)=>{
    console.log("a new promise object initialized");
    setTimeout(()=>{
        rej(2000);
    },3000);
});

const p2 = p1.then(function a(){console.log("a")},function b(){
    try{
        throw 10;

    }catch(err){
        console.log(err);

    }
});

