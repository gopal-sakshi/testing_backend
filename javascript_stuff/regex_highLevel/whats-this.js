console.log('\x1b[36m%s\x1b[0m');

function someFun() {
    if((/options/i).test('opTions')) {
        console.log('inside');
    } else {
        console.log('nada');
    } 
    const regex33 = /abc/
    console.log(regex33.test('abc'));
}

someFun();