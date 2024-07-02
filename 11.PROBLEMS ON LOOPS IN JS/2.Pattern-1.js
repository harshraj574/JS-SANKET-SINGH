

function Pattern1(x){
    for(let i=0;i<x;i++){
        let string  = '';
        for(let j=0;j<x;j++){
            string += "*";
        }
        console.log(string);
    }
}

Pattern1(6);

