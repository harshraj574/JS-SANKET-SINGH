
function Fibonnaci(n){
    console.log(0);
    console.log(1);
    let prevNum = 1;
    let prev2Num = 0 ;
    let sum=0;
    for(let i=2;i<=n;i++){
        sum = prev2Num+prevNum;
        console.log(sum);
        prev2Num = prevNum;
        prevNum = sum;
    }
}

Fibonnaci(6);



