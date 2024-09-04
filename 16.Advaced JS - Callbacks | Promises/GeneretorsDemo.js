
//usinf function* we declare a generator function
function* myGenerator(){
    console.log("inside generator");
    yield 10;
    console.log("line 1");
    yield 20;
    console.log("line 2");
    yield 30;
    console.log("line 3");
    yield 40;
    console.log("line 4");
}

// Another genretor function where 
function* myGeneratorArr(arr){
    console.log("inside generator");
    for(let i=0;i<arr.length;i++){
        yield arr[i];
    }
}


// const iterator = myGenerator();
// console.log(iterator.next()); //executes till it encounters the first yield
// console.log(iterator.next()); //executes till it encounters the second yield
// console.log(iterator.next()); //executes till it encounters the third yield
// console.log(iterator.next()); //executes till it encounters the fourth yield
// console.log(iterator.next()); //this will return value undefined and done true 

const itr2 = myGeneratorArr([1,2,3,4]);
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());

