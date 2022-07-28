// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm.then((value) => {
  console.log("this gets called after the end of the main stack. the value received and returned is: ", value);
  return value;
});
// instantly logging the value of thenProm
console.log('thenProm is ', thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log('timeout thenProm', thenProm);
});

console.log('normal thenProm', thenProm);
// logs, in order:
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
