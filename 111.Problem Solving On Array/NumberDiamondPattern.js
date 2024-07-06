
function UpperPart(n){
    let str = "";
    for(let i=1;i<=n;i++){
        let j = i;
        for(let k=1;k<i;k++){
            str += " ";
        }
        while(j<=n){
            str += `${j} `;
            j++;
        }
        console.log(str);
        str = "";
    }
}

function LowerPart(n){
    let str = "";
    for(let i=1;i<=n;i++){
        for(let k=1;k<=(n-i-1);k++){
            str += " ";
        }
        let j = n-i;
        while(j>0 && j<=n){
            str += `${j} `;
            j++;
        }
        console.log(str);
        str = "";
    }
}

function NumberDiamondPattern(n){
    UpperPart(n);
    LowerPart(n);
}


 NumberDiamondPattern(7);