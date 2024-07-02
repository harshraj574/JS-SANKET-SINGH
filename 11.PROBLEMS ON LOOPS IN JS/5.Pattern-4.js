

function Pattern4(x){
    for(let row=1;row<=x;row++){
        let string  = "";
        for(let j=0;j<(x-row);j++){
            string += " ";
        }
        for(let k=0;k<(2*row-1);k++){
            string +="*";
        }
        console.log(string);
    }
}

Pattern4(5);