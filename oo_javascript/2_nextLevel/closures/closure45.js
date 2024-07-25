function outerFunction() {
    const x = Date.now();
    return () => {
        console.log(x);
    }
}
  
const inner = outerFunction();
inner();
// console.log(x)   Throws reference error

/*
    if we call inner(), the code runs without any errors and prints time
    But, if we try to access x directly, JavaScript throws a reference error.
*/