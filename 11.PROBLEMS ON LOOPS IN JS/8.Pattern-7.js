
function UpperPart(n){
    
    for(let row=1;row<=((n-1)/2);row++){
        let str ="";
        for(let j=1;j<=row;j++){
            str += "*";
        }
        for(let k=1;k<=(n-2*(row));k++){
            str += " ";
        }
        for(let l=1;l<=row;l++){
            str += "*";
        }
        console.log(str);
    }
}

function MiddlePart(n){
    let str = "";
    for(let row=1;row<=n;row++){
        str += "*";
    }
    console.log(str);
}

function LowerPart(n){
    for(let row=1;row<=((n-1)/2);row++){
        let str = "";
        for(let lstar=1;lstar<=(((n-1)/2)-row)+1;lstar++){
            str += "*";
        }
        for(let space=1;space<=row;space++){
            str += " ";
        }
        for(let rstar=1;rstar<=(((n-1)/2)-row)+1;rstar++){
            str += "*";
        }
        console.log(str);
    }
   

}

function Pattern7(n){
    UpperPart(n);
    MiddlePart(n);
    LowerPart(n);
}

Pattern7(7);

