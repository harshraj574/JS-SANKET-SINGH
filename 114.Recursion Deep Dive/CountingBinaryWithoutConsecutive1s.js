


function binaryWithoutConsecutive1(n){
    if(n == 0 ) return 1;
    if(n == 1) {
        return 2;
    }
    return binaryWithoutConsecutive1(n-1)+binaryWithoutConsecutive1(n-2);
}


let n = 3;
console.log(binaryWithoutConsecutive1(n));