function dumm1 () {
    if(Date.now() % 2 == 0) {
        console.log('do something ',Date.now());
        console.log('do something ',Date.now());

        return;
    } else {
        console.log('else block');
    }
    console.log('will this get executed');
}

dumm1();