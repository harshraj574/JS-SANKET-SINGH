

function Pattern3(x){
    for(let i=1;i<=x;i++){
        let s = "";
        //loop to concatenate spaces
        for(let j=1;j<=(x-i);j++){
                s += " ";
        }
        //loop to concatenate stars
        for(let k=1;k<=i;k++){
            s +="*";
        }
        console.log(s);
    }
}

Pattern3(4);