

function printColumWise(grid){
    let str = "";
    for(let column=0;column<3;column++){
        for(let row=0;row<grid.length;row++){
            str += grid[row][column] + " ";
        }
    }
    console.log(str);
}

function printColumnWave(grid){
    let str  = "";
    for(let column=0;column<3;column++){
        if(column%2 == 0){
        for(let row=0;row<grid.length;row++){
            str += grid[row][column] + " "; 
        }
    }
    else{
        for(let row=grid.length-1;row>=0;row--){
            str += grid[row][column] + " ";

        }
    }
    }
    console.log(str);
}




let arr = [[1,2,3],[4,5,6],[7,8,9]];
// printColumWise(arr);
printColumnWave(arr);