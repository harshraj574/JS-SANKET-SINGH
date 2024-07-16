
function Mul2Matrix(matrix1,matrix2){
    let result = Array(matrix1.length);
    for(let i=0;i<matrix1.length;i++){
        let innerArray = Array(matrix2[0].length).fill(0);
        result[i] = innerArray;
    }
    for(let i=0;i<result.length;i++){
        for(let j=0;j<result[0].length;j++){
            for(let k=0;k<matrix2.length;k++){
                result[i][j]  += (matrix1[i][k] * matrix2[k][j]);
            }
        }
    }

    console.log(result);
}

let mat1 = [[12,8,4],[3,17,14],[9,8,10]];
let mat2 = [[5,19,3], [6,15,9],[7,8,16]];

Mul2Matrix(mat1,mat2);


