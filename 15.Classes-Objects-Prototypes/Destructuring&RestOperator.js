/*
const product = {name: "iphone 15", price: "10000", category: "Mobiles"};

const {name,price,category} = product; //destructuring the keys from the object

// console.log(name,price,category);




// USING SPREAD OPERATOR TO DESTRUCTURE THE OBJECT INSIDE ANOTHER OBJECT
const purchasedProduct = {orderId : "xyz123", orderDate : "30/07/2024",...product};
// here the purchasedProduct has its 2 own (key,value) pairs and the product has been spread into this object 
console.log(purchasedProduct);
*/

/*
//Destructuring an nested Object
const nestedProduct = {name: "apple band", price: 25000, category: {categoryId: 12, name: "Smart Band" }};
const {category:{categoryId}} = nestedProduct;
console.log(categoryId);

//combine multiple objects to one new object

const newObj = {a: "this is a",b: "This is b"};
const result = {...nestedProduct,...newObj}; //combining two objects into one new object
console.log(result);
 
 //  ->clone of a existing object
 const clone = {...newObj};
 console.log(clone);


 //-----> REST PARAMETER -> opposite of spread parameter
 // so sing rest parameter we are combining multiple values into one entity
const restObject = {name: "iphone 15", price: "10000", category: "Mobiles",description: "this is a good phone"};

 const {description, ...phoneDetails} = restObject;
 console.log(phoneDetails, description);
*/

// -----> Array destructuring

