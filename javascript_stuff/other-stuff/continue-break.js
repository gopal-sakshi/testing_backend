function testBreak() {
    for (let i=2; i<7; i++) {
        if(i==5) {
            break;
        } else {
            console.log(i);
        }
        console.log(i*i,'-------');
    }
    console.log('outside... break');
}

// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.


function testContinue() {
    for (let i=2; i<7; i++) {
        if(i==5) {
            continue;
        } else {
            console.log(i);
        }
        console.log(i*i,'-----');
    }
    console.log('outside... continue');
}

testBreak();
testContinue();