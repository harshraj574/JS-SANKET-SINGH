
//  recurrence relation -> min(abs(hi-h(i+1)) + f(i+1,n) , abs(hi-h(i+2))+ f(i+2,n))

function frogJump(i,n,heigths){

    if(i == (n-1)){ // when frog reaches the last stone
        return 0;
    }
    if( i == (n-2)){ // if frog is at second last stone then he can only make a i+1 jump
        return Math.abs(heigths[i]-heigths[i+1]);
    }
    if(i> n) return Infinity;
    return Math.min(Math.abs(heigths[i]- heigths[i+1])+ frogJump(i+1,n,heigths),Math.abs(heigths[i]-heigths[i+2])+frogJump(i+2,n,heigths));
}

let heigths = [17, 8, 16, 2, 8, 17, 9, 8, 15, 15, 5, 10, 8, 16, 11, 8, 3, 2, 10, 18, 5, 5, 6, 4, 18, 1, 11, 8, 18, 2, 13, 8, 20, 17, 17, 9, 7, 14, 9, 11, 7, 18, 17];
let n = heigths.length;
console.log(frogJump(0,n,heigths));
