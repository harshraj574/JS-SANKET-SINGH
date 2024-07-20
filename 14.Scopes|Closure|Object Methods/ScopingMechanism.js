/*
var teacher  = "harsh";
console.log(teacher);
console.log(namee);
let namee  = "raj";

function fun(){
    // var teacher  = "sarthak"; 
   
    console.log(teacher);
    console.log(namee);
}

function gun(){
    var student = "aman";
    console.log(student);
}

fun();
gun();
console.log(teacher);
*/

let x = 10;
var y = 10;
function fun(){
    // var x = 20;
    // let y = 30;
    {
        let y = 40;
        console.log(x,y);
    }
    console.log(x,y);
}
fun();
console.log(x,y);



