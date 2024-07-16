
let products = {
    name: "Iphone 15 pro",
    company: "Apple",
    price: 125000,
    warranty: "1 Year",
    color: "Black"
}
/*
 Considering the fact that product is an  object it is a collection of several (key,value) pairs.
All the keys inside an object are unique,we cannot have duplicate keys inside an object 
 */

/*
   1) Oject.keys() -> It will fetch all the unique keys of the object
   Object.keys(products);
-> this will return an array of string where each string represent an unique key.
*/

//  console.log(Object.keys(products));

 /*
   2) Object.values() -> It will fetch all the valus of the keys present in the object.
   Object.values(products);
   -> it returns an array of string where each string represent a value corresponding to a key 
   in the object.
  */
//  console.log(Object.values(products));

 /*
  3) Object.entries() -> if instead of just fetching the keys or values seperately,we want to fetch the complete
  pair of (key,value) then we can use the Object.entries meathod.
  This method will take one argument i.e Object, and returns an array where each index contains a 2 length array
  whose Oth index is th key and 1st index is the value
   
 */
// let matrix = Object.entries(products);
// console.log(matrix[1][1]);


  /*
    Q) How can we check the number of key,value pair in the object
    -> we can use any of the methods like Object.keys(product) -> this will return the array of unique keys
    in the object and if we do a .length on that it will return the number of key,value pair present in the object.
   */
  console.log(Object.keys(products).length);