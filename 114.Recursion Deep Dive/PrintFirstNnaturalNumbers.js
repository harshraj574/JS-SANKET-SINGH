

function firstNNaturalNumbersRecursive(n){
    if(n == 1){
        console.log(n);
        return 1;     
    }
    let ans  = 1 + firstNNaturalNumbersRecursive(n-1);
    console.log(ans);
    return ans;

}

let n = 10;
firstNNaturalNumbersRecursive(n)