
function UpperTriangle(n){
    for(let i=0;i<n;i++){
        let str = "";
        for(let j=0;j<(n-i);j++){
            str += " ";
        }
        for(let k=0;k<(2*i-1);k++){
            str += "*";
        }
        console.log(str);
    }
}

function LowerTriangle(n){
    for(let i=0;i<n;i++){
        let str = "";
        for(let j=0;j<i;j++){
            str += " ";
        }
        for(let k=0;k<(2*(n-i)-1);k++){
            str += "*";
        }
        console.log(str);
    }
}

function Pattern6(n){
    UpperTriangle(n);
    LowerTriangle(n);
}

Pattern6(5);