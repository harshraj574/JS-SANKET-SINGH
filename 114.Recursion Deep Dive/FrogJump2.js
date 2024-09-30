
// now the slight variation is that the frog can now jump from i-> i+1,i+2,....i+k  for a given k 

function frogJump2(i,n,k,heigths){
    if( i === (n-1)) return 0;
    for(let j=1;j<=k;j++){
        if(i+j === (n-1)) return Math.abs(heigths[i]-heigths[i+j]);
    }
    if(i>(n-1)) return Infinity;
    

  let result  = Infinity;
    for(let j=1;j<=k;j++){
        result = Math.min(result, Math.abs(heigths[i] - heigths[i+j])+frogJump2(i+j,n,k,heigths));
    }
    return result;
}


let heigths = [10,30,40,50,20];
let n = heigths.length;
let k = 3;
console.log(frogJump2(0,n,k,heigths));


