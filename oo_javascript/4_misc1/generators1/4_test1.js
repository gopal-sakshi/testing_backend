function* gen1() {
    yield 12;
    yield 13;
    return 'end';
}
/*********************************************************/
// var blah1 = gen1;
// console.log(blah1().next());
// console.log(blah1().next());
// console.log(blah1().next());
/**************************************************************************************/
var blah1 = gen1();                                     // gen1 vs gen1()
console.log(blah1.next());
console.log(blah1.next());
console.log(blah1.next());
/*********************************************************/