
function mazePath(i,j,m,n){

    if(i == (m-1) && j == (n-1)){
        return 1;
    }
    if(i>= m || j >= n){
        return 0;
    }

    return mazePath(i,j+1,m,n) + mazePath(i+1,j,m,n);
 }
var uniquePaths = function(m, n) {

   return  mazePath(0,0,m,n);
};


console.log(uniquePaths(3,7));
