function createIncrement() {
    let count = 0;
    function increment() { count++; }
    let message1 = `Msg1 = Count is ${count}`;
    function message2() { return `Msg2 = Count is ${count}`}
    function log() { console.log(message1); console.log(message2()); }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?