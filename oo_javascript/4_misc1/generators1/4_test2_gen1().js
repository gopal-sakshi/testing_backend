function* gen1() {
    yield 12;
    yield 13;
    return 'end';
}
/*********************************************************/

function higherOrderFn1(genFnInstance) {
    console.log(genFnInstance.next());
    console.log(genFnInstance.next());
    console.log(genFnInstance.next());
}

higherOrderFn1(gen1());
/*********************************************************/