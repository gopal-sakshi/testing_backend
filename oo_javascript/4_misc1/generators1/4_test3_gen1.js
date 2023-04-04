function* gen1(cb23) {
    yield 12;
    yield 13;
    return 'end';
}
/*********************************************************/

function higherOrderFn1(genFnInstance) {
    function cb23() { console.log('cb23 invoked') }
    var blah1 = genFnInstance();
    console.log(blah1.next());
    console.log(blah1.next());
    console.log(blah1.next());
}

higherOrderFn1(gen1);
/*********************************************************/