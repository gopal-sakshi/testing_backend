console.log('\x1b[36m%s\x1b[0m');           // \x1b[36m -----> some bluish thingy
console.log('\x1b[90m%s\x1b[0m');           // \x1b[90m -----> bright black 
console.log('\x1b[91m%s\x1b[0m');           // \x1b[91m	-----> red
console.log('\x1b[92m%s\x1b[0m');           // \x1b[91m	-----> green

function someFun() {
    if((/options/i).test('opTions')) {
        console.log('case-insensitive ---> inside');
    }
    if ((/options/).test('opTions')) {
        console.log('this wont get printed');
    } else {
        console.log('coz u used case insensitive ---> its nada');
    }
    const regex33 = /abc/
    console.log(regex33.test('abc'));
}

someFun();