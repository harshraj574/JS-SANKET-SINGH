function* gen() {
    console.log("inside generator");
    const x = yield 10;
    return 74; // if we write a return statment then it yileds the value with return and makes done:true
    const y = x + 20;
    yield y;
}
const iter = gen(); // it retuns a generator object which has a .next method and donr property
console.log(iter);
console.log(iter.next());
console.log(iter.next(10));
console.log(iter.next());