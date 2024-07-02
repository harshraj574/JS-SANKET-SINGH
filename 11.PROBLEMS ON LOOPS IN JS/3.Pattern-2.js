

function Pattern2(x){
    for(let i=1;i<=x;i++){
        let string  = "";
        for(let j=1;j<=i;j++){
            string += "*";
        }
        console.log(string);
    }
}

Pattern2(4);