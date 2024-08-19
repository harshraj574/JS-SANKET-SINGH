console.log("start");
setTimeout(function timerCB(){
    console.log("Timer 1");
},1000);
const pr = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by promise construtor");
    setTimeout(function prCB(){
        const randomNumber  = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 === 0){
            res(randomNumber);
        }else{
            rej(randomNumber);
        }
    },2000);

    });

   pr.then(function f(){console.log("executing f")}, function g(){console.log("executing g")});
   pr.then(function h(){console.log("exceuting h")}, function i(){console.log("executing i")});
   for(let i=0;i<1000000000;i++){

   }
   for(let i=0;i<1000000000;i++){

   }
   console.log("end");
