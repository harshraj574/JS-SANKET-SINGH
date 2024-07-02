
function gcdOf2Numbers(a,b){
    let ans = 1;
    for(let i=2;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            ans = i;
        }
    }
    return ans;
}

//Euclidean Algorithm for GCD
function gcdOf2NumbersUsingEuclidean(a,b){
    while(b){
        a %=b;
        [a,b] = [b,a];
    }
    return a;
}

let ans = gcdOf2Numbers(24,28);
let ans2 = gcdOf2NumbersUsingEuclidean(24,28);
console.log(ans,ans2);

