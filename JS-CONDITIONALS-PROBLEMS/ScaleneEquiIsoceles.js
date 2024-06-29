
function typeOfTriangle(x,y,z){
    if(x == y && y == z && z == x){
        return "Equilateral"
    }
    else if(x == y || y == z || z == x){
        return "Iscoceles"
    }
    else{
        return "Scalene"
    }
}

let ans = typeOfTriangle(10,10,10);
console.log(ans);

