
function isPrime(x){
    for(let i=2;i<=x/2;i++){ //doesnt need to check till x only x/2 is sufficient
        if(x%i == 0){
            return false;
        }
    }
    return true;
}

let ans = isPrime(11);
console.log(ans);