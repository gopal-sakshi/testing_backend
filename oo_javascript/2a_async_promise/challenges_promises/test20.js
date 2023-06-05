console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => { console.log('timer2') }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => { console.log('promise2') })
}, 0);

console.log('end');

/*

EXPLANATION
- start is logged
- promise1 is immediately resolved... the "cb" in "then block" pushed into microTaskQueue
- timer1 is pushed into macroTaskQueue
- end is logged

- Now 1st iteration of eventloop is over
- call stack is empty... JS engine sees microTaskQueue & executes "cb" in then block
- promise1 is logged
- timer2 is pushed into macroTaskQueue

- Now microTaskQueue is empty
- JS engine looks for macroTaskQueue
- timer1 is already done (coz, 0 seconds)
- timer1 is logged
- promise1 is pushed into microTaskQueue 
- there were 2 tasks in macroTaskQueue ===> timer1 & timer2
  So, timer1 got over (now, timer2 task is left)
  but JS engine wont execute 2nd task yet...
  it will look for any tasks in callStack... microTaskQueue...
  only if they are empty ---> it will executed subsequent task in macroTaskQueue

- JS engine encounters promise2 in microTaskQueue
- promise2 is logged
- now both call stack, microTaskQueue are empty 
- JS engine goes to look in macroTaskQueue ====> timer2
- timer2 is logged

*/