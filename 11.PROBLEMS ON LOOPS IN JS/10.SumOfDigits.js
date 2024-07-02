
function SumOfDigits(n){
    let sum =0;
    while(n>=1){
        let rem = n%10;
        sum += rem;
        n = Math.floor(n/10); 
    }
    return sum;
}

let ans = SumOfDigits(4136);
console.log(ans);