
function minOfThree(x,y,z){
    let min = x;
    if(x<y && x<z){
        min = x;
    }
    else if(y<x && y<z){
        min = y;
    }
    else{
        min = z;
    }
    return min;
}

let ans  = minOfThree(10,20,5);
console.log(ans);

