
function isValidTriangle(x,y,z){
    let ans = false;
    if(x+y >= z && y+z>= x && z+x>=y){
        ans = true;
    }
    return ans;
}

let ans = isValidTriangle(10,12,1);
console.log(ans);