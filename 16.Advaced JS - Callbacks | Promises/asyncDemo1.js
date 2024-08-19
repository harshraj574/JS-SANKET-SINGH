function createTimer(timer,timerId){
    console.log("creating a new timer with id",timerId);
    setTimeout(()=>{
        console.log(`Timer with id ${timerId} is done`)
    },timer);
    console.log("Successfullt created a new timer with id",timerId);
}

console.log("Starting the code");
createTimer(2000,1);
createTimer(0,2);
console.log("Starting a loop");
for(let i=0;i<1000000000;i++){
    //something is going on
}
console.log("Loop is done");
console.log("Last line of code is done");