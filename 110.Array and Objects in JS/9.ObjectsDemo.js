
let x = {name: "harsh", rollno: "21"};

let y = {
    name: "Raj",
    rollno: "20",
    marks: 80
}
//from key u can access the value not not the vice-versa
//in an object key is unique
console.log(x["name"]);
console.log(y.name);

//this is how you can update the value of a key 
y.rollno = "13";
console.log(y);

//add an key,value pair to an existing object
x.marks = 20;
console.log(x);

//using this also u can add/update a key,value pair
y["school"] = "ngfs";
console.log(y);

//to delete a key,value pair from the object we can use the delete operator
delete y.school;
console.log(y);