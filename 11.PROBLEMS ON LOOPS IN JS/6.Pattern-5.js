

function Pattern5(n){
    for(let row=1;row<=n;row++){
        let str = "";
        for(let j=0;j<(n-row+1);j++){
            str += "*";
        }
        console.log(str);
    }
}

Pattern5(5);